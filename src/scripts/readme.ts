import axios from 'axios'
import path from 'path'
import fs from 'fs'
import config from '../../docusaurus.config'

const rawURL =
  'https://raw.githubusercontent.com/EndBug/game-tracker/main/README.md'

axios
  .get(rawURL)
  .then((res) => {
    if (typeof res.data != 'string')
      throw new Error('Fetched data is not a string.')

    const URLregex =
      /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g

    const frontMatter = `
    ---
    id: readme
    title: Overview
    ---
    `

    const processed =
      frontMatter
        .trim()
        .split('\n')
        .map((l) => l.trim())
        .join('\n') +
      '\n' +
      res.data.replace(URLregex, (url) =>
        new URL(url).host == new URL(config.url).host
          ? new URL(url).pathname
          : url
      )

    const fn = path.join(__dirname, '../../docs/readme.md')
    fs.writeFileSync(fn, processed)
  })
  .catch((err) => {
    console.error("Couldn't fetch README from GitHub.")
    console.error(err)
    process.exit(1)
  })
