import React from "react";
import RepositoryDetailsComponent from "../components/repositoryDetails";
import CommitListComponent from "../components/commitList"

export default class RepositoryContainerComponent extends React.Component {

    renderData() {
        var renderArray = [];
        for(let key in this.props.commitList) {
            renderArray.push(<h1>{this.props.commitList[key].commit.author}</h1>)
        }

        return renderArray;
    }

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