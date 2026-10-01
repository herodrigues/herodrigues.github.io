# hbrodrigues.com

Personal website of Herinson Rodrigues, built with [Astro](https://astro.build/) and Tailwind CSS on top of the [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro) template.

## Development

Requires Node.js >= 22.12.0.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

## Editing content

- About page: `src/content/bio.md`
- CV: `src/content/cv.md`
- Blog posts: `src/content/posts/*.md`
- Publications: `src/content/publications/*.md`
- Teaching: `src/content/teaching/*.md`

Site settings, navigation, and social links live in `src/config/`. See `example_contents/` for frontmatter examples.

## Deployment

Pushing to `master` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`. The custom domain is set in `public/CNAME`.
