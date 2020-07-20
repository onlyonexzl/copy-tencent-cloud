'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
//请求返回参数处理
exports.dealData=function(data) {
  let newData = null;
  if (typeof data === 'string' && data.indexOf("var") !== -1) {
    let num = data.lastIndexOf(";");
    if (num === -1) {
      if (data.indexOf("[") > -1 && data.indexOf("[") < data.indexOf("{")) {
        newData = data.substring(data.indexOf("["))
      } else {
        newData = data.substring(data.indexOf("{"));
      }
    }
    else {
      if (data.indexOf("[") > -1 && (data.indexOf("[") < data.indexOf("{"))) {
        newData = data.substring(data.indexOf("["), data.lastIndexOf(";"))
      } else {
        newData = data.substring(data.indexOf("{"), data.lastIndexOf(";"));
      }
    }
    return JSON.parse(newData);
  } else {
    newData = data;
  }
  return newData;
}
// 获取url参数值
exports.getQueryString=function(name) {
  let str = Util.getTokenParam() || "";
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = str.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
// 缓存存、取、清除
exports.setStorage=function(key, val) {
  if (typeof val === 'object' || typeof val === 'function' && val instanceof Object) {
    val = JSON.stringify(val);
  }
  sessionStorage.setItem(key, val);
}
exports.getStorage=function(key) {
  let val = sessionStorage.getItem(key);
  if (/{|\[/.test(val)) {
    val = JSON.parse(val);
  }
  return val;
}
exports.removeStorage=function(key) {
  sessionStorage.removeItem(key);
}
exports.clearStorage=function() {
  sessionStorage.clear();
}
