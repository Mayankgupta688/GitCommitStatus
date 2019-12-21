import React from "react";
import RepositoryDetailsComponent from "../components/repositoryDetails";

export default class RepositoryContainerComponent extends React.Component {

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

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

                <RepositoryDetailsComponent repoDetails={this.props.repoDetails}></RepositoryDetailsComponent>
      

                

                {this.props.commitList.map((commitData, index) => {
                    return (
                        <div key={index} className="col-12 commit-details">
                            <div className="detail-template">
                                <img src={commitData.avatar_url} className="committer-url" alt={commitData.author} />
                                <div style={{"display": "inline-block", "marginLeft": "30px"}}>
                                    <p style={{"display": "block"}}><b>Committed By: </b>{commitData.author}</p>
                                    <p style={{"display": "block"}}><b>User Email: </b>{commitData.email}</p>
                                </div>
                            </div><br></br>
                            <div className="commit-data"><b>Commit Message: </b>{commitData.message}</div>
                        </div>
                    )
                })}


                { !this.props.repoDetails && <h2 className=".col-12">Repository Not Available...</h2> }
            </div>
        );
    }
}