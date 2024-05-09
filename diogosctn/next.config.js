/** @type {import('next').NextConfig} */

var path = require('path')

var nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  extends: [
    'plugin:@next/next/recommended'
  ]
}

module.exports = nextConfig


