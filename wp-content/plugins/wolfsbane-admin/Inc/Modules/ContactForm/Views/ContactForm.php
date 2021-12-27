                <div class="c-contact-content-layout__form">
                    <div id="c-contact-form" class="c-contact-form">
                        <h6 class="c-contact-form__subtitle">
                            As soon as the Wolfsbane tetam recieves your booking request and query, we will resonpond
                            within 24 hours.
                        </h6>
                        <div class="o-page-layout__content-section o-page-layout__content-section--push-down">
                            <div class="c-content-divider"></div>
                        </div>
                        <form class="c-contact-form__instance" id="contact_form" name="contact_form" action="#" method="post" data-parsley-validate="" data-url="<?php echo admin_url('admin-ajax.php'); ?>">
                            <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--textfield c-contact-form__control--1-of-2">
                                    <label for="" class="c-contact-form__label">First Name</label>
                                    <input class="c-contact-form__input" placeholder="Ebuka" type="text"
                                        id="firstName" name="firstName" required="">
                                    <span class="c-contact-form__feedback">Your first name is important</span>
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--textfield c-contact-form__control--2-of-2">
                                    <label for="" class="c-contact-form__label">Last Name</label>
                                    <input class="c-contact-form__input" placeholder="Azuka" type="text"
                                        id="lastName" name="lastName" required="">
                                    <span class="c-contact-form__feedback">Your last name is important</span>
                                </div>
                            </div>
                            <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--textfield c-contact-form__control--1-of-2">
                                    <label for="" class="c-contact-form__label">Phone Number</label>
                                    <input class="c-contact-form__input" placeholder="08039832007" type="tel"
                                        id="phoneNumber" name="phoneNumber" required="" data-parsley-minlength="11">
                                    <span class="c-contact-form__feedback">We can reach you quickly with your phone number</span>
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--textfield c-contact-form__control--2-of-2">
                                    <label for="" class="c-contact-form__label">Email Address</label>
                                    <input class="c-contact-form__input" placeholder="example@gmail.com"
                                        type="email" id="emailAddress" name="emailAddress" data-parsley-trigger="change" required="true">
                                    <span class="c-contact-form__feedback">Your email address is important</span>
                                </div>
                            </div>
                            <div class="c-contact-form__group">
                                <span class="c-contact-form__group-label">Reason</span>
                                <span class="c-contact-form__feedback">How can we help you? (one reason minimum)</span>
                                <div class="c-contact-form__group-error-container"></div>
                                <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonBooking" name="reason[]" value="Booking / Appointment" data-parsley-mincheck="1"  required="true">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Booking / Appointment
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonMixing" name="reason[]" value="Mixing / Mastering">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Mixing / Mastering
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                </div>
                                <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonRecording" name="reason[]" value="Recording">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Recording
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonAudioPost" name="reason[]" value="Audio Post / Sound Design">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Audio Post / Sound Design
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                </div>
                                <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonEvents" name="reason[]" value="Events / Concerts">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Events / Concerts
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonVoiceRecording" name="reason[]" value="Voice Recording">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Voice Recording
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                </div>
                                <div class="c-contact-form__row">
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonPromotion" name="reason[]" value="Promotion">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Promotion
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span >-->
                                </div>
                                <div class="c-contact-form__control c-contact-form__control--checkbox c-contact-form__control--1-of-2">
                                    <label class="c-contact-form__label">
                                        <input type="checkbox" class="c-contact-form__input c-contact-form__input--in-group" id="reasonOther" name="reason[]" value="Other">
                                        <span class="c-contact-form__control-indicator"></span>
                                        Other
                                    </label>
                                    <!-- <span class="c-contact-form__feedback"></span> -->
                                </div>
                                </div>
                            </div>

                            <div class="c-contact-form__control c-contact-form__control--textarea">
                                <label for="" class="c-contact-form__label">Message</label>
                                <textarea class="c-contact-form__input" id="message" name="message" 
                                placeholder="I want to book a studio session for 4 hours. (Note: Include any additional information we can use to help you.)"
                                 data-parsley-trigger="keyup" data-parsley-minlength="10" data-parsley-maxlength="500" 
                                 data-parsley-minlength-message="You need to enter at least a 10 character message.." data-parsley-validation-threshold="10"></textarea>
                                <span class="c-contact-form__feedback">Can you give us more detials?</span>
                            </div>

                            <input type="hidden" name="action" value="submit_contact_form">
                            <input type="hidden" name="nonce" value="<?php echo wp_create_nonce("submit_contact_form_nonce"); ?>">
                            <button class="c-contact-form__button c-contact-form__button--submit" type="submit" id="submit" name="submit">Submit It</button>
                        </form>

                        <div class="c-contact-form__outcome">
                            <h3 class="c-contact-form__outcome-heading">Thanks for the opportunity.</h3>
                            <p>A member for the Wolfsbane team will contact you soon.</p>
                            <a class="c-contact-form__button" href="<?php echo site_url(); ?>">Return to site</a>
                        </div>
                    </div>
                </div>