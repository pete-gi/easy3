<?php

$f3 = \Base::instance();
$config = new Config($f3->get('config'));

return [
    'form' => [
        [
            'type' => 'text',
            'label' => 'Name',
            'name' => 'name',
            'required' => true,
            'placeholder' => false
        ],
        [
            'type' => 'email',
            'label' => 'E-mail address',
            'name' => 'email',
            'required' => true,
            'placeholder' => false
        ],
        [
            'type' => 'tel',
            'label' => 'Phone number',
            'name' => 'tel',
            'required' => false,
            'placeholder' => false
        ],
        // [
        //     'type' => 'separator'
        // ],
        [
            'type' => 'textarea',
            'label' => 'Message',
            'name' => 'message',
            'rows' => 5,
            'required' => true,
            'placeholder' => false
        ]
    ],
    'options' => [
        'from' => 'formularz@inet-media.pl',
        'to' => '',
        'topic' => 'Wiadomość z formularza kontaktowego ' . $config->siteName,
        'template' => 'mail-email'
    ],
    'recaptcha' => [
        'siteKey' => '',
        'secretKey' => ''
    ]
];