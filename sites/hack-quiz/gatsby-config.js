module.exports = {
  siteMetadata: {
    title: `Hack Quiz`,
    author: `Phaneendra`,
    description: `Where a smart answer won't get you fired!`,
    siteUrl: `https://hackquiz.netlify.com/`,
    social: {
      twitter: `phaneekr`,
    },
  },
  __experimentalThemes: ["clean-ui"],
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hack Quiz",
        short_name: "HackQuiz",
        theme_color: "#5c7cfa",
        background_color: "#ffffff",
        display: "standalone",
        Scope: "/",
        start_url: "/index.html?homescreen=1",
        icons: [
          {
            src: "images/icons/apple-touch-icon-120x120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "images/icons/apple-touch-icon.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "images/icons/mstile-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "images/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        splash_pages: null,
      },
    },
  ],
}
