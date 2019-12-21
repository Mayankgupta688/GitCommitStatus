import React from "react";

export default function CommitListComponent(props) {
    return (
        <>
            { props.commitList.map((commitData, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col-12 commit-details">
                            <div className="detail-template">
                                <img src={commitData.avatar_url} className="committer-url" alt="" />
                                <div style={{"display": "inline-block", "marginLeft": "30px"}}>
                                    <p style={{"display": "block"}}><b>Committed By: </b>{commitData.author}</p>
                                    <p style={{"display": "block"}}><b>User Email: </b>{commitData.email}</p>
                                </div>
                            </div><br></br>
                            <div className="commit-data"><b>Commit Message: </b>{commitData.message}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}