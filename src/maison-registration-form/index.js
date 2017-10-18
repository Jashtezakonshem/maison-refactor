'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import template from './template.html';
import props from './props';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';



class MaisonRegistrationForm extends PolymerElement {

  static get is() { return 'maison-registration-form' }
  
  static get properties() { return props }

  static get template() { return template }

  /**
  * When the component is attached into the DOM.
  *
  * @return {null}
  */
  connectedCallback(){
    super.connectedCallback();
  }

  getInputType(a,b) {
    return a == b;
  }

}

/**
* Registering the new component tag
*/
customElements.define(MaisonRegistrationForm.is, MaisonRegistrationForm);