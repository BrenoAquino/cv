module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:brenoaquino7phr@gmail.com">brenoaquino7phr@gmail.com</a>'
  },
  overview: `
I am a person who is always looking for innovation and automating every thing possible. I have experience with projects in the areas of education, streaming and finance. I work with the creation, evolution and improvement of architectures with performance and quality improvement goals.
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
      title: 'Senior iOS Developer',
      period: 'March 2022 - current',
      skills: ['iOS', 'Swift', 'Modules'],
      contents: `
I am working on the user communication modules, such as push notificacations, preferences about the communication and the list of all notification the bank sent to the user.
`
    },
    {
      company: 'Meta',
      location: 'Remote',
      title: 'Senior iOS Developer',
      period: 'December 2020 - February 2022 (part time)',
      skills: ['iOS', 'Swift', 'Github Actions', 'Scrum', 'Pods'],
      contents: `
I was responsible for defining the project structure with the client (Maple Leaf Sports & Entertainment). Together with an android developer, we structured the technical part of the project. I created the SDK following Clean Arch and MVVM. The biggest challenge of this project was that it wasn't an app, it was an SDK (distributed by Cocoapods) to be integrated with other apps. The project was guided by Agile using Scrum and most meetings were in English.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP, Brazil',
      title: 'Senior iOS Developer',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
I worked on streaming projects providing live and VOD content to users. The projects followed the Agile methodology and used SAFe. The main project was Now Online App, I worked there focusing on improving quality and user experience. This work was done through refactoring features and architectural components.
`
    },
    // TODO: Merge Universidade de Fortaleza
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'Tech Lead', 'Ruby on Rails'],
      contents: `
I worked as a Tech lead and iOS developer. The main app which I worked was Unifor Mobile, this app is mobile version of the university platform. The app users can be professors, students or emplyees. The main features were the map, which could guide the user to any main point in the university, the frequency, enabling teachers to make the student frequency in their classes, and enrollment, which allows the students to choose subjects and enroll in the ones they want to. I was reponsible for teaching interns about the tecnology and how the projects work in real world through courses and daily tracking by using scrum. I also contributed to create a set of other apps for the university.
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
      course: 'Computing Engineering',
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
