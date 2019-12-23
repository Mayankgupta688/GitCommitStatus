import React from "react";
import RepositoryDetailsComponent from "../components/repositoryDetails";
import CommitListComponent from "../components/commitList"

export default class RepositoryContainerComponent extends React.Component {
    render() {
        return (
            <div className="container repository-details">
                { this.props.repoDetails && (
                    <>
                        <RepositoryDetailsComponent repoDetails={this.props.repoDetails}></RepositoryDetailsComponent>
                        <CommitListComponent commitList={this.props.commitList}></CommitListComponent>
                    </>
                )}

                { !this.props.repoDetails && <h2 className=".col-12">Repository Details Not Available...</h2> }
            </div>
        );
    }
}