'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import props from './props';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import { errColor } from "../const";

class MaisonInput extends GestureEventListeners(PolymerElement) {

    static get is() { return 'maison-input' }
    
    static get properties() { return props }

    static get template() { return template }
    /**
    * When the component is attached into the DOM.
    *
    * @return {null}
    */
    connectedCallback() {
        super.connectedCallback();
    }

    _hideErrorMessages(evt) {
        this.set('params.validation.isVisible', false);
    }
    _updateValue(evt) {
        const index = this.get('index');
        this.dispatchEvent(new CustomEvent('maison-input-change', {
            detail: {
                index: index,
                value: evt.target.value
            },
            bubbles: true,
            composed: true
        }));
    }

    colorInputForErr(areErrorVisible) {
        return areErrorVisible ? errColor : null;
    }

}

/**
* Registering the new component tag
*/
customElements.define(MaisonInput.is, MaisonInput);