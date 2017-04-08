import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { customElement, autoinject, bindable, noView } from 'aurelia-framework';
import { Button } from 'office-ui-fabric-react';


//{
//    "name": "office-ui-fabric-react",
//        "path": "../node_modules/office-ui-fabric-react/lib-amd",
//            "main": "index"
//}


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
            React.createElement(Button, {}, null),
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