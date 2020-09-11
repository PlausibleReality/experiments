const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    
    const buildIn = distDir => ({
        ...defaultConfig,
        distDir
    })

    if (phase === PHASE_DEVELOPMENT_SERVER)
        return buildIn('dev-build')

    return buildIn('release-build')
}