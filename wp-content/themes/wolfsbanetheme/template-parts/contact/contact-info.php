<div class="c-contact-info">
    <h5 class="c-contact-info__title">Wolfsbane Studios</h5>
    <p class="c-contact-info__address">
        <span><?php echo getContactAddressLine1(); ?></span>
        <span><?php echo getContactAddressLine2(); ?></span>
    </p>
    <a class="c-contact-info__email"
       href="mailto:<?php echo getContactEmailAddress(); ?>"><?php echo getContactEmailAddress(); ?></a>
    <a class="c-contact-info__tel"
       href="tel:<?php echo str_replace(' ', '', getContactPhoneNumber()); ?>"><?php echo getContactPhoneNumber(); ?></a>
    <div class="c-contact-info__social">
        <ul class="c-social-links c-social-links--alt">
            <li class="c-social-links__item">
                <a class="c-social-links__link" href="<?php echo getContactFacebookUrl(); ?>" target="__blank">
                    <svg class="c-social-links__instance c-social-links__instance--facebook" viewBox="0 0 455.73 455.73"
                         fill="rgba(98, 107, 120, 0.8)">
                        <path d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475h62.025v64.622h-44.382
	c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z" />
                    </svg>
                    <span class="c-social-links__fallback c-social-links__fallback--facebook"></span>
                </a>
            </li>
            <li class="c-social-links__item">
                <a class="c-social-links__link" href="<?php echo getContactTwitterUrl(); ?>" target="__blank">
                    <svg class="c-social-links__instance c-social-links__instance--twitter" viewBox="0 0 455 455"
                         fill="rgba(98, 107, 120, 0.8)">
                        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M352.751,163.259c0.123,2.773,0.186,5.561,0.186,8.36
	c0,85.403-65.002,183.876-183.873,183.876c-36.496,0-70.466-10.697-99.065-29.037c5.056,0.601,10.199,0.907,15.417,0.907
	c30.278,0,58.143-10.331,80.262-27.668c-28.28-0.519-52.148-19.204-60.373-44.88c3.948,0.757,7.997,1.163,12.161,1.163
	c5.894,0,11.604-0.794,17.027-2.268c-29.563-5.939-51.841-32.057-51.841-63.368c0-0.273,0-0.544,0.006-0.814
	c8.712,4.84,18.676,7.748,29.271,8.084c-17.342-11.589-28.748-31.371-28.748-53.79c0-11.845,3.187-22.945,8.751-32.492
	c31.873,39.101,79.493,64.828,133.203,67.526c-1.103-4.732-1.677-9.665-1.677-14.729c0-35.688,28.938-64.623,64.626-64.623
	c18.589,0,35.385,7.847,47.173,20.406c14.719-2.895,28.551-8.276,41.038-15.681c-4.824,15.092-15.071,27.754-28.415,35.754
	c13.074-1.563,25.528-5.038,37.118-10.178C376.336,142.766,365.38,154.149,352.751,163.259z" />
                    </svg>
                    <span class="c-social-links__fallback c-social-links__fallback--twitter"></span>
                </a>
            </li>
            <li class="c-social-links__item">
                <a class="c-social-links__link" href="<?php echo getContactInstagramUrl(); ?>" target="__blank">
                    <svg class="c-social-links__instance c-social-links__instance--instagram" viewBox="0 0 364 364"
                         fill="rgba(98, 107, 120, 0.8)">
                        <path
                              d="M244.424,83.438H119.577c-19.925,0-36.139,16.213-36.139,36.139v124.846   c0,19.929,16.214,36.143,36.139,36.143h124.847c19.928,0,36.142-16.214,36.142-36.143V119.577   C280.566,99.652,264.352,83.438,244.424,83.438z M181.998,246.894c-35.779,0-64.892-29.113-64.892-64.896   c0-35.779,29.113-64.892,64.892-64.892c35.783,0,64.896,29.113,64.896,64.892C246.894,217.781,217.781,246.894,181.998,246.894z    M248.982,130.525c-8.471,0-15.359-6.888-15.359-15.354c0-8.467,6.888-15.355,15.359-15.355c8.466,0,15.354,6.888,15.354,15.355   C264.336,123.638,257.448,130.525,248.982,130.525z" />
                        <path
                              d="M181.998,144.531c-20.655,0-37.475,16.812-37.475,37.467   c0,20.663,16.82,37.479,37.475,37.479c20.663,0,37.471-16.816,37.471-37.479C219.469,161.343,202.661,144.531,181.998,144.531z" />
                        <path
                              d="M0,0v364h364V0H0z M307.984,244.423c0,35.053-28.508,63.561-63.56,63.561   H119.577c-35.049,0-63.561-28.508-63.561-63.561V119.577c0-35.049,28.512-63.561,63.561-63.561h124.847   c35.052,0,63.56,28.512,63.56,63.561V244.423z" />
                    </svg>
                    <span class="c-social-links__fallback c-social-links__fallback--instagram"></span>
                </a>
            </li>
            <li class="c-social-links__item">
                <a class="c-social-links__link" href="<?php echo getContactYouTubeUrl(); ?>" target="__blank">
                    <svg class="c-social-links__instance c-social-links__instance--youtube" viewBox="0 0 32 32"
                         fill="rgba(98, 107, 120, 0.8)">
                        <path
                              d="M13.767,19.354h1.398v6.377l-1.123-0.002l0.003-0.823c-0.301,0.646-1.507,1.168-2.136,0.714   c-0.337-0.241-0.326-0.666-0.36-1.029c-0.018-0.206-0.003-0.658-0.004-1.27l-0.004-3.967h1.39l0.007,4.03   c0,0.55-0.03,0.87,0.004,0.976c0.198,0.607,0.71,0.279,0.823-0.031c0.038-0.104,0.002-0.393,0.002-0.971V19.354z M19.635,20.604   l0.004,3.334c0,1.615-0.922,2.535-2.391,1.188l-0.104,0.533l-1.149,0.017l0.007-8.55l1.396-0.002l-0.006,2.478   C18.684,18.576,19.634,19.336,19.635,20.604z M18.6,20.438c0-0.274-0.274-0.502-0.611-0.502c-0.336,0-0.61,0.228-0.61,0.502v3.74   c0,0.276,0.274,0.502,0.61,0.502c0.337,0,0.611-0.226,0.611-0.502V20.438z M15.753,12.281c0.341,0,0.619-0.306,0.619-0.681V8.071   c0-0.375-0.278-0.682-0.619-0.682c-0.34,0-0.619,0.307-0.619,0.682V11.6C15.134,11.976,15.413,12.281,15.753,12.281z    M11.815,18.236v-1.109L7.344,17.12v1.093l1.396,0.003v7.521h1.399l-0.002-7.498h1.678V18.236z M32,0v32H0V0H32L32,0z    M18.475,11.019c0,0.567,0.01,0.948,0.027,1.141c0.02,0.191,0.062,0.375,0.135,0.554c0.071,0.175,0.184,0.315,0.336,0.425   c0.15,0.105,0.342,0.158,0.572,0.158c0.201,0,0.38-0.056,0.536-0.168c0.155-0.111,0.286-0.277,0.394-0.501l-0.026,0.549h1.559   V6.549h-1.228v5.158c0,0.279-0.229,0.508-0.512,0.508c-0.279,0-0.512-0.229-0.512-0.508V6.549h-1.279v4.471L18.475,11.019   L18.475,11.019z M14.072,7.478c-0.105,0.357-0.159,0.854-0.159,1.49v1.754c0,0.582,0.029,1.019,0.087,1.309   c0.059,0.289,0.156,0.539,0.293,0.742c0.136,0.205,0.327,0.358,0.574,0.459c0.247,0.104,0.546,0.151,0.901,0.151   c0.318,0,0.6-0.059,0.845-0.178c0.242-0.117,0.445-0.304,0.601-0.551c0.158-0.25,0.261-0.519,0.308-0.806   c0.047-0.287,0.071-0.74,0.071-1.354V8.819c0-0.486-0.024-0.848-0.079-1.086c-0.051-0.235-0.146-0.467-0.289-0.69   C17.086,6.819,16.887,6.64,16.627,6.5c-0.258-0.14-0.566-0.21-0.927-0.21c-0.429,0-0.781,0.109-1.057,0.326   C14.369,6.832,14.178,7.119,14.072,7.478z M8.97,3.935l1.849,4.366l0.001,5.081h1.471l0.001-5.083l1.738-4.354h-1.608l-0.924,3.234   l-0.937-3.244H8.97z M26.055,17.845c0-1.706-1.479-3.104-3.291-3.104H9.236c-1.81,0-3.29,1.396-3.29,3.104v7.116   c0,1.707,1.479,3.104,3.29,3.104h13.528c1.812,0,3.291-1.396,3.291-3.104V17.845z M24.014,23.496   c0.479,2.841-3.531,3.309-3.531,0.005v-1.985c0-0.597,0.059-1.064,0.179-1.408c0.118-0.344,0.319-0.601,0.587-0.789   c0.848-0.612,2.521-0.424,2.693,0.771c0.056,0.377,0.072,1.037,0.072,1.697v0.901h-2.4v0.832v0.645v0.062   c0,0.313,0.259,0.568,0.572,0.568h0.205c0.314,0,0.573-0.256,0.573-0.568v-0.584c0-0.054,0.002-0.101,0.003-0.143L24.014,23.496z    M21.63,21.586h1.325l0.016-0.771c0-0.342-0.281-0.621-0.627-0.621h-0.082c-0.345,0-0.625,0.279-0.625,0.621L21.63,21.586z" />
                    </svg>
                    <span class="c-social-links__fallback c-social-links__fallback--youtube"></span>
                </a>
            </li>
            <li class="c-social-links__item">
                <a class="c-social-links__link" href="<?php echo getContactTikTokUrl(); ?>" target="__blank">
                    <svg class="c-social-links__instance c-social-links__instance--tiktok" viewBox="0 0 512 512"
                         fill="rgba(98, 107, 120, 0.8)">
                        <path
                              d="m475.074 0h-438.148c-20.395 0-36.926 16.531-36.926 36.926v438.148c0 20.395 16.531 36.926 36.926 36.926h438.148c20.395 0 36.926-16.531 36.926-36.926v-438.148c0-20.395-16.531-36.926-36.926-36.926zm-90.827 195.959v34.613c-16.322.006-32.181-3.192-47.137-9.503-9.617-4.06-18.577-9.292-26.772-15.613l.246 106.542c-.103 23.991-9.594 46.532-26.772 63.51-13.98 13.82-31.695 22.609-50.895 25.453-4.512.668-9.103 1.011-13.746 1.011-20.553 0-40.067-6.659-56.029-18.943-3.004-2.313-5.876-4.82-8.612-7.521-18.617-18.4-28.217-43.34-26.601-69.575 1.234-19.971 9.229-39.017 22.558-53.945 17.635-19.754 42.306-30.719 68.684-30.719 4.643 0 9.234.348 13.746 1.017v12.798 35.601c-4.277-1.411-8.846-2.187-13.603-2.187-24.1 0-43.597 19.662-43.237 43.779.228 15.431 8.658 28.92 21.09 36.355 5.842 3.495 12.564 5.659 19.737 6.053 5.62.308 11.016-.474 16.013-2.124 17.218-5.688 29.639-21.861 29.639-40.935l.057-71.346v-130.252h47.668c.046 4.723.525 9.332 1.416 13.797 3.598 18.075 13.786 33.757 27.966 44.448 12.364 9.326 27.76 14.854 44.448 14.854.011 0 .148 0 .137-.011v12.843z" />
                    </svg>
                    <span class="c-social-links__fallback c-social-links__fallback--tiktok"></span>
                </a>
            </li>
        </ul>
    </div>
</div>
