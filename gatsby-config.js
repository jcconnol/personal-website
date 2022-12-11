
const siteUrl = process.env.URL || `https://johncc.me`

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
      "siteUrl": siteUrl,
      social: {
         twitter: `johncconnolly`,
      },
      menuLinks:[
         {
            name:'index',
            link:''
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
         resolve: 'gatsby-plugin-newrelic',
         options: {
           config: {
               instrumentationType: 'proAndSPA',
               accountId: '3624824',
               trustKey: '3624824',
               agentID: '1120124909',
               licenseKey: 'NRJS-afc80195979bf7a4161',
               applicationID: '1120124909',
               beacon: 'bam.nr-data.net',
               errorBeacon: 'bam.nr-data.net'
           }
         }
      },
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
      {
         resolve: `gatsby-plugin-sitemap`,
         options: {
            createLinkInHead: true,
            entryLimit: 4000
         }
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
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `unity-test`,
           path: `${__dirname}/src/unity-test/unity/build/`,
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
          host: siteUrl,
          sitemap: siteUrl+'/sitemap-0.xml',
          policy: [{ userAgent: '*', disallow: '' }]
        }
      },
       {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
           trackingIds: [
             "G-Q3DWE1QGJL"
           ],
           // This object is used for configuration specific to this plugin
           pluginConfig: {
             // Puts tracking script in the head instead of the body
             head: true,
             respectDNT: false
           },
         },
       },
       `gatsby-plugin-catch-links`,
       `gatsby-plugin-react-helmet`
   ]
}