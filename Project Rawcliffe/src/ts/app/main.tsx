import * as React from "react";

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (
        <div>
            <h1>Hello World!</h1>
            <div>Node version: {process.versions.node}</div>,
            Chromium
            UNKNOWN,
            and Electron
            UNKNOWN.
        </div>
        );
    }
}