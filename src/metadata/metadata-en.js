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
      company: 'Meta',
      location: 'Remoto',
      title: 'iOS Developer Senior',
      period: 'Dezembro de 2020 - momento (meio período)',
      skills: ['iOS', 'Swift', 'Github Actions', 'Scrum'],
      contents: `
Fui responsável pela estruturação do projeto junto com o cliente (Maple Leaf Sports & Entertainment). Junto com um outro desenvolvedor Android nós estruturamos a parte técnica do projeto. Para o projeto iOS utilizamos Clean Architecture e MVVM. O grande desafio desse projeto, diferente da maioria, foi criar não um aplicativo, mas sim uma SDK (distribuído com Cocoapods) para ser integrada em outros aplicativos. O projeto seguiu a metodologia agil utilizando Scrum. Como o cliente era no Canadá, as cerimônias eram realizadas em inglês.`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP',
      title: 'iOS Developer Senior',
      period: 'Março de 2019 - momento',
      skills: ['iOS', 'Swift', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
Trabalho em projetos de streaming fornecendo para o cliente conteúdos VOD e Live. Os projetos seguem a metodologia agil utilizando SAFe. O principal projeto é o Now Online, com o foco em melhorar a qualidade do produto e prover uma melhor experiência para o usuário, juntamente com a melhoria da arquitetura do projeto.
`
    },
    // TODO: Merge Universidade de Fortaleza
    {
      company: 'Universidade de Fortaleza',
      location: 'Fortaleza - CE',
      title: 'iOS Developer',
      period: 'Março de 2018 - Março de 2019',
      skills: ['iOS', 'Swift', 'Liderança Técnica', 'Ruby on Rails'],
      contents: `
Trabalhei atuando como líder técnico e como desenvolvedor iOS. O principal aplicativo que trabalhei foi o Unifor Mobile, uma versão mobile da plataforma da universidade para alunos, professores e funcionários. Dentre as funcionalidades, se destacada a matrícula do aluno, a frequência realizada pelo professor e o mapa do campus com todos os pontos de referência da universidade. Outra atividade de destaque era a formação de estagiários para o mercado de trabalho por meio de treinamentos e acompanhamentos diários. Também auxiliei na criação de outros aplicativos, como RadioNIC, um podcast feito pelos alunos da própria universidade.`
    },
    {
      company: 'Universidade de Fortaleza',
      location: 'Fortaleza - CE',
      title: 'Estagiário - iOS Developer',
      period: 'Julho de 2017 - Março de 2018',
      skills: ['iOS', 'Swift', 'UX'],
      contents: `
Fui estagiário de desenvolvimento iOS e trabalhei na reconstrução do aplicativo da Universidade. Tive experiência com diversas áreas como desenvolvimento iOS, desenvolvimento Android, desenvolvimento com Ruby on Rails e UX.`
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
* Activities: Object Orientations Monitor in 2016; Microprocessors Monitor in 2017; Researcher in security area of network sensors area.`
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
      contents: 'This project under development creates an application witch use SwitUI, Clean Arch, coordinator and SPM modules.',
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
