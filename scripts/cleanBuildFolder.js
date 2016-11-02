'use strict'
const fs = require('fs')
const chalk = require('chalk')
const rimraf = require('rimraf')

if (fs.existsSync('build')) {
  if (fs.existsSync('build/webpack.stats.browser.json')) {
    console.log(chalk.bold.yellow('* Cleaning build folder...'))
    rimraf.sync('build')
  } else {
    console.log(chalk.bold.yellow('* Not cleaning: build folder doesn’t look like it’s generated by legendary-pancake.'))
  }
}