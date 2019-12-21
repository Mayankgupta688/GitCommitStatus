import React from "react"

var capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function RepositoryDetailsComponent(props) {
    return (
        <>
            { props.repoDetails && (
                <strong className="repo-name col-12">{capitalize(props.repoDetails.owner.login) + " / " + capitalize(props.repoDetails.name)}</strong> 
            )}
        </>
    )
}