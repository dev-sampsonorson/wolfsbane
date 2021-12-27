const path = require('path');
const glob = require('glob');
const upath = require('upath');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    return {
        mode: env.mode,
        context: __dirname,
        target: "web",
        entry: {
            'management-center-script': './src/management-center.ts',
            styles: [
                './src/assets/scss/backend.scss'
            ]
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
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
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
        },
        output: {
            path: path.resolve(__dirname, './assets/'),
            filename: 'js/[name].plugin-bundle.js'
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
                    "css-backend": {
                        name: 'backend',
                        test: /backend\.s?css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                }
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    // { from: path.resolve(__dirname, './src/assets/js/bootstrap.min.js'), to: 'js/', },
                    // { from: path.resolve(__dirname, './src/assets/js/bootstrap.min.js.map'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/js/index.js'), to: 'js/', },
                    // { from: path.resolve(__dirname, './src/assets/js/jquery-3.5.1.min.js'), to: 'js/', },
                    // { from: path.resolve(__dirname, './src/assets/js/popper.min.js'), to: 'js/', },
                    // { from: path.resolve(__dirname, './src/assets/js/popper.min.js.map'), to: 'js/', },
                    { from: path.resolve(__dirname, './src/assets/css/bootstrap.min.css'), to: 'css/', },
                    { from: path.resolve(__dirname, './src/assets/css/bootstrap.min.css.map'), to: 'css/', },
                ],
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
            {
                apply(compiler) {
                    compiler.hooks.shouldEmit.tap('Remove styles from output', (compilation) => {
                        delete compilation.assets['js/styles.plugin-bundle.js'];
                        delete compilation.assets['js/backend.plugin-bundle.js'];
                        return true;
                    })
                }
            }
        ]
    };
};