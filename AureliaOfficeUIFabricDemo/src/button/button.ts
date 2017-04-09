import { customElement, autoinject, bindable, noView, bindingMode } from 'aurelia-framework';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@noView()
@autoinject()
@customElement('au-ms-button')
export class ReactElement {

    @bindable({ defaultBindingMode: bindingMode.oneWay }) data = {
        text: 'Hello World!'
    };
    reactComponent = {};
    element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    render() {
        this.reactComponent = ReactDOM.render(
            React.createElement(Fabric.Button, this.data, null),
            this.element
        );
    }

    bind() {
        this.render();
    }

    /**
     * Data Changed
     * 
     * An automatic callback function when our "data"
     * bindable value changes. We need to rebind the React
     * element to get the new data from the ViewModel.
     * 
     * @param {any} newVal The updated data
     * @returns {void}
     * 
     */
    dataChanged(newVal) {
        this.bind();
    }
}