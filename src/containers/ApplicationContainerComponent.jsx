import React from "react";

export default class ApplicationContainerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            commitData : null
        }
    }
    render() {
        return <div>Application Container for Commit Data</div>;
    }
}