{
  mode: 'development',
  context: 'D:\\sendya\\Gitlab\\antd-pro',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'D:\\sendya\\Gitlab\\antd-pro\\dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'D:\\sendya\\Gitlab\\antd-pro\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@config': 'D:\\sendya\\Gitlab\\antd-pro\\config',
      '@example': 'D:\\sendya\\Gitlab\\antd-pro\\example\\src',
      '@ant-design/icons/lib/dist$': 'D:\\sendya\\Gitlab\\antd-pro\\example\\src\\core\\antd\\icons.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'D:\\sendya\\Gitlab\\antd-pro\\node_modules',
      'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\sendya\\Gitlab\\antd-pro\\node_modules',
      'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '5182411f'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '5182411f'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('svg').oneOf('inline') */
          {
            resourceQuery: /inline/,
            use: [
              {
                loader: 'vue-svg-icon-loader'
              }
            ]
          },
          /* config.module.rule('svg').oneOf('external') */
          {
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[hash:8].[ext]'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: {},
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: {},
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: {},
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: {},
                  javascriptEnabled: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '7f76728d'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\@vue\\cli-service\\lib'
        ],
        use: [
          {
            loader: 'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\eslint-loader\\index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '29616016',
              emitWarning: false,
              emitError: false,
              eslintPath: 'D:\\sendya\\Gitlab\\antd-pro\\node_modules\\eslint',
              formatter: function (results) {
                  let errors = 0;
                  let warnings = 0;
                  let fixableErrors = 0;
                  let fixableWarnings = 0;
              
                  const resultsWithMessages = results.filter(result => result.messages.length > 0);
              
                  let output = resultsWithMessages.reduce((resultsOutput, result) => {
                      const messages = result.messages.map(message => `${formatMessage(message, result)}\n\n`);
              
                      errors += result.errorCount;
                      warnings += result.warningCount;
                      fixableErrors += result.fixableErrorCount;
                      fixableWarnings += result.fixableWarningCount;
              
                      return resultsOutput.concat(messages);
                  }, []).join("\n");
              
                  output += "\n";
                  output += formatSummary(errors, warnings, fixableErrors, fixableWarnings);
              
                  return (errors + warnings) > 0 ? output : "";
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: (compilation, assets, pluginOptions) => {
          // enhance html-webpack-plugin's built in template params
          let stats
          return Object.assign({
            // make stats lazy as it is expensive
            get webpack () {
              return stats || (stats = compilation.getStats().toJson())
            },
            compilation: compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              files: assets,
              options: pluginOptions
            }
          }, resolveClientEnv(options, true /* raw */))
        },
        template: 'D:\\sendya\\Gitlab\\antd-pro\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'D:\\sendya\\Gitlab\\antd-pro\\public',
          to: 'D:\\sendya\\Gitlab\\antd-pro\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    {
      options: {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      },
      checkIgnore: function () { [native code] }
    },
    {
      handler: {
        options: {
          fileName: 'css/theme-colors-[contenthash:8].css',
          matchColors: [
            '#1890ff',
            '#2f9bff',
            '#46a6ff',
            '#5db1ff',
            '#74bcff',
            '#8cc8ff',
            '#a3d3ff',
            '#badeff',
            '#d1e9ff',
            '#e6f7ff',
            '#bae7ff',
            '#91d5ff',
            '#69c0ff',
            '#40a9ff',
            '#1890ff',
            '#096dd9',
            '#0050b3',
            '#003a8c',
            '#002766',
            '24,144,255'
          ],
          isJsUgly: false,
          changeSelector(selector) {
            switch (selector) {
              case '.ant-calendar-today .ant-calendar-date':
                return ':not(.ant-calendar-selected-date):not(.ant-calendar-selected-day)' + selector
              case '.ant-btn:focus,.ant-btn:hover':
                return '.ant-btn:focus:not(.ant-btn-primary):not(.ant-btn-danger):not(.ant-btn-link),.ant-btn:hover:not(.ant-btn-primary):not(.ant-btn-danger):not(.ant-btn-link)'
              case '.ant-btn.active,.ant-btn:active':
                return '.ant-btn.active:not(.ant-btn-primary):not(.ant-btn-danger):not(.ant-btn-link),.ant-btn:active:not(.ant-btn-primary):not(.ant-btn-danger):not(.ant-btn-link)'
              case '.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon':
                return ':not(.ant-steps-item-process)' + selector
              case '.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item-open,.ant-menu-horizontal>.ant-menu-item-selected,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu-active,.ant-menu-horizontal>.ant-menu-submenu-open,.ant-menu-horizontal>.ant-menu-submenu-selected,.ant-menu-horizontal>.ant-menu-submenu:hover':
              case '.ant-menu-horizontal > .ant-menu-item-active,.ant-menu-horizontal > .ant-menu-item-open,.ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu-active,.ant-menu-horizontal > .ant-menu-submenu-open,.ant-menu-horizontal > .ant-menu-submenu-selected,.ant-menu-horizontal > .ant-menu-submenu:hover':
                return '.ant-menu-horizontal > .ant-menu-item-active,.ant-menu-horizontal > .ant-menu-item-open,.ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu-active,.ant-menu-horizontal > .ant-menu-submenu-open,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover'
              case '.ant-menu-horizontal > .ant-menu-item-selected > a':
              case '.ant-menu-horizontal>.ant-menu-item-selected>a':
                return '.ant-menu-horizontal:not(ant-menu-light):not(.ant-menu-dark) > .ant-menu-item-selected > a'
              case '.ant-menu-horizontal > .ant-menu-item > a:hover':
              case '.ant-menu-horizontal>.ant-menu-item>a:hover':
                return '.ant-menu-horizontal:not(ant-menu-light):not(.ant-menu-dark) > .ant-menu-item > a:hover'
              default :
                return selector
            }
          }
        },
        assetsExtractor: {
          extractor: {
            extractColors: function (src) {
                    src = src.replace(Reg_Lf_Rem, '')
                    var ret = []
                    var nameStart, nameEnd, cssEnd = -1;
                    while (true) {
                        nameStart = cssEnd + 1
                        nameEnd = src.indexOf('{', nameStart)
                        cssEnd = findCssEnd(src, nameEnd)
                        if (cssEnd > -1 && cssEnd > nameEnd && nameEnd > nameStart) {
                            var cssCode = src.slice(nameEnd + 1, cssEnd)
                            if (cssCode.indexOf('{') > -1) { // @keyframes
                                var rules = this.extractColors(cssCode)
                            } else {
                                rules = this.getRules(cssCode)
                            }
                            if (rules.length) {
                                var selector = src.slice(nameStart, nameEnd)
                                selector = selector.replace(TrimReg, '$1')
                                selector = selector.replace(SubCssReg, '>')
                                selector = selector.replace(SpaceReg, ' ') // lines
                                var p = selector.indexOf(';') //@charset utf-8;
                                if (p > -1) {
                                    selector = selector.slice(p + 1)
                                }
                                // 鏀瑰彉閫夋嫨鍣?                                if (options.changeSelector) {
                                    var util = {
                                        rules: rules,
                                        changeEach: changeEach
                                    }
                                    selector = options.changeSelector(selector.split(',').sort().join(','), util) || selector
                                }
                                ret.push(selector + '{' + rules.join(';') + '}')
                            }
                        } else {
                            break;
                        }
                    }
                    return ret
            
                    // 鏌ユ壘css灏鹃儴锛屽吋瀹?@keyframes {10%{...}}
                    function findCssEnd(src, start) {
                        var level = 1
                        var cssEnd = start
                        while (true) {
                            cssEnd++
                            var char = src[cssEnd]
                            if (!char) {
                                return -1
                            } else if (char === '{') {
                                level++
                            } else if (char === '}') {
                                level--
                                if (level === 0) {
                                    break
                                }
                            }
                        }
                        return cssEnd
                    }
            
                    function changeEach(selector, surfix, prefix) {
                        surfix = surfix || ''
                        prefix = prefix || ''
                        return selector.split(',').map(function (s) {
                            return prefix + s + surfix
                        }).join(',')
                    }
                },
            getRules: function (cssCode) {
                var rules = cssCode.split(';')
                var ret = []
                rules.forEach(rule => {
                    if (this.testCssCode(rule)) {
                        ret.push(rule.replace(SpaceReg, ' '))
                    }
                })
                return ret
            },
            testCssCode: function (cssCode) {
                for (var colorReg of matchColorRegs) {
                    if (colorReg.test(cssCode)) return true
                }
                return false
            }
          },
          extractAssets: function (assets) {
                  var srcArray = extractAll(this)
                  if (srcArray.length === 0) {
                      // 瀹归敊涓€娆?                      options.isJsUgly = !options.isJsUgly
                      srcArray = extractAll(this)
                  }
                  return srcArray;
          
                  function extractAll(that) {
                      var cssSrcs = [];
                      Object.keys(assets).map(fn => {
                          var items = that.extractAsset(fn, assets[fn])
                          cssSrcs = cssSrcs.concat(items)
                      });
                      return cssSrcs
                  }
              },
          extractAsset: function (fn, asset) {
                  if (fn.match(/\.css$/i)) {
                      var src = assetToStr(asset);
                      writeFileForDebugIf(fn, src, this.extractor)
                      return this.extractor.extractColors(src);
                  } else if (fn.match(/\.js$/i)) {
                      src = assetToStr(asset);
                      writeFileForDebugIf(fn, src, this.extractor)
                      var cssSrcs = []
                      var CssCodeReg = options.isJsUgly ? Css_Loader_Reg_UGLY : Css_Loader_Reg_DEV;
                      src.replace(CssCodeReg, (match, $1) => {
                          cssSrcs = cssSrcs.concat(this.extractor.extractColors($1));
                      });
                      return cssSrcs
                  }
                  return []
          
                  function writeFileForDebugIf(fn, src, extractor) {
                      // `npm run dev --theme_debug` to write asset files for debug
                      try {
                          if (process.env.npm_config_theme_debug) {
                              if (extractor.testCssCode(src)) {
                                  var info = JSON.stringify(options) + '\n' + src
                                  fs.writeFileSync(path.join(process.cwd(), '_tmp_' + path.basename(fn)), info)
                              }
                          }
                      } catch (e) {
                      }
                  }
              }
        }
      }
    }
  ],
  entry: {
    app: [
      './example/src/main.js'
    ]
  },
  externals: {}
}
