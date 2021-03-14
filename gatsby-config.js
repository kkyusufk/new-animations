module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        once: false,
        selector: '[data-sal]'
      }
    }
  ],
};
