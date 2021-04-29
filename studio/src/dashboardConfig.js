export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608ac47afc8e0400e1717387",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ewf7idfq",
                  apiId: "35f934ac-7221-4e07-9905-ab4901cebf9b",
                },
                {
                  buildHookId: "608ac47a22a37600d03e3de9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-93mh21b6",
                  apiId: "90499c67-a684-4370-b4c0-283b5e2e5270",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/brazile/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-93mh21b6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
