const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    
    const build = (distDir, rootUrl) => ({
        ...defaultConfig,
        distDir,
        env: {
            rootUrl
        }
    })

    if (phase === PHASE_DEVELOPMENT_SERVER)
        return build('dev-build', 'https://dev.plausiblereality.com')

    return build('release-build', 'https://plausiblereality.com')
}