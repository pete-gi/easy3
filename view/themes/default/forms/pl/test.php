<?php

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
        [
            'type' => 'separator'
        ],
        [
            'type' => 'textarea',
            'label' => 'Treść wiadomości',
            'name' => 'message',
            'rows' => 5,
            'required' => true,
            'placeholder' => false
        ],
        [
            'type' => 'radio',
            'label' => 'Wybierz jedno',
            'name' => 'wybierz_jedno',
            'multiselect' => false,
            'options' => [
                'Opcja 1',
                'Opcja 2',
                'Opcja 3'
            ]
        ]
    ],
    'options' => [
        'from' => false,
        'to' => false,
        'formLayout' => 'simple_bootstrap3.html',
        'mailLayout' => 'simple.html',
        'topic' => false
    ],
    'recaptcha' => [
        'siteKey' => false,
        'secretKey' => false
    ]
];