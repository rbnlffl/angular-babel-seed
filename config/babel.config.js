module.exports = {
    presets: [
        [
            'env',
            {
                targets: {
                    browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11']
                },
                modules: false
            }
        ],
        'angular2'
    ]
};
