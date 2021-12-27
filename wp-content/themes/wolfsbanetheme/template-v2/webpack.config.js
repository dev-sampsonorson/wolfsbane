const path = require('path');
const glob = require('glob');
const upath = require('upath');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsConfigWebpackPlugin = require('ts-config-webpack-plugin');

module.exports = (env) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    return {
        mode: env.mode,
        context: __dirname,
        target: "web",
        entry: {
            'home-script': './src/index.ts',
            'shared-script': './src/shared.ts',
            'music-script': './src/music.ts',
            'contact-script': './src/contact.ts',
            'talent-hunt-script': './src/talent-hunt.ts',
            // 'about-page': './src/about.ts',
            // 'modules': ['./src/assets/modules/nav-primary.ts'],
            // styles: glob.sync('./src/assets/scss/**/*.scss'),
            styles: [
                './src/assets/scss/common.scss',
                './src/assets/scss/home.scss',
                './src/assets/scss/about.scss',
                './src/assets/scss/contact.scss',
                './src/assets/scss/music.scss',
                './src/assets/scss/studio.scss',
                './src/assets/scss/talent-hunt.scss'
            ],
            reload: './src/assets/js/reload.js',
            // 'modernizr-custom': './src/assets/js/modernizr-custom.js'
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                    /* include: [
                        path.join(__dirname, './src/index.ts')
                    ] */
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
                            }
                        }
                    ],
                    include: path.join(__dirname, './src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.s?[ac]ss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // includePaths: ['node_modules/compass-mixins/lib'],
                                publicPath: '../',
                                esModule: true,
                                hmr: isDev,
                            },
                        },
                        /* {
                            loader: 'style-loader'
                        }, */
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: [
                        'file-loader?name=images/[name].[ext]',
                        // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
                        'image-webpack-loader'
                    ],
                    // use: ['file-loader?name=[hash:6].[ext]&outputPath=images/'],
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                    // use: "url?limit=10000"
                    use: 'url-loader?name=fonts/[name].[ext]',
                },
                {
                    test: /\.(ttf|eot)(\?[\s\S]+)?$/,
                    use: 'file-loader?name=fonts/[name].[ext]',
                },
                {
                    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                    // include: path.resolve(__dirname, './src/index.ts'),
                    use: 'file-loader?name=audio/[name].[ext]',
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
        },
        output: {
            path: path.resolve(__dirname, './wwwroot/'),
            filename: 'js/[name].bundle.js'
        },
        optimization: {
            // minimize: false,
            runtimeChunk: 'single',
            removeEmptyChunks: true,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        priority: 10
                    },
                    "css-common": {
                        name: 'common',
                        test: /common\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-home": {
                        name: 'home',
                        test: /home\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-about": {
                        name: 'about',
                        test: /about\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-contact": {
                        name: 'contact',
                        test: /contact\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-music": {
                        name: 'music',
                        test: /music\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-studio": {
                        name: 'studio',
                        test: /studio\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    "css-talent-hunt": {
                        name: 'talent-hunt',
                        test: /talent-hunt\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    }
                }
            }
        },
        plugins: [
            // new webpack.IgnorePlugin(/\.\/assets\/modules\/nav-primary\.ts$/),
            // new TsConfigWebpackPlugin({ configFile: './tsconfig.base.json' }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, './src/assets/js/modernizr-custom.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/polyfill.min.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/smil.user.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/images/studio-1.png'), to: 'images/', },
                    { from: path.resolve(__dirname, './src/assets/images/studio-2.png'), to: 'images/', },
                    { from: path.resolve(__dirname, './src/assets/images/studio-3.png'), to: 'images/', },
                    { from: path.resolve(__dirname, './src/assets/images/playing-equalizer.gif'), to: 'images/', },
                    { from: path.resolve(__dirname, './src/assets/js/parsley.min.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/parsley.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/jquery-3.5.1.min.js'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/dom-parser-extension.js'), to: 'js/', },
                ],
            }),
            new HtmlWebpackPlugin({
                title: 'Wolfsbane Studios',
                template: './src/pages/index.html',
                filename: 'index.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                // excludeChunks: ['styles'],
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'About | Wolfsbane Studios',
                template: './src/pages/about.html',
                filename: 'about.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'Music | Wolfsbane Studios',
                template: './src/pages/music.html',
                filename: 'music.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'Studio | Wolfsbane Studios',
                template: './src/pages/studio.html',
                filename: 'studio.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'Contact | Wolfsbane Studios',
                template: './src/pages/contact.html',
                filename: 'contact.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'Talent Hunt | Wolfsbane Studios',
                template: './src/pages/talent-hunt.html',
                filename: 'talent-hunt.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new HtmlWebpackPlugin({
                title: 'Test | Wolfsbane Studios',
                template: './src/pages/test.html',
                filename: 'test.html',
                minify: {
                    collapseWhitespace: isProd
                },
                hash: false,
                inject: false
            }),
            new MiniCssExtractPlugin({
                filename: isDev ? 'css/[name].css' : 'css/[name].css',
                chunkFilename: isDev ? 'css/[name].css' : 'css/[name].css', //.[contenthash:6]
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        // precss(),
                        autoprefixer()
                    ]
                }
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
                }
            }),
            /* new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }), */
            {
                apply(compiler) {
                    compiler.hooks.shouldEmit.tap('Remove styles from output', (compilation) => {
                        // console.log(compilation.assets);
                        delete compilation.assets['js/modules.bundle.js'];
                        delete compilation.assets['js/styles.bundle.js'];
                        delete compilation.assets['js/common.bundle.js'];
                        delete compilation.assets['js/home.bundle.js'];
                        delete compilation.assets['js/contact.bundle.js'];
                        delete compilation.assets['js/about.bundle.js'];
                        delete compilation.assets['js/music.bundle.js'];
                        delete compilation.assets['js/studio.bundle.js'];
                        delete compilation.assets['js/talent-hunt.bundle.js'];
                        return true;
                    })
                }
            }
        ],
        devServer: {
            publicPath: '/',
            contentBase: path.resolve(__dirname, './wwwroot'),
            compress: true,
            port: 8081,
            stats: 'errors-only',
            open: false,
            hot: true,
            inline: true
        }
    };
};