module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:brenoaquino7phr@gmail.com">brenoaquino7phr@gmail.com</a>'
  },
  overview: `
I am a person who is always looking for innovation and automating the entire process that can be automated. I have experience with projects in the areas of education, streaming and finance. I work with the creation, evolution and improvement of architectures with performance and quality improvement goals.
`,
  skills: [
    ['Swift', '+++++'],
    ['iOS', '+++++'],
    ['Git', '+++++'],
    ['CI/CD', '+++++'],
    // ['Fastlane', '++++'],
    // ['GithubActions', '++++'],
    // ['Bitrise', '++++'],
    ['Flutter', '++'],
    ['Python', '+++++'],
    ['Web Scraping', '+++++'],
    ['Flask', '+++'],
    // ['TensorFlow', '+++'],
    ['Node.js', '+++'],
    ['AWS', '++++'],
    ['Scrum', '+++++'],
  ],
  positions: [
    {
      company: 'Itaú',
      location: 'Remote',
      title: 'iOS Developer Senior',
      period: 'March 2022 - current',
      skills: ['iOS', 'Swift', 'Modules'],
      contents: `
`
    },
    {
      company: 'Meta',
      location: 'Remote',
      title: 'iOS Developer Senior',
      period: 'December 2020 - Febuary 2022 (part time)',
      skills: ['iOS', 'Swift', 'Github Actions', 'Scrum'],
      contents: `
I was responsible for defining the project structure with the client (Maple Leaf Sports & Entertainment). Together with an android developer, we structured the technical part of the project. I created the SDK following Clean Arch and MVVM. The biggest challenge of this project was that it wasn't an app, it was an SDK (distributed by Cocoapods) to be integrated with other apps. The project was guided by Agile using Scrum and most meetings were in English.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP, Brazil',
      title: 'iOS Developer Senior',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
I worked on streaming projects to give live and VOD content to users. The projects followed the Agile methodology and used SAFe. The main project was Now Online, I worked there focusing on improving quality and improving user experience through performance improvement. This work was done through a refactoring of some features and architectural improvement.
`
    },
    // TODO: Merge Universidade de Fortaleza
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'Liderança Técnica', 'Ruby on Rails'],
      contents: `
I worked as a Tec lead and iOS developer. The main app witch i worked was Unifor Mobile, this app is kind a mobile version ofthe university platform. The app users can be professors, a students or emplyeers. The main features were the map, witch could guide the user to any main point in the university, the frequency, witch enable the professor to make the student frequency in their classes, and the registration, witch allows the students to choose and subscribe in disciplines that they want. I was reponsible for teaching interns about the tecnology and about how the projects work in real world through courses and daily track. I also contributed to create an app for University Podcast.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'Intern - iOS Developer',
      period: 'July 2017 - March 2018',
      skills: ['iOS', 'Swift', 'UX'],
      contents: `
I was iOS developer intern and worked on a refactoring in the main university app. I had expirience with several areas, such as iOS development, Android development, Ruby on Rails developrment and UX.
`
    },
  ],
  education: [
    {
      company: 'University of Fortaleza - UNIFOR',
      level: 'Graduation',
      course: 'Computing Engine',
      period: '2015 - 2019',
      contents: `
* Closure Project: Research using recurrent neural networks to predict criptocurrency trends.
* Activities: Object Orientation Monitor in 2016; Microprocessor Monitor in 2017; Researcher in the area of sensor network security.
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
      contents: 'Small system to detect people and objects using IP cameras.'
    },
    {
      title: 'C.E.I. B3 - Crawler',
      skills: ['Web Scraping', 'NodeJS', 'Python', 'Serverless', 'AWS DynamoDB', 'AWS Lambda'],
      contents: 'Crawler project to extract data from a B3 website and give you an overview about your investments by APIs.'
    },
    {
      title: 'Mobile Stores (App Store e Play Store) - Crawler',
      skills: ['Web Scraping', 'Python', 'Serverless', 'AWS Step Functions', 'AWS Lambda', 'AWS DynamoDB'],
      contents: 'Crawler to extract reviews from App Store and Play Store.'
    }
  ]
};
