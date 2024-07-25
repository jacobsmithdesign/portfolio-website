/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      },
      {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { titleProp: true } }],
      }
    );

    return config;
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};

export default nextConfig;
