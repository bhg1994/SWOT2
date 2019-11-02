module.exports = {
    distDir: '.next',
    NODE_OPTIONS: "--max-old-space-size=4096",
    webpack(config) {
        const prod = process.env.NODE_ENV === 'production'
        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
        }
    }
}