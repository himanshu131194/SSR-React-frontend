const helmet = {
  htmlAttributes: { lang: 'en' },
  titleTemplate: 'Universal React App | %s',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/assets/fonts/font.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/assets/fonts/theme.css'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icons/favicon.ico'
    }
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    {
      name: 'description',
      content: 'Universal React Web App Boilerplate.'
    }
  ]
};

export default helmet;
