import React, { Component } from "react";
import classNames from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData";

export default class SkillsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: Object.keys(skills)[0], // Default to first category
        };
    }

    handleCategoryClick = (category) => {
        this.setState({ activeCategory: category });
    };

    renderCategoryTabs = () => {
        return Object.keys(skills).map((category) => (
            <button
                key={category}
                className={classNames("tab", {
                    activeTab: this.state.activeCategory === category,
                })}
                onClick={() => this.handleCategoryClick(category)}
            >
                {category}
            </button>
        ));
    };

    renderSkills = () => {
        const { activeCategory } = this.state;
        const skillList = skills[activeCategory];

        return (
            <div className="skills-content fade-in">
                {skillList.map((skill, index) => (
                    <div key={index} className="skill-entry">
                        <h3>{skill.name}</h3>
                        <div className="level-container">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    render() {
        return (
            <div className="skills-tabbed-section">
                <div className="tabs-container">{this.renderCategoryTabs()}</div>
                {this.renderSkills()}
            </div>
        );
    }
}
