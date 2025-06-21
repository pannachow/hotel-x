const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require('fs').promises;

const prefix = "/hotel-x/#";
const links = [
    { url: `${prefix}/`, changefreq: "daily", priority: 1.0 },
    { url: `${prefix}/rooms`, changefreq: "daily", priority: 0.8 },
    { url: `${prefix}/reservations`, changefreq: "weekly", priority: 0.5 },
    { url: `${prefix}/contact`, changefreq: "weekly", priority: 0.2 },
];

(async function() {
    // create output stream
    const stream = new SitemapStream({ hostname: "https://pannachow.github.io" });

    // generate sitemap
    const buffer = await streamToPromise(Readable.from(links).pipe(stream));

    // write to file
    await fs.writeFile("public/sitemap.xml", buffer);
})();
