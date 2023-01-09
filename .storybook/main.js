module.exports = {
    stories: [
        '../src/**/**/*.stories.mdx',
        '../src/**/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: '@storybook/react',
    features: {
        postcss: false,
    },
    core: {
        builder: 'webpack5',
    },
}
