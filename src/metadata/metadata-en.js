module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:brenoaquino7phr@gmail.com">brenoaquino7phr@gmail.com</a>'
  },
  overview: 'Sou uma pessoa que sempre busca inovação e principalmente automações de processos. Tenho experiência com projetos nas áreas de educação e streaming. Trabalho com criação, evolução e melhoria de arquiteturas com o objetivo de aumentar a produtividade, performance e qualidade dos projetos.',
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
      period: 'December de 2020 - Febuary 2022 (part time)',
      skills: ['iOS', 'Swift', 'Github Actions', 'Scrum'],
      contents: `
Fui responsável pela estruturação do projeto junto com o cliente (Maple Leaf Sports & Entertainment). Junto com um outro desenvolvedor Android nós estruturamos a parte técnica do projeto. Para o projeto iOS utilizamos Clean Architecture e MVVM. O grande desafio desse projeto, diferente da maioria, foi criar não um aplicativo, mas sim uma SDK (distribuído com Cocoapods) para ser integrada em outros aplicativos. O projeto seguiu a metodologia agil utilizando Scrum. Como o cliente era no Canadá, as cerimônias eram realizadas em inglês.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP',
      title: 'iOS Developer Senior',
      period: 'March de 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
Trabalho em projetos de streaming fornecendo para o cliente conteúdos VOD e Live. Os projetos seguem a metodologia agil utilizando SAFe. O principal projeto é o Now Online, com o foco em melhorar a qualidade do produto e prover uma melhor experiência para o usuário, juntamente com a melhoria da arquitetura do projeto.
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
I worked as a Tec lead and iOS developer. The main app witch i worked was Unifor Mobile, this app is kind a mobile version about the university platform. The app users could be a professor, a student or an emplyeer. The main features was the map, that could guide the user to any main point in the university, the frequency, that enable the professor to realize the student frequency in their classes, and the registration, that allows the students to choose and subscribe for the disciplines that they want. I was reponsible to teach intens about the tecnology and about how projects runs in real work by courses and daily track. I also contributed to create an app for University Podcast.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'Intern - iOS Developer',
      period: 'July 2017 - March 2018',
      skills: ['iOS', 'Swift', 'UX'],
      contents: `
I was iOS developer intern and worked on a refactoring in the main university app. I had expirience with many areas, such as iOS development, Android development, Ruby on Rails developrment and UX.
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
* Activities: Object Orientations Monitor in 2016; Microprocessors Monitor in 2017; Researcher in security area of network sensors area.
`
    }
  ],
  personal_projects: [
    {
      title: 'iOS Movies',
      skills: ['iOS', 'Swift', 'Design System', 'MVVM', 'View Code'],
      contents: 'App integrated with TheMovieDB to be a base project to apply new tecnologies to learn or create an POC.',
    },
    {
      title: 'iOS Cash Handler',
      skills: ['iOS', 'Swift', 'Design System', 'MVVM', 'View Code'],
      contents: 'This project under development creates an app witch use SwitUI, Clean Arch, coordinator and SPM modules.',
    },
    {
      title: 'iOS Common Module',
      skills: ['iOS', 'Swift', 'Design System', 'View Code'],
      contents: 'A set of extensions for views to improve code readability, write and maintenance about contraints, allowing a easy integration design systems.',
    },
    {
      title: 'Home Security System',
      skills: ['Computer Vision', 'Python', 'Flask', 'WebSocket', 'MongoDB', 'Raspberry Pi'],
      contents: 'Small system to detect people and objects using IP cameras.'
    },
    {
      title: 'C.E.I. B3 - Crawler',
      skills: ['Web Scraping', 'NodeJS', 'Python', 'Serverless', 'AWS DynamoDB', 'AWS Lambda'],
      contents: 'Crawler project to extract data from a B3 website and gives you by APIs an overview about your investments.'
    },
    {
      title: 'Mobile Stores (App Store e Play Store) - Crawler',
      skills: ['Web Scraping', 'Python', 'Serverless', 'AWS Step Functions', 'AWS Lambda', 'AWS DynamoDB'],
      contents: 'Crawler to extract reviews from App Store and Play Store.'
    }
  ]
};
