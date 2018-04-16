<?php

$f3 = \Base::instance();
$config = new Config($f3->get('config'));

return [
    'form' => [
        [
            'type' => 'text',
            'label' => 'Imię i nazwisko',
            'name' => 'name',
            'required' => true,
            'placeholder' => false
        ],
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
        ],
        [
            'type' => 'checkbox',
            'name' => 'zgoda-dane-osobowe',
            'options' => [
                \Template::instance()->resolve($f3->get('t.rodo.info'))
            ],
            'rodo' => \Template::instance()->resolve($f3->get('t.rodo.tooltip'))
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