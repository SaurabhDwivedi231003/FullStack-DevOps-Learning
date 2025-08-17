/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader']
    });

    return config;
},
};
