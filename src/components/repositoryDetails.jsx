import React from "react";

export default class RepositoryDetailsComponent extends React.Component {

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
                { 
                    this.props.repoDetails && (
                        <strong className="repo-name col-12">{this.capitalize(this.props.repoDetails.owner.login) + " / " + this.capitalize(this.props.repoDetails.name)}</strong> 
                    )
                }

                

                {this.props.commitList.map((commitData, index) => {
                    return (
                        <div key={index} className="col-12 commit-details">
                            <div className="detail-template">
                                <img src={commitData.avatar_url} className="committer-url" alt={commitData.author} />
                                <div style={{"display": "inline-block", "marginLeft": "30px"}}>
                                    <b style={{"display": "block"}}>Committed By: {commitData.author}</b>
                                    <b style={{"display": "block"}}>Committed By: {commitData.author}</b>
                                </div>
                            </div><br></br>
                            <div><b>Commit Message: </b>{commitData.message}</div>
                        </div>
                    )
                })}


                { !this.props.repoDetails && <h2 className=".col-12">Repository Not Available...</h2> }
            </div>
        );
    }
}