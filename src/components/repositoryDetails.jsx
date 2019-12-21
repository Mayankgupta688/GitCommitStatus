import React from "react";

export default class RepositoryDetailsComponent extends React.Component {
    render() {
        return (
            <>
                { this.props.repoDetails && <h2>{this.props.repoDetails.full_name}</h2> }
                { !this.props.repoDetails && <h2>Repository Not Available...</h2> }

            </>
        );
    }
}