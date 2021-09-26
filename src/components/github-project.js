import React from "react"
import "../styles/github-project.css"

const GithubProject = (props) => {
    /* improvement to use navitems instead of hard coded header */
    return (
        <div className="project-inner">
            <h3>This is a project</h3>
            <p>This is a project description</p>
            <img src="static/github_icon.svg" alt="github icon" />
        </div>
    )
}

export default GithubProject;