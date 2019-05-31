const pluginContainer = require('markdown-it-container')

module.exports = (md) => {
  md.use(pluginContainer, 'spoiler', {
    validate: (params) => params.trim().match(/^spoiler\s+(.*)$/),
    render: (tokens, idx) => {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n'
      } else {
        return '</details>\n'
      }
    }
  }).use(pluginContainer, 'aim', {
    render: (tokens, idx) => {
      var m = tokens[idx].info.trim().match(/^aim\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return `<div class="lary-aim"><h5>${
          m ? md.utils.escapeHtml(m[1]) : ''
        }</h5>\n`
      } else {
        return '</div>\n'
      }
    }
  })
}
