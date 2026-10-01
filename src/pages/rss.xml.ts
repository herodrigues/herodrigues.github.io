import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, PAGES } from "../config";

export async function GET(context: any) {
    const posts = PAGES.blog.isActive !== false ? await getCollection("posts") : [];

    const items = [
        ...posts.map((post: any) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
    ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: context.site || SITE.website,
        items,
    });
}
