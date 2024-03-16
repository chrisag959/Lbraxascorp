// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  websdkSidebar: [
    'overview',
    'getting-started',
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'WebSDK Guides',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides'
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'WebSDK Troubleshooting Guides',
        keywords: ['guides','troubleshooting'],
        image: '/img/docusaurus.png',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'troubleshooting'
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api'
        },
      ],
    },
    {
      type: 'link',
      label: "Changelog",
      href: 'web-sdk/changelog'
    }
  ]
};