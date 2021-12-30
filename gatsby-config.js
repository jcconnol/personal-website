require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      title: 'John Connolly - Engineer, Builder, Tester',
      author: {
         name: 'John Connolly',
         summary: 'Engineer, Builder, Tester based out of Nashville, TN.'
      },
      description: 'A blog and portfolio of John Connolly, a software engineer and QA based out of Nashville, TN.',
      siteUrl: `https://johnconnolly.gatsbyjs.io`,
      social: {
         twitter: `johnconnolly`,
      },
      menuLinks:[
         {
            name:'index',
            link:'/'
         },
         {
            name:'About',
            link:'/about/'
         },
         {
            name:'Contact',
            link:'/contact/'
         },
         {
            name:'Experience',
            link:'/experience/'
         },
         {
            name:'Work',
            link:'/work/'
         },
         {
            name:'Blog',
            link:'/blog/'
         }
      ]
   },
   plugins: [
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               /*
               //really good except weird header on the top of the boxes that I cannot get rid of
               {
                  resolve: `gatsby-remark-highlight-code`,
                  options: {
                     terminal: "carbon",
                     theme: "dracula",
                     editable: false,
                     lineNumbers: true
                  },
               },*/
               {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                    theme: "Monokai" //good
                  }
               }
            ],
         },
      },
      `gatsby-plugin-less`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
           path: `${__dirname}/content/blog`,
           name: `blog`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `images`,
           path: `${__dirname}/src/images/`,
         },
       },
       {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `blog`,
           path: `${__dirname}/src/pages/`,
         },
       },
       {
          resolve: `gatsby-plugin-manifest`,
          options: {
             name: `gatsby-starter-default`,
             short_name: `starter`,
             start_url: `/`,
             background_color: `#663399`,
             theme_color:`#663399`,
             display: `minimal-ui`,
             icon: `src/images/logo.png`
          }
       },
       {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://johnconnolly.gatsbyjs.io',
          sitemap: 'https://johnconnolly.gatsbyjs.io/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      },
       {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
           // You can add multiple tracking ids and a pageview event will be fired for all of them.
           trackingIds: [
             "G-Z7KPCC51LW"
           ],
           // This object is used for configuration specific to this plugin
           pluginConfig: {
             // Puts tracking script in the head instead of the body
             head: true,
             // Setting this parameter is also optional
             respectDNT: true,
           },
         },
       },
       `gatsby-plugin-catch-links`,
       `gatsby-plugin-react-helmet`,
       `gatsby-plugin-sitemap`
   ]
}