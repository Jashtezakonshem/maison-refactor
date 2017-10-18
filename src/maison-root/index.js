'use strict';

import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import template from './template.html';
import props from './props';



class MaisonRoot extends PolymerElement {

  static get is() { return 'maison-root' }
  
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

}

/**
* Registering the new component tag
*/
customElements.define(MaisonRoot.is, MaisonRoot);