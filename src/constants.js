import { DateTime } from 'luxon'

export const colors = {
  one: '#0778d6',
  two: '#7807d6',
  three: '#d60778',
  faded: '#666'
}

export const colorSwatch = [
  colors.one,
  colors.two,
  colors.three,
  colors.four,
  '#39aa58',
  '#3958aa'
]

export const formatDate = (dateStr, defaultVal = '') => {
  if (!dateStr) return defaultVal

  return DateTime.fromISO(dateStr).toFormat('LLL yyyy')
}

export const jobs = [
  {
    company: 'BYU - Learning Suite',
    position: 'Front End Developer',
    start: '2014-03-01',
    end: '2015-09-01',
    description:
      'Refactored legacy php code to use BackboneJS. Lots of debugging. Created an interactive online quiz creator.'
  },
  {
    company: 'iPartnr',
    position: 'Full Stack Programmer and Front End Team Lead',
    start: '2014-12-01',
    end: '2017-01-01',
    description:
      'Led a team of 5, giving daily training and weekly workshops. Created a templating language called cobalt. Created a dependency injection JavaScript module. Built lots of UI libraries for form input handling. Lots of cross-browser testing.'
  },
  {
    company: 'Neighbor Watch Care',
    position: 'Full Stack JavaScript Engineer, Team Lead, DevOps, Designer',
    start: '2018-03-01',
    end: '2018-05-01',
    description:
      'Freelance position. Team of 2. Built a website on React Static - hosted on Netlify. Integrated AWS services for the API and database.'
  },
  {
    company: 'Openside Studios',
    position: 'Full Stack JavaScript Engineer',
    start: '2016-04-01',
    description:
      'Team of 1. Lots of integration with the Facebook and Twitter APIs to push posts, manage ads, and handle webhooks. Made a web-scraping chrome extension. Made a GraphQL Zapier app.'
  },
  {
    company: 'Skinny Technologies',
    position: 'Full Stack Programmer',
    start: '2017-05-01',
    description:
      'Freelance position. Team of 1. Created a suite of wellness sites on React. Created an admin platform with React, AmCharts, and some WebGL.'
  }
]
