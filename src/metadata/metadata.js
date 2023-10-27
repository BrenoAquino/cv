module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:breno@brenoaquino.dev">breno@brenoaquino.dev</a>'
  },
  overview: `
  I am a person who is always looking for innovation and automating everything possible, enabling us to focus on more important tasks. I have experience with projects in the areas of education, streaming and finance. I also have experience in creating SDKs, both for internal use and for sale to third parties. I am always open to discuss about architecture and performance.
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
      location: 'United States • Remote',
      title: 'iOS Developer',
      period: 'October 2022 - current',
      skills: ['iOS', 'Swift', 'Objective C', 'UIKit', 'View Code', 'SwiftUI', 'Unit Testing', 'XCTest', 'Modules', 'Github Actions', 'Xcode Cloud', 'Fastlane', 'SDK'],
      contents: `
* Responsible to design and create a custom new SDK for the analytics;
* Implemented an authentication feature that is modified depending on the user's country;
* Implemented a privacy module to internationalize the app and follow the laws of each country/state.
`
    },
    {
      company: 'Itaú',
      location: 'Brazil • Remote',
      title: 'iOS Developer',
      period: 'March 2022 - October 2022',
      skills: ['iOS', 'Swift', 'UIKit', 'View Code', 'Unit Testing', 'XCTest', 'Modules', 'Swift Package Manager', 'Cocoapods', 'Jenkins', 'Fastlane'],
      contents: `
* Responsible for leading and mentoring a Junior developer, teaching and guiding on iOS development;
* Implemented several individual modules and distributed using Cocoapods;
* Responsible for maintaining the entire notification flow, composed of push notifications, deeplinks and a feature that allows the user to keep track of its notifications.
`
    },
    {
      company: 'Meta',
      location: 'Canada • Remote',
      title: 'iOS Developer',
      period: 'December 2020 - February 2022 (part time)',
      skills: ['iOS', 'Swift', 'UIKit', 'View Code', 'Unit Testing', 'Quick', 'Nimble', 'XCTest', 'WebSocket', 'SDK', 'Cocoapods', 'CI/CD', 'Github Actions', 'Scrum'],
      contents: `
* Worked as a leader creating and defining the base structure project for the client Maple Leaf Sports & Entertainment (MLSE). Defining the priority of functionalities, architectures, APIs and web socket for real-time behavior;
* Implemented an SDK following Clean and MVVM to provide features like live and VOD streams, chats, real-time stats and other features and distributed using Cocoapods;
* Implemented a design system and a custom theme to be defined by the host app;
* Implemented scripts and configured the CI (using Github Action) to automate the build and distribution of the compiled SDK and its documentation;
* Used Agile and Scrum methodologies, also having weekly meetings with the client and the client backend team.
`
    },
    {
      company: 'Claro',
      location: 'São Paulo - SP, Brazil',
      title: 'iOS Developer',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'UIKit', 'View Code', 'Unit Testing', 'Quick', 'Nimble', 'XCTest', 'Swift Package Manager', 'CI/CD', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
* Developed one stream project from the beginning and improved another streaming project, called NOW Online. Both of them provided live and VOD contents;
* Worked as a leader of 2 other iOS developers defining the technologies, architecture and priorities;
* Helped to define the entire solution and the architecture for the project, always looking for performance;
* Implemented a feature to list all channels and their programs, to improve the performance and the time to render the screen to the user, I implemented a custom cache algorithm to avoid unnecessary recalculations and binary search to improve the time to find the current program based on the time;
* Improved the architecture to use MVVM and follow Clean Architecture on the NOW project. This one had about 300,000+ monthly active users;
* Increased the test coverage applying the dependency injection concept.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'UIKit', 'Storyboard', 'View Code', 'UI Testing', 'MVC', 'MVVM', 'Tech Lead', 'Ruby on Rails', 'Fastlane'],
      contents: `
* Worked as a Tech Lead for a team of 10 interns;
* Responsible for all the university iOS Apps. The main university app had about 24,000+ monthly active users;
* Taught iOS courses for interns and students;
* Responsible for teaching about the iOS, git, scrum methodology and also how to design the entire solution, from the UX, priorities, APIs, front end to tests;
* Refactored the app following MVVM. Among the features, the student's enrollment, the class frequency and the campus map with all the university's landmarks stand out.
`
    },
//     {
//       company: 'University of Fortaleza - UNIFOR',
//       location: 'Fortaleza - CE, Brazil',
//       title: 'Intern - iOS Developer',
//       period: 'July 2017 - March 2018',
//       skills: ['iOS', 'Swift'],
//       contents: `
// * I learned more about iOS working on the main university app, especially working on the chat and the map feature that could guide the users through the university.
// * Refactored the app following MVVM.
// * After 9 months I was hired to be responsible for a team composed of 10 interns. My job was to teach them about iOS and software engineering.
// `
//     },
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
    // {
    //   title: 'iOS Movies',
    //   skills: ['iOS', 'Swift', 'SwiftUI', 'Design System', 'MVVM'],
    //   contents: 'App integrated with TheMovieDB to be a base project to apply new technologies or create a POC.',
    // },
    {
      title: 'iOS Cash Handler',
      skills: ['iOS', 'Swift', 'SwiftUI', 'Design System', 'MVVM', 'View Code'],
      contents: 'This project creates an app for financial management with the aim of applying knowledge in SwiftUI, Coordinator, SPM and Clean Architecture',
    },
    {
      title: 'iOS Common Module',
      skills: ['iOS', 'Swift', 'UIKit', 'Design System', 'View Code'],
      contents: 'A set of extensions for views to improve code readability, write and maintenance constraints and allowing easy integration with design systems.',
    },
    {
      title: 'Home Security System',
      skills: ['Computer Vision', 'Python', 'Flask', 'WebSocket', 'MongoDB', 'Raspberry Pi', 'Computer Vision', 'Machine Learning'],
      contents: 'System to detect people and objects using IP cameras. It can be used with an alarm or for automation.'
    },
    // {
    //   title: 'C.E.I. B3 - Crawler',
    //   skills: ['Web Scraping', 'NodeJS', 'Python', 'Serverless', 'AWS DynamoDB', 'AWS Lambda'],
    //   contents: 'Crawler project to extract data from a Brazilian Stock Market platform and give you an overview about your investments by APIs.'
    // },
    {
      title: 'Mobile Stores (App Store e Play Store) - Crawler',
      skills: ['Web Scraping', 'Python', 'Serverless', 'AWS Step Functions', 'AWS Lambda', 'AWS DynamoDB'],
      contents: 'Crawler to extract reviews from the App Store and Play Store and try to extract the sentiment (positive, negative or neutral) of the comment.'
    }
  ]
};
