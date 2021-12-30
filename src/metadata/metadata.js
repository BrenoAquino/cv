module.exports = {
  name: 'Breno Aquino',
  title: 'iOS Developer',
  facts: {
    'GitHub': '<a href="https://github.com/BrenoAquino">BrenoAquino</a>',
    'LinkedIn': '<a href="www.linkedin.com/in/breno-aquino">BrenoAquino</a>',
    'Email': '<a href="mailto:brenoaquino7phr@gmail.com">brenoaquino7phr@gmail.com</a>'
  },
  overview: 'Sou uma pessoa que sempre busca inovação e principalmente automações de processos. Tenho experiência com projetos nas áreas de educação e streaming. Trabalho com criação, evolução e melhoria de arquiteturas com o objetivo de aumentar a produtividade, performance e qualidade dos projetos.',
  // TODO: Retirar o +
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
    ['Crawling', '+++++'],
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
      skills: ['iOS', 'Swift', 'GithubActions', 'Scrum'],
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
Trabalho em projetos de streaming fornecendo para o cliente conteúdos VOD e Live. Os projetos seguem a metodologia agil utilizando SAFe. O principal projeto é o Now Online, possuindo mais de XXX.XXX usuários, com o foco em melhorar a qualidade do produto e prover uma melhor experiência para o usuário, juntamente com a melhoria da arquitetura do projeto.
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
      company: 'Universidade de Fortaleza',
      level: 'Graduação',
      course: 'Engenharia de Computação',
      period: '2015 - 2019',
      contents: `
* Trabalho de Conclusão de Curso: Pesquisa utilizando Redes Neurais Recorrentes para predição de tendências em séries de criptomoedas.
* Atividades: Monitor da disciplina de Programação orientada a objetos em 2016; monitor da disciplina de microprocessadores em 2017; bolsista de iniciação científica na área de segurança em redes de sensores.`
    }
  ],
  personal_projects: [
    {
      title: 'iOS Movies',
      skills: ['iOS', 'Swift', 'Design System', 'MVVM', 'View Code'],
      contents: 'Aplicativo integrado com o TheMovieDB para utilizar como POC e aprender novas tecnologias.',
    },
    {
      title: 'Home Security System',
      skills: ['Computer Vision', 'Python', 'Flask', 'WebSocket', 'MongoDB', 'Raspberry Pi'],
      contents: 'Sistema para detecção de pessoas e objetos utilizando câmeras IP.'
    },
    {
      title: 'Canal Eletrônico do Investidor B3 - Crawler',
      skills: ['NodeJS', 'Python', 'Serverless', 'AWS DynamoDB', 'AWS Lambda'],
      contents: 'Crawler para extração de dados do canal eletrônico do investidor.'
    },
    {
      title: 'Mobile Stores (App Store e Play Store) - Crawler',
      skills: ['Python', 'Serverless', 'AWS Step Functions', 'AWS Lambda', 'AWS DynamoDB'],
      contents: 'Crawler para extração de dados do App Store e Play Store.'
    }
  ]
};