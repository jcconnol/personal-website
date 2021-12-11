require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
    title: 'John Connolly - Engineer, Builder, Tester',
    description: 'A blog and portfolio of John Connolly, a software engineer and QA based out of Nashville, TN.',
    menuLinks:[
      {
         name:'index',
         link:'/'
      },
      {
         name:'About',
         link:'/about'
      },
      {
         name:'Contact',
         link:'/contact'
      },
      {
         name:'Experience',
         link:'/experience'
      },
      {
         name:'Work',
         link:'/work'
      },
      {
         name:'Blog',
         link:'/blog'
      }
    ]
  },
  plugins: [
      `gatsby-transformer-remark`,
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
           path: `${__dirname}/src/blog/`,
         },
       },
   ]
}