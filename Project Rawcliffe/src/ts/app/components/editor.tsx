// Dependances
import * as React from 'react';
import {Component} from 'react';

// Custom Dependances
import EditorToolbar from './toolbars/editorToolbar';
import ThreeDCanvas from './threeDCanvas';
import Inspector from './inspector';

export default class Editor extends Component {
    render() {
      return (
        <div id="editor">
            <EditorToolbar />
            <div className="splitview main masterWithInspector">
                <ThreeDCanvas/>
                <Inspector />
            </div>
        </div>
      );
    }
}