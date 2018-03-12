module.exports = {
    plugins: {
        // 'postcss-import': {},
        'autoprefixer': {},
        'postcss-cssnext': {
            warnForDuplicates: false
        },
        'cssnano': {
            zindex: false
        }
    }
};