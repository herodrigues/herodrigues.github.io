import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/personal", label: "About", isActive: true },
    { href: "/posts", label: "Blog", isActive: false },
    { href: "/publications", label: "Publications", isActive: true },
    { href: "/talks", label: "Talks", isActive: false },
    { href: "/teaching", label: "Teaching", isActive: true },
    { href: "/projects", label: "Code", isActive: false },
    { href: "/resume", label: "Resume", isActive: true },
];
