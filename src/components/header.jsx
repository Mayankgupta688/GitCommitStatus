import React from "react";
import "../appStyle/header.css";

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header-component">
                <img className="github-logo" src="./images/sampleGithubApp.png" alt="Github Commit Status" />
                <b className="github-project-name">GitHub Commits for "{this.props.repoDetails ? this.props.repoDetails.full_name: ""}"</b>
            </div>
        )
    }
}