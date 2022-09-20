module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:brenoaquino7phr@gmail.com">brenoaquino7phr@gmail.com</a>'
  },
  overview: `
I am a person who is always looking for innovation and automating every thing possible, enabling us to focus on more important tasks. I have experience with projects in the areas of education, streaming and finance. I am always open to discuss about architectures and performance, we always can learn more with a good discussion.
`,
  skills: [
    ['Swift', '+++++'],
    ['iOS', '+++++'],
    ['SwiftUI', '+++++'],
    ['Combine', '+++++'],
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
      company: 'Itaú',
      location: 'Remote',
      title: 'Senior iOS Developer',
      period: 'March 2022 - current',
      skills: ['iOS', 'Swift', 'Modules'],
      contents: `
* Responsable to mantain the entire notification flow, composed by push notifications, deeplinks and the list with all the user's notifications.
* I am mentoring a Junior develop on my squad, helping him to get more knowlodge about the iOS platform and about the tech area.
`
    },
    {
      company: 'Meta',
      location: 'Remote',
      title: 'Senior iOS Developer',
      period: 'December 2020 - February 2022 (part time)',
      skills: ['iOS', 'Swift', 'WebSocket', 'SDK', 'CI/CD', 'Github Actions', 'Scrum', 'Cocoapods'],
      contents: `
* Responsable to define the base structure project for the Maple Leaf Sports & Entertainment (MLSE) clinet, define the required APIs, messagens for the web socket and the features priorities.
* Implemented an White Label SDK following Clean and MVVM to provide features as live and vod streams, chats, real time stats and other features. The SDK could be integrated inside any app and it will follow the app theme.
* Implemented scripts and configured the CI (using Github Action) to automate the build and distribution of the compiled SDK and its documentation.
* Used Agile and Scrum and we had almost all meeting in English.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP, Brazil',
      title: 'Senior iOS Developer',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Swift Package Manager', 'CI/CD', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
* Developed one stream project from the begining and improved another stream project, both of them providing live and VOD contents.
* Helped to define the solution and the achitecture for the first project, always looking for performance.
* Implemented a feature to list all channels and their programs, to improve the performace and the time to render the screen to the user, I implemented a custom cache algorithm to avoid unnecessary recalculations and binary search to improve the time to find the current program based on the time.
* Improved the architecture to use MVVM and follow Clean Architecture on the second stream project, called NOW. This one had about 300,000 monthly active users.
* Incressed the test coverage applying the dependence injection concept.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'Tech Lead', 'Ruby on Rails'],
      contents: `
* Worked as a iOS Tech Lead.
* Responsable for all the university iOS Apps. The main university app had about 24,000+ monthly active users.
* Taught iOS courses for interns
* Responsable to teach about the tech things (iOS, git and scrum process for example) and also how to design the entire solution, considering the required APIs, priorities, front end, UX and tests.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'Intern - iOS Developer',
      period: 'July 2017 - March 2018',
      skills: ['iOS', 'Swift'],
      contents: `
* I learned more about iOS working on the main university app, especialy working on the chat and the map that could guide the users throught the university.
* Refactored the app following MVVM.
* After 9 months I was hired to be responsable for a team composed by 10 interns. My job was to teach them about iOS and about the project processes.
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
* Final Project: Research using recurrent neural networks to predict criptocurrency trends.
* Object Orientation class assistant in 2016.
* Microprocessor class assistant in 2017.
* Researcher in the area of sensor network security, trying to implement an algorith to detect atacks.
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
      contents: 'This project in development creates an app that uses SwitUI, Clean Arch, coordinator and SPM modules.',
    },
    {
      title: 'iOS Common Module',
      skills: ['iOS', 'Swift', 'Design System', 'View Code'],
      contents: 'A set of extensions for views to improve code readability, write and maintenance about contraints and allowing easy integration with design systems.',
    },
    {
      title: 'Home Security System',
      skills: ['Computer Vision', 'Python', 'Flask', 'WebSocket', 'MongoDB', 'Raspberry Pi'],
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
