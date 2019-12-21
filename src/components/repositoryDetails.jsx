import React from "react";
import { getRepositoryDetails } from "../services/repoData";

export default class RepositoryDetailsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            repoDetails: null
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
            <>
                { this.state.repoDetails && <h2>{this.state.repoDetails.full_name}</h2> }
                { !this.state.repoDetails && <h2>Repository Not Available...</h2> }

            </>
        );
    }
}