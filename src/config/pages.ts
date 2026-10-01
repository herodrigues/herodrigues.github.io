import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Notes on software engineering, algorithms, and whatever else I'm thinking about.",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "Papers and articles I've contributed to.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Mentoring and teaching activities.",
        isActive: true,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    resume: {
        title: "Resume",
        subtitle: "Professional experience and education.",
        isActive: true,
    },
};
