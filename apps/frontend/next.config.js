const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@server'] = path.join(__dirname, '../backend/src');
        return config;
      },
}

module.exports = nextConfig
