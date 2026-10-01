import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/herodrigues",
        linkTitle: `Herinson Rodrigues on GitHub`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/herinson",
        linkTitle: `Herinson Rodrigues on LinkedIn`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-7063-5285",
        linkTitle: `Herinson Rodrigues on ORCID`,
        isActive: true,
    },
    {
        name: "Lattes",
        href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4325996A4",
        linkTitle: `Herinson Rodrigues on Lattes`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:herinson@hbrodrigues.com",
        linkTitle: `Send an email to Herinson`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    Lattes: "Lattes",
    RSS: "RSS",
};
