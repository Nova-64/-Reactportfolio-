import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/Aboutme.png";
import deadEye from "../assets/Skills.png";
import stack from "../assets/Projects.png";
import envelope from "../assets/Email.png";
import Nova from "../assets/Nova.png";
import blogIcon from "../assets/blog.png"; 
import "../styles/nav.css";

export default function Nav() {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/nova":
                return "nav-nova";
            case "/contact":
                return "nav-contact";
            case "/blog":
                return "nav-blog";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "ABOUT";
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/nova":
                return "NOVA";
            case "/contact":
                return "CONTACT";
            case "/blog":
                return "BLOG";
            default:
                return "";
        }
    };

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className={linkClass}>
                <img
                    src={imgSrc}
                    alt={altText}
                    title={altText}
                    style={altText === "Blog icon" ? { width: "32px", height: "32px" } : { width: "48px", height: "48px" }}
                />

                {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
            </Link>
        );
    };

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
            {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
            {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
            {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
            {renderNavLink("/nova", Nova, "Nova icon", "nav-nova")}
            {renderNavLink("/blog", blogIcon, "Blog icon", "nav-blog")}
        </nav>
    );
}

