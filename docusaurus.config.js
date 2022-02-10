/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'docusauruscms',
  tagline: 'Notes',
  url: 'https://docusauruscms.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/chan.ico',
  organizationName: 'placeholdergit', // Usually your GitHub org/user name.
  projectName: 'docusauruscms', // Usually your repo name.
  // customFields: {
  //   trailingSlash: true
  // },
  themeConfig: {
    navbar: {
      title: 'docusauruscms',
      logo: {
        alt: 'docusauruscms Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'LP3LNUFLMH',

      // Public API key: it is safe to commit it
      apiKey: '39eca361cd08297e3d0dd1d3327b864b',

      indexName: 'indexname',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/placeholdergit/docusauruscms/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/placeholdergit/docusauruscms/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
