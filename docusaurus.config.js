// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Game Tracker',
  tagline: 'A bot that allows you to access game stats from Discord',
  url: 'https://game-tracker.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EndBug',
  projectName: 'game-tracker',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/EndBug/game-tracker-docs/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Game Tracker',
        logo: {
          alt: 'Game Tracker Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'readme',
            position: 'left',
            label: 'Docs'
          },
          {
            href: 'https://github.com/EndBug/game-tracker',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Federico Grandi. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      }
    })
}

module.exports = config
