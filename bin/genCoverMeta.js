const fs = require('fs')
const path = require('path')

const { genMeta } = require('./genSideBar')

const targetFile = path.resolve(__dirname, '../data/cover.json')
const meta = genMeta()

const str = JSON.stringify(meta, null, 2)

fs.writeFileSync(targetFile, str)
