import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "文档站",
    description: "组件和翻译文档的集合",
    lastUpdated: true,
    head: [
        [
            "script",
            {},
            `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mvabepuoj9");`,
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Volta 中文文档", link: "https://volta.jikun.dev" },
            { text: "StencilJS 中文文档", link: "https://stenciljs.jikun.dev" },
            {
                text: "组件文档",
                items: [
                    { text: "水印", link: "/components/watermark-vue" },
                    { text: "图片预览", link: "/components/preview-image" },
                    { text: "条形码", link: "/components/barcode" },
                ],
            },
        ],

        sidebar: {
            "/components/": [
                {
                    text: "组件文档",
                    items: [
                        {
                            text: "watermark 水印",
                            link: "/components/watermark-vue",
                        },
                        {
                            text: "previewImage 图片预览",
                            link: "/components/preview-image",
                        },
                        { text: "barcode 条形码", link: "/components/barcode" },
                    ],
                },
            ],
        },

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
