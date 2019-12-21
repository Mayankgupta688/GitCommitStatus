import React from "react";
import RepositoryDetailsComponent from "../components/repositoryDetails"
import HeaderComponent from "../components/header"
import { getRepositoryDetails } from "../services/repoData";

export default class ApplicationContainerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            commitData : null
        }
    }

    componentDidMount() {
        getRepositoryDetails().then((repoDetails) => {
            this.setState({
                repoDetails: repoDetails
            })
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent repoDetails={this.state.repoDetails}></HeaderComponent>
                <RepositoryDetailsComponent repoDetails={this.state.repoDetails}></RepositoryDetailsComponent>
            </div>
        );
    }
}