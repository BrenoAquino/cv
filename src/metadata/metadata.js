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
    ['SwiftUI', '+++++'],
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
* Sou responsável pelo fluxo de notificações do aplicativo, como tratar os push notifications, deeplinks e a listagem de todas as notificação para o usuário.
* Mentoro um Junio da equipe para ajuda-lo a entender mais da tecnologia e avançar no nivel tecnico dentro da empresa.
`
    },
    {
      company: 'Meta',
      location: 'Remote',
      title: 'Senior iOS Developer',
      period: 'December 2020 - February 2022 (part time)',
      skills: ['iOS', 'Swift', 'WebSocket', 'SDK', 'CI/CD', 'Github Actions', 'Scrum', 'Cocoapods'],
      contents: `
* Fui responsável por definir a estrutura do projeto para o clinete Maple Leaf Sports & Entertainment (MLSE), definir APIs necessárias, mensagens a serem usadas pelo WebSocket e prioridades de features.
* Creiei uma SDK White Label seguindo Clean Architecture e MVVM para fornecer features como live stream e vod stream, grupo de chats, estatisticas em tempo real e outras funcionalidades. A SDK poderia ser inserida em outros apps e seguiria o tema definido pelo aplicativo.
* Criei scripts para realizar o build da SDK e distribuir usnado cocoapods o framework compilado em outro repositório para poder não tornar o código publico.
* O projeto foi seguiu Agile e Scrum e com grande parte das reuniões em inglês.
`
    },
    {
      company: 'Claro Brasil',
      location: 'São Paulo - SP, Brazil',
      title: 'Senior iOS Developer',
      period: 'March 2019 - March 2022',
      skills: ['iOS', 'Swift', 'Swift Package Manager', 'CI/CD', 'Fastlane', 'Bitrise', 'SAFe'],
      contents: `
* Trabalhei em dois diferentes projetos de stream com conteúdos VOD e live.
* O primeiro projeto fui um dos responsávies por definir a arquitetura e desenhar a solução como um todo, pois o projeto estava sendo contruido do começo.
* Implementei um feature de listagem de programas e canais, para otimizar o tempo de rederização e reduzir o custo de CPU para exibir a tela para o usuário, criei um sistema de cache para otimizar os calculos e implementei algoritmos com Binary Search para melhorar a eficiencia de encontrar o programa atual.
* O segundo projeto, com cerca de 300.000 usuarios ativos mensalmente, fui responsável por melhorar a qualidade de código, modificando a arquitetura para seguir o Clean Architecture e MVVM.
* Apliquei o conceito de injeção de dependência para melhorar a cobertura de testes.
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'iOS Developer',
      period: 'March 2018 - March 2019',
      skills: ['iOS', 'Swift', 'Tech Lead', 'Ruby on Rails'],
      contents: `
* Trabalhei como Tech Lead especialista em iOS.
* Era responsavél pelo aplicativo da universidade, que possuia cerca de 24.000 usuários ativos por mês.
* Ministrei cursos de iOS para estagiários.
* Fui responsavel por ensinar sobre a tecnologia, mas também sobre como definir contratos de APIs, como definir prioridades e sobre processos e ferramentas utilizadas em um projeto real (como git e scrum).
`
    },
    {
      company: 'University of Fortaleza - UNIFOR',
      location: 'Fortaleza - CE, Brazil',
      title: 'Intern - iOS Developer',
      period: 'July 2017 - March 2018',
      skills: ['iOS', 'Swift'],
      contents: `
* Aprofundei meus conhecimentos em iOS trabalhando no aplicativo principal da universidade, descando features como chat, mapa para guiar os usuário pela universidade e frequecia de aula dos professores.
* Foi realizada a refatoração do aplicativo utilizando MVVM.
* Após 9 meses fui contratado para assumir a responsabilidade de um time de cerca de 10 estagiários.
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
