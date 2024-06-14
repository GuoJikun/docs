// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.scss";
import "@ivy-design/ce/dist/style.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...
        // @ts-ignore
        if (!import.meta.env.SSR) {
            import("@ivy-design/ce").then((module) => {
                // use code
                console.log(module);
                const { registerComponents } = module;
                registerComponents();
            });
        }
    },
} satisfies Theme;
