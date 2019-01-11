const path = require('path')
const reactDocgen = require('react-docgen')

module.exports = {
  components: './src/components/**/[A-Z]*.js',
  defaultExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        { 
          test: /(\.css|\.scss)$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        {
          test: /\.svg$/,
          use: {
            loader: 'url-loader'
          }
        }

      ]
    }
  },
  // Show the absolute path of the component.
  getComponentPathLine(componentPath) {
    const name = path.dirname(componentPath, '.js')
    const dir = path.dirname(componentPath)
    return `import ${path.basename(name)} from '${dir}';`
  },

  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const { settings, lang } = props
    // "../mySourceCode.js"
    if (typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file)
      // displays the block as static code
      settings.static = true
      // no longer needed
      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang
      }
    }
    return props
  },
  
  //Print the web address to view you styleguide
  printServerInstructions(config) {
		console.log(`View your styleguide at: http://localhost:${config.serverPort}`);
	},
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/config/themeWrapper')
  },
  template: {
    favicon: './src/assets/storecast.ico/ms-icon-310x310.png',
  },

  resolver: reactDocgen.resolver
    .findAllComponentDefinitions
}