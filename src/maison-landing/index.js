'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import props from './props';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import InputValidator from "../_utility/inputValidator";



class MaisonLanding extends PolymerElement {

    static get is() { return 'maison-landing' }

    static get properties() { return props }

    static get template() { return template }

    loginRequest(loginModalInputs) {
        let canUserLogin = true;
        let updatedLoginModalInputs = this.loginModalInputs.concat();
        loginModalInputs.forEach((loginModalInput, index) => {
            let validationsResult = [];
            loginModalInput.validators.forEach((validatorFunction) => {
                validationsResult.push(validatorFunction(loginModalInput.value));
            });
            const validationReduced = InputValidator.inputValidatorReducer(validationsResult);
            const newItem = Object.assign({}, updatedLoginModalInputs[index], {
                validation: validationReduced
            });
            canUserLogin = canUserLogin && loginModalInput.validation.isValid;
            updatedLoginModalInputs = [...updatedLoginModalInputs.slice(0,index), newItem, ...updatedLoginModalInputs.slice(index+1)];
        });
        this.set('loginModalInputs', updatedLoginModalInputs);
        if (canUserLogin) {
            const email = this.get('email');
            const password = this.get('password');
            this._loginRequest(email,password);
        }
    }

    /**
    * When the component is attached into the DOM.
    *
    * @return {null}
    */
    connectedCallback() {
        this._registerEvents();
        super.connectedCallback();
    }

    _registerEvents() {
        this.addEventListener('modal-primary', () => {
            const loginModalInputs = this.get('loginModalInputs');
            this.loginRequest(loginModalInputs);
        });
        this.addEventListener('maison-input-change', (customEvent) => {
            this._updateItem(customEvent.detail);
        });

    }
    _updateItem(inputChanged) {
        const index = inputChanged.index;
        const value = inputChanged.value;
        const newItem = Object.assign({}, this.loginModalInputs[index], {
            value
        });
        const loginModalInputs = this.get('loginModalInputs');
        this.set('loginModalInputs', [...loginModalInputs.slice(0,index), newItem, ...loginModalInputs.slice(index+1)]);
    }

    _getFieldValue(inputs,fieldName) {
        let fieldValue = "";
        inputs.forEach((el) => {
            if (el.name === fieldName) {
                fieldValue = el.value;
            }
        });
        return fieldValue;
    }

    _loginRequest(email,password) {
        // chiamata
        const loginRequestParams = {
            method: 'POST',
            body: {
                username: email,
                password: password
            }
        };
        fetch('http://localhost:8081/api/login', loginRequestParams)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
    }

}

/**
* Registering the new component tag
*/
customElements.define(MaisonLanding.is, MaisonLanding);