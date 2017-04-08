import { customElement, autoinject, bindable, noView } from 'aurelia-framework';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Fabric from 'office-ui-fabric-react';

@noView()
@autoinject()
//@bindable('data')
@customElement('au-ms-button')
export class ReactElement {

    reactComponent = {};
    element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    render() {
        this.reactComponent = ReactDOM.render(
            React.createElement(Fabric.Button, {}, null),
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