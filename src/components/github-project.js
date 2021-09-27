import React from "react"
import "../styles/github-project.css"
import OpenFolderIcon from "./static/folder_open_icon.svg"
import GithubIcon from "./static/github_icon.svg"

const GithubProject = (props) => {
    var title = props.title;
    var description = props.description;
    var projectLink = props.projectLink;
    var githubLink = props.githubLink;

    var blankCard = false;
    if(title == null || title === ""){
        blankCard = true;
    }

    var showProject = true;
    if(projectLink == null || projectLink === ""){
        showProject = false;
    }

    var showGithub = true;
    if(githubLink == null || githubLink === ""){
        showGithub = false;
    }

    return (
        blankCard ?
            <div className="blank-card"></div>
        :
            <div className="project-inner">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="project-imgs">
                    {
                        showProject ?
                        <a href={projectLink}>
                            <img className="folder-project-image" src={OpenFolderIcon} alt="folder icon" />
                        </a>
                        : null
                    }
                    {
                        showGithub ?
                        <a href={githubLink}>
                            <img className="github-project-image" src={GithubIcon} alt="github icon" />
                        </a>
                        : null
                    }
                </div>
            </div>
    )
}

export default GithubProject;