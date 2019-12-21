import React from "react";
import RepositoryContainerComponent from "./repositoryContainer"
import HeaderComponent from "../components/header"
import { getRepositoryDetails } from "../services/repoData";
import { getRepositoryCommitDetails } from "../services/repoData";
import "../appStyle/repositoryContainer.css";

export default class ApplicationContainerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            commitData : null,
            commitList: []
        }
    }

    componentDidMount() {
        var that = this;
        getRepositoryDetails().then((repoDetails) => {
            that.setState({
                repoDetails: repoDetails
            })
        });

        getRepositoryCommitDetails().then((commitList) => {
            let renderArray = [];

            commitList.forEach(commitData => {
                renderArray.push({
                    author: commitData.commit.author.name,
                    avatar_url: commitData.author.avatar_url,
                    message: commitData.commit.message, 
                    email: commitData.commit.author.email
                })
            });
            that.setState({
                commitList: renderArray
            })
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent commitList={this.state.commitList} repoDetails={this.state.repoDetails}></HeaderComponent>
                <RepositoryContainerComponent commitList={this.state.commitList} repoDetails={this.state.repoDetails}></RepositoryContainerComponent>
            </div>
        );
    }
}