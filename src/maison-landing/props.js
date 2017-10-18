'use strict';
import InputValidator from '../_utility/inputValidator';
export default {
    _getFieldValue: {
        type: Function
    },
    email: {
        type: String,
        computed: '_getFieldValue(loginModalInputs, "email")'
    },
    password: {
        type: String,
        computed: '_getFieldValue(loginModalInputs, "password")'
    },
    loginModalInputs : {
        type: Array,
        value: [
            {
                name: 'email',
                type: 'textbox',
                value: null,
                placeholder: 'email',
                label: null,
                validators: [InputValidator.mustBeValidEmail, InputValidator.mustNotBeEmpty],
                validation: {}
            },
            {
                name: 'password',
                type: 'textbox',
                value: null,
                placeholder: 'password',
                label: null,
                validators: [InputValidator.mustNotBeEmpty],
                validation: {}
            }
        ]
    }
}