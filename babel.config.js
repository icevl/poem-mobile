module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            // 'module:metro-react-native-babel-preset',
            'babel-preset-expo'
        ]
        // plugins: [
        //     [
        //         "module-resolver",
        //         {
        //             root: ".",
        //             alias: {
        //                 language: "./language"
        //             },
        //             cwd: "babelrc"
        //         }
        //     ]
        // ]
        // env: {
        //     development: {
        //         plugins: ["inline-dotenv"]
        //     }
        // }
    };
};
