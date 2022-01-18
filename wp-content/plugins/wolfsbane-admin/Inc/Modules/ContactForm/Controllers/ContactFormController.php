<?php
/* if (!session_id())
    session_start(); */

/**
 * @package Wolfsbane Admin Plugin
 */

use Rakit\Validation\Validator;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class ContactFormController extends BaseController
{
    public $settings;

    private $post_id;
    private $validator;

    public function register()
    {
        $post = get_page_by_title('Write Project Review');
        $this->post_id = isset($post)? $post->ID : 0;

        $this->validator = new Validator();
        $this->settings = new SettingsApi();
        $this->callbacks = new ContactFormCallbacks($this);

        add_shortcode('wolfsbane-contact-form', array($this->callbacks, 'renderContactForm'));
        
        add_action('add_meta_boxes', array($this, 'addContactInfoMetabox'));
        add_action('save_post', array($this, 'saveContactInfoMetabox'));

        add_action('wp_ajax_submit_contact_form', array($this, 'save'));
        add_action('wp_ajax_nopriv_submit_contact_form', array($this, 'save'));

    }

    public function addContactInfoMetabox() {
        add_meta_box(
            'wolfsbane_contact_page_address',
            'Contact Information',
            array($this->callbacks, 'renderContactPageAddressBox'),
            'page',
            'side',
            'default',
            ''
        );
    }

    public function saveContactInfoMetabox($post_id) {
        $post_type = get_post_type($post_id);
        if ($post_type != "page")
            return;
            
        if (!isset($_POST[WB_CONTACT_PAGE_INFO_METABOX_ACTION]))
            return;
            
        $nonce = $_POST[WB_CONTACT_PAGE_INFO_METABOX_ACTION];
        
        if (!wp_verify_nonce($nonce, WB_CONTACT_PAGE_INFO_METABOX_ACTION))
            return;
            
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
            return;
            
        if (!current_user_can('edit_post', $post_id))
            return;

        $address_line_1 = sanitize_text_field($_POST['wolfsbane-contact-address-line-1']);
        $address_line_2 = sanitize_text_field($_POST['wolfsbane-contact-address-line-2']);
        $phoneNumber = sanitize_text_field($_POST['wolfsbane-contact-phone']);
        $emailAddress = sanitize_text_field($_POST['wolfsbane-contact-email']);
        $facebookUrl = sanitize_text_field($_POST['wolfsbane-contact-facebook']);
        $twitterUrl = sanitize_text_field($_POST['wolfsbane-contact-twitter']);
        $instagramUrl = sanitize_text_field($_POST['wolfsbane-contact-instagram']);
        $youTubeUrl = sanitize_text_field($_POST['wolfsbane-contact-youtube']);
        $tikTokUrl = sanitize_text_field($_POST['wolfsbane-contact-tiktok']);

        if (!isset($address_line_1) || !isset($address_line_2) || !isset($phoneNumber) || !isset($emailAddress)) // || !isset($instagramUrl) || !isset($youTubeUrl) || !isset($tikTokUrl)
            return;

        update_post_meta($post_id, WB_CONTACT_PAGE_INFO_METABOX_KEY, array(
            'address_line_1' => $address_line_1,
            'address_line_2' => $address_line_2,
            'phoneNumber' => $phoneNumber,
            'emailAddress' => $emailAddress,
            'facebookUrl' => $facebookUrl,
            'twitterUrl' => $twitterUrl,
            'instagramUrl' => $instagramUrl,
            'youTubeUrl' => $youTubeUrl,
            'tikTokUrl' => $tikTokUrl
        ));
    }

    public function save()
    {

        try {    
            if (!DOING_AJAX || !check_ajax_referer('submit_contact_form_nonce', 'nonce', false)) {
                return $this->return_json(false);
            }
            
            $firstName = trim($this->helper->sanitize($_POST['firstName'], 'string'));
            $lastName = trim($this->helper->sanitize($_POST['lastName'], 'string'));
            $phoneNumber = trim($this->helper->sanitize($_POST['phoneNumber'], 'string'));
            $emailAddress = trim($this->helper->sanitize($_POST['emailAddress'], 'email'));
            $message = trim($this->helper->sanitize($_POST['message'], 'string'));
            $reason = trim($this->helper->sanitize(implode(', ', $_POST['reason']), 'string'));

            $validation = $this->validator->make([
                'firstName' => $firstName,
                'lastName' => $lastName,
                'phoneNumber' => $phoneNumber,
                'emailAddress' => $emailAddress,
                'message' => $message,
                'reason' => $_POST['reason']
            ], [
                'firstName' => 'required',
                'lastName' => 'required',
                'phoneNumber' => 'required|min:11',
                'emailAddress' => 'required|email',
                'message' => 'min:10|max:500',
                'reason' => 'required|array|min:1'
            ]);

            $validation->setAliases([
                'firstName' => 'First Name',
                'lastName' => 'Last Name',
                'phoneNumber' => 'Phone Number',
                'emailAddress' => 'Email Address',
                'message' => 'Message',
                'reason' => 'Reason'
            ]);

            $validation->setMessage('required', ":attribute is required");
            $validation->setMessage('email', ":attribute must be a valid email address");
            $validation->setMessage('min', ":attribute must be a minimum of :min");
            $validation->setMessage('max', ":attribute must be a maximum of :max");
            
            $validation->validate();

            if ($validation->fails()) {
                $this->return_json(500, $validation->errors()->toArray());
                return;
            }

            
            $obj_id = get_queried_object_id();
            $current_url = get_permalink( $obj_id );

            //Send Mail
            $outcome = $this->sendMail($firstName, $lastName, $phoneNumber, $emailAddress, $message, $reason);

            return $outcome->getStatus() ? $this->return_json(200, $current_url) : $this->return_json(500, $outcome->getMessage());

            // header("Location: index.php?mailsend");
            // return $this->return_json(200, $current_url);
        } catch(Exception $e) {
            // return $this->return_json(500, $e->getMessage());
            return $this->return_json(500);
        }
    }

    private function validate($data) {

    }

    private function sendMail($firstName, $lastName, $phoneNumber, $emailAddress, $message, $reason) {
        $fullName = $lastName . ", " . $firstName;

        $email_from = 'info@wolfsbane.global';
        $email_visitor = $emailAddress;
        $email_subject = "Website Contact Form Submission";
        $email_body = "You have recieved an email from the contact form of your official Wolfsbane website: \n\n";
        $email_body = "First Name: $firstName \n";
        $email_body .= "Last Name: $lastName \n";
        $email_body .= "Phone Number: $phoneNumber \n";
        $email_body .= "Email Address: $emailAddress \n";
        $email_body .= "Reason: $reason \n";
        $email_body .= "Message: $message \n";

        $email_to = "info@wolfsbane.global";



        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);
        
        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
            $mail->isSMTP();                                            
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = "tls"; //PHPMailer::ENCRYPTION_STARTTLS;  
            $mail->Port       = 587;   
            $mail->Username   = '';
            $mail->Password   = '';
            $mail->SMTPDebug  = -1;                  
        
            //Recipients
            $mail->addReplyTo($email_visitor, $fullName);
            $mail->setFrom($email_from, 'Wolfsbane Studios');
            $mail->addAddress($email_to, 'Wolfsbane Studios');     // Add a recipient
        
            // Content
            // $mail->isHTML(true);
            $mail->Subject = $email_subject;
            $mail->Body    = $email_body;
            $mail->AltBody = $email_body; 
        
            $mail->send();

            
            return Result::from(true, "Successful");
        } catch (Exception $e) {
            // return $this->return_json(500, "No"); 
            return Result::from(false, $mail->ErrorInfo);
        } finally {
            $mail->smtpClose();
        }

        // $headers = "From: $email_from \r\n";
        // $headers .= "Reply-To: $visitor_email \r\n";
        // mail($to, $email_subject, $email_body, $headers);

            
    }
}
