var path = require('path')
var findUp = require('find-up')

module.exports = (config) => {
  const workDir = path.join(findUp.sync('package.json'), '..')
  const useThreads = process.env.NODE_ENV === 'production'
  const cacheDirectory = path.resolve(
    workDir,
    'node_modules/.cache/cache-loader'
  )

  const rule = config.module
    .rule('gql')
    .test(/\.(gql|graphql)$/)
    .include.add(workDir)
    .end()
    .use('cache-loader')
    .loader('cache-loader')
    .options({ cacheDirectory })
    .end()

  if (useThreads) {
    rule.use('thread-loader').loader('thread-loader')
  }
  rule
    .use('gql-loader')
    .loader('graphql-tag/loader')
    .end()
}
