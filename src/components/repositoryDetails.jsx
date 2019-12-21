import React from "react"

var capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function RepositoryDetailsComponent(props) {
    return (
        <div class="row">
            { props.repoDetails && (
                <>
                <div className="repository-details-container col-4">
                    <img src={props.repoDetails.organization.avatar_url} alt=""/>
                    <div>
                        <strong className="repo-name col-12">{capitalize(props.repoDetails.owner.login) + " / " + capitalize(props.repoDetails.name)}</strong> 
                    </div>
                </div>

                <div className="col-8 repository-other-details">
                    
                </div>
                </>
            )}
        </div>
    )
}