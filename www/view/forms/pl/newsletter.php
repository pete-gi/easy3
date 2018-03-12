<?php

$f3 = \Base::instance();
$config = new Config($f3->get('config'));

return [
    'form' => [
        [
            'type' => 'email',
            'label' => 'Adres e-mail',
            'name' => 'email',
            'required' => true,
            'placeholder' => false
        ],
        [
            'type' => 'tel',
            'label' => 'Nr telefonu',
            'name' => 'tel',
            'required' => false,
            'placeholder' => false
        ],
        // [
        //     'type' => 'separator'
        // ],
        [
            'type' => 'textarea',
            'label' => 'Treść wiadomości',
            'name' => 'message',
            'rows' => 5,
            'required' => true,
            'placeholder' => false
        ]
    ],
    'options' => [
        'from' => 'formularz@inet-media.pl',
        'to' => '',
        'topic' => 'Nowy mail w newsletterze ' . $config->siteName,
        'template' => 'mail-newsletter'
    ],
    'recaptcha' => [
        'siteKey' => false,
        'secretKey' => false
    ]
];