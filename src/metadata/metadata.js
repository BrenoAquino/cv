module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:breno@brenoaquino.dev">breno@brenoaquino.dev</a>'
  },
  overview: `
  I am a person who is always looking for innovation and automating everything possible, enabling us to focus on more important tasks. I have experience with projects in the areas of education, streaming and finance. I am always open to discuss about architecture and performance, we always can learn more with a good discussion.
`,
  skills: [
    ['Swift', '+++++'],
    ['iOS', '+++++'],
    ['SwiftUI', '+++++'],
    ['Combine', '+++++'],
    ['View Code', '+++++'],
    ['SPM', '+++++'],
    ['Cocoapods', '+++++'],
    ['SDK', '+++++'],
    ['Git', '+++++'],
    ['CI/CD', '+++++'],
    ['Fastlane', '++++'],
    ['Github Actions', '++++'],
    ['Bitrise', '++++'],
    ['Python', '+++++'],
    ['AWS', '++++']
  ],
  positions: [
    {
      company: 'Rakuten',
      location: 'Remote',
      title: 'iOS Developer',
      period: 'October 2022 - current',
      skills: ['iOS', 'Swift', 'Modules', 'Github Actions', 'SDK'],
      contents: `
* Responsible to design and create a custom new SDK for the analytics.
* Implemented an authentication feature that is modified depending on the user's country.
`
    },
    {
      company: 'Itaú',
      location: 'Remote',
      title: 'iOS Developer',
      period: 'March 2022 - October 2022',
      skills: ['iOS', 'Swift', 'Modules', 'Cocoapods', 'Jenkins'],
      contents: `
* Responsible for maintaining the entire notification flow, composed of push notifications, deeplinks and a feature that allows the user to keep track of its notifications.
* Mentoring a Junior developer on my squad, teaching him about iOS development.
* Implemented several individual modules and distributed using Cocoapods.
`
    },
    {
      company: 'Meta',
      location: 'Remote',
      title: 'iOS Developer',
      period: 'December 2020 - February 2022 (part time)',
      skills: ['iOS', 'Swift', 'WebSocket', 'SDK', 'CI/CD', 'Github Actions', 'Scrum', 'Cocoapods'],
      contents: `
* Responsible for defining the base structure project for the Maple Leaf Sports & Entertainment (MLSE) client, defining the required APIs, the web socket messages and features prioritization.
* Implemented a SDK following Clean and MVVM to provide features as live and VOD streams, chats, real time stats and other features.
* Implemented a design system and a custom theme to be setted by the host app.
* Implemented scripts and configured the CI (using Github Action) to automate the build and distribution of the compiled SDK and its documentation.
* Used Agile and Scrum methodologies, also having weekly meetings with the client and the client backend team.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP, Brazil',
      title: 'iOS Developer',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Swift Package Manager', 'CI/CD', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
* Developed one stream project from the beginning, but unreleased, and improved another stream project, called NOW. Both of them provided live and VOD contents.
* Helped to define the solution and the architecture for the unreleased project, always looking for performance.
* Implemented a feature to list all channels and their programs, to improve the performance and the time to render the screen to the user, I implemented a custom cache algorithm to avoid unnecessary recalculations and binary search to improve the time to find the current program based on the time.
* Improved the architecture to use MVVM and follow Clean Architecture on the NOW project. This one had about 300,000+ monthly active users.
* Increased the test coverage applying the dependency injection concept.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'Tech Lead', 'Ruby on Rails'],
      contents: `
* Worked as an iOS Tech Lead.
* Responsible for all the university iOS Apps. The main university app had about 24,000+ monthly active users.
* Taught iOS courses for interns
* Responsible for teaching about the iOS, git, scrum methodology and also how to design the entire app, from the UX, priorities, APIs, front end to tests.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'Intern - iOS Developer',
      period: 'July 2017 - March 2018',
      skills: ['iOS', 'Swift'],
      contents: `
* I learned more about iOS working on the main university app, especially working on the chat and the map feature that could guide the users through the university.
* Refactored the app following MVVM.
* After 9 months I was hired to be responsible for a team composed of 10 interns. My job was to teach them about iOS and software engineering.
`
    },
  ],
  education: [
    {
      company: 'University of Fortaleza - UNIFOR',
      level: 'Graduation',
      course: 'Computing Engineering',
      period: '2015 - 2019',
      contents: `
* Final Project: Research using recurrent neural networks to predict cryptocurrency trends.
* Object Orientation class assistant in 2016.
* Microprocessor class assistant in 2017.
* Researcher in the area of sensor network security, trying to implement an algorithm to detect attacks.
`
    }
  ],
  personal_projects: [
    {
      title: 'iOS Movies',
      skills: ['iOS', 'Swift', 'Design System', 'MVVM', 'View Code'],
      contents: 'App integrated with TheMovieDB to be a base project to apply new technologies or create a POC.',
    },
    {
      title: 'iOS Cash Handler',
      skills: ['iOS', 'Swift', 'Design System', 'MVVM', 'View Code'],
      contents: 'This project in development creates an app that uses SwitUI, Clean Architecture, Coordinator and SPM modules.',
    },
    {
      title: 'iOS Common Module',
      skills: ['iOS', 'Swift', 'Design System', 'View Code'],
      contents: 'A set of extensions for views to improve code readability, write and maintenance constraints and allowing easy integration with design systems.',
    },
    {
      title: 'Home Security System',
      skills: ['Computer Vision', 'Python', 'Flask', 'WebSocket', 'MongoDB', 'Raspberry Pi', 'Computer Vision', 'Machine Learning'],
      contents: 'System to detect people and objects using IP cameras.'
    },
    {
      title: 'C.E.I. B3 - Crawler',
      skills: ['Web Scraping', 'NodeJS', 'Python', 'Serverless', 'AWS DynamoDB', 'AWS Lambda'],
      contents: 'Crawler project to extract data from a Brazilian Stock Market platform and give you an overview about your investments by APIs.'
    },
    {
      title: 'Mobile Stores (App Store e Play Store) - Crawler',
      skills: ['Web Scraping', 'Python', 'Serverless', 'AWS Step Functions', 'AWS Lambda', 'AWS DynamoDB'],
      contents: 'Crawler to extract reviews from App Store and Play Store.'
    }
  ]
};
