import React from "react";
import RepositoryDetailsComponent from "../components/repositoryDetails"

export default class ApplicationContainerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            commitData : null
        }
    }
    render() {
        return (
            <div>
                <RepositoryDetailsComponent></RepositoryDetailsComponent>
            </div>
        );
    }
}