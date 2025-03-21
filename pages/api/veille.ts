import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

type CustomItem = {
    title?: string;
    link?: string;
    pubDate?: string;
    isoDate?: string;
    contentSnippet?: string;
    enclosure?: { url?: string };
    'media:content'?: { url?: string };
    content?: string;
};

const parser = new Parser();
const feedUrl = 'https://www.lemondeinformatique.fr/flux-rss/thematique/rss.xml';

function extractImage(item: CustomItem & { description?: string }): string | undefined {
    const possibleHtmlSources = [item.content, item.contentSnippet, item.description];

    for (const html of possibleHtmlSources) {
        if (!html) continue;
        const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (match && match[1]) return match[1];
    }

    if (item.enclosure?.url) return item.enclosure.url;
    if (item['media:content']?.url) return item['media:content'].url;

    return undefined;
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const feed = await parser.parseURL(feedUrl);
        const articles = (feed.items as CustomItem[] || [])
            .sort((a, b) => new Date(b.isoDate ?? '').getTime() - new Date(a.isoDate ?? '').getTime())
            .slice(0, 4)
            .map(item => ({
                title: item.title ?? '',
                link: item.link ?? '#',
                contentSnippet: item.contentSnippet ?? '',
                pubDate: item.isoDate ?? '',  // <-- ici isoDate au lieu de pubDate
                image: extractImage(item),
            }));

        console.log(articles);

        res.status(200).json(articles);
    } catch (error) {
        console.error('RSS fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch RSS feed' });
    }
}