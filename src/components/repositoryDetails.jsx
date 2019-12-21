import React from "react"

var capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function RepositoryDetailsComponent(props) {
    return (
        <div className="row">
            { props.repoDetails && (
                <>
                    <div className="repository-details-container col-5">
                        <img src={props.repoDetails.organization.avatar_url} alt=""/>
                        <div>
                            <strong className="repo-name col-12">{capitalize(props.repoDetails.owner.login) + " / " + capitalize(props.repoDetails.name)}</strong> 
                        </div>
                    </div>

                    <div className="col-7 repository-other-details">
                        <p><b>Supported Language: </b>{props.repoDetails.language}</p>
                        <p><b>Total Open Issues: </b>{props.repoDetails.open_issues_count}</p>
                        <p><b>Default Branch: </b>{capitalize(props.repoDetails.default_branch)}</p>
                        <p><b>Subscriber Count: </b>{props.repoDetails.subscribers_count}</p>
                        <p><b>Application Size: </b>{props.repoDetails.size}</p>
                        <p><b>Application Url: </b>{props.repoDetails.homepage}</p>                    
                    </div>
                </>
            )}
        </div>
    )
}