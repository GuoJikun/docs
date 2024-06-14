import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "文档站",
    description: "组件和翻译文档的集合",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        editLink: {
            text: "在 GitHub 上编辑此页",
            pattern: "https://github.com/GuoJikun/docs/edit/main/src/:path",
        },
        lastUpdatedText: "最后更新时间",
        outline: [2, 3],
        outlineTitle: "目录",
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/GuoJikun/docs",
            },
        ],
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2023-present GuoJiKun",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.startsWith("ivy-"),
            },
        },
    },
    sitemap: {
        hostname: "https://docs.jikun.dev/",
        transformItems: (items) => {
            // add new items or modify/filter existing items
            return items.filter(
                (item) => item.url !== "auth/cnblog/callback.html"
            );
        },
    },
});
