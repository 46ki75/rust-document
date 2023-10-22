import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rust Fundamentals",
  description:
    "Master the fundamentals of Rust programming. From ownership to concurrency, get in-depth tutorials and code examples to build robust applications.",
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

    socialLinks: [{ icon: "github", link: "https://github.com/46ki75" }],
  },
  cleanUrls: true,
});
