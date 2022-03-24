module.exports = {
        transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
        transform: {
            '^.+\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
            ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/file-mock.js",
            '.(css|less)$': '<rootDir>/style-mock.js'
        },
        // transform: {
        //     '^.+\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
        // },
        // ...the rest of your config
    }
    // module.exports = {
    //     preset: 'ts-jest',
    //     testEnvironment: 'jsdom',
    //     roots: [
    //         "<rootDir>/src"
    //     ],
    //     transform: {
    //         ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest-config/file-mock.js",
    //         '.(css|less)$': '<rootDir>/jest-config/style-mock.js'
    //     },
    // };