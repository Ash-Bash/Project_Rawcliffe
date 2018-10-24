// Dependances
import * as React from 'react';
import {Component} from 'react';

// Custom Dependances
import RendererObject from './rendererObject';



export default class ThreeDCanvas extends Component {
    // Variables
    ref: any;

    render() {
        this.ref = React.createRef();
        return(
            <div id="threeDPreviewCanvas">
                <RendererObject ref={this.ref} />
            </div>
        );
    }
}