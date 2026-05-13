/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // /about was retired in v0.2. Anyone landing on it gets sent to
      // the note that now does the same job.
      {
        source: '/about',
        destination: '/notes/why-this-archive-exists',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
