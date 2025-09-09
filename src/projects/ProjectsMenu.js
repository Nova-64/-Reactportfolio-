import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

const categories = ["During School", "Freelance", "Headstarter"];

export default class ProjectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "During School",
        };
    }

    handleCategoryClick = (category) => {
        this.setState({ activeCategory: category });
    };

    renderContent = (categoryProjects) => {
        return categoryProjects.map((project, index) => (
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} />
                <div>{project.description}</div>

                <div className="link-container">
                    {project.phone ? (
                        <span className="phone-number">{project.phone}</span>
                    ) : project.google ? (
                        <a
                            href={project.google}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Slide
                        </a>
                    ) : null}
                </div>
            </div>
        ));
    };

    render() {
        const { activeCategory } = this.state;
        const categoryProjects = Object.values(projects).filter(
            (proj) => proj.category === activeCategory
        );

        return (
            <div className="project-menu-wrapper">
                <div className="project-menu">
                    <div className="project-items-container">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={classNames("project-item", {
                                    activeProject: activeCategory === cat,
                                })}
                                onClick={() => this.handleCategoryClick(cat)}
                            >
                                <h2 className="title">{cat}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="project-sub-container">
                        {this.renderContent(categoryProjects)}
                    </div>
                </div>
            </div>
        );
    }
}
