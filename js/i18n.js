var i18n = {
  en: {
    __MSG_ABOUT__: "About",
    __MSG_PORTFOLIO__: "Portfolio",
    __MSG_EDUCATION__: "Education",
    __MSG_RESEARCH__: "Research",
    __MSG_HELLO__: "Hello, I'm Herinson!",
    __MSG_TAGLINE__: "Computer Scientist | Web Developer | Science Enthusiast",
    __MSG_MYPROJECTS__: "My Projects",
    __MSG_MYPROJECTS_HEADLINE__: "GitHub repositories that I've built.",
    __MSG_MYINTERESTS__: "My Interests",
    __MSG_MYINTERESTS_HEADLINE__: "Topics that I want to learn more about.",
    __MSG_ABOUT_DESC__: `
        <p>
          Hi! I'm Herinson!
          I've been in the tech world since I was 15 years old!
        </p>
        <p>
          From this time, I got an Associate Degree in Informatics and a
          Bachelor Degree in Computer Science.
        </p>
        <p>
          During my bachelor degree, I was involved in programming contests
          such as the ACM International Collegiate Programming Contest.
        </p>
        <p>
          Currenty, my work focus is mainly building web browser extensions using JavaScript and ReactJS.
        </p>
        <p>
          In my spare time, I love to help the open-source community in a variety of projects.
        </p>
    `,
    __MSG_MORE__: "More",
    __MSG_BLOG__: "Blog",
    __MSG_PORTFOLIO_ITEM1__: "Browser extension that automatically applies coupons code at online stores' checkout page",
    __MSG_PORTFOLIO_ITEM2__: "Series of tutorials for the RoboCup 2D Soccer Simulation",
    __MSG_PORTFOLIO_ITEM3__: "StarCraft II API template bot using SC2 Client API",
    __MSG_PORTFOLIO_ITEM4__: "Brazil's Tocantins regional programming contest website",
    __MSG_INSTITUTION__: "Institution",
    __MSG_THESIS_TITLE__: "Thesis title",
    __MSG_ADVISER__: "Adviser",
    __MSG_BRIEF__: "Brief",
    __MSG_PROGRAM__: "Program",
    __MSG_CSF__: "Science without Borders - CAPES",
    __MSG_EDUCATION_ITEM1__: "Bachelor in Computer Science — 2010-2016",
    __MSG_EDUCATION_ITEM2__: "Student Exchange Program — 2013-2014",
    __MSG_EDUCATION_ITEM3__: "Associate degree in Informatics — 2006-2009",
    __MSG_EDUCATION_ITEM2_BRIEF__: "Academic English course and one year of Bachelor in Information Technology",
    __MSG_EDUCATION_ITEM3_BRIEF__: "Associate Degree in Informatics during High School",
    __MSG_HOME__: "To top"
  },
  pt: {
    __MSG_ABOUT__: "Sobre",
    __MSG_PORTFOLIO__: "Portfólio",
    __MSG_EDUCATION__: "Formação",
    __MSG_RESEARCH__: "Pesquisa",
    __MSG_HELLO__: "Olá! Eu sou o Herinson!",
    __MSG_TAGLINE__: "Cientista da Computação | Desenvolvedor Web | Brasileiro",
    __MSG_MYPROJECTS__: "Meus Projetos",
    __MSG_MYPROJECTS_HEADLINE__: "Projetos com repositórios no GitHub.",
    __MSG_MYINTERESTS__: "Meus Interesses",
    __MSG_MYINTERESTS_HEADLINE__: "Tópicos que tenho de interesse em aperfeiçoar.",
    __MSG_ABOUT_DESC__: `
        <p>
          Olá! Meu nome é Herinson. Estou no "mundo da informática" desde os 15 anos de idade!
        </p>
        <p>
          Durante este tempo, eu fiz um Técnico em Informática e um
          Bacharelado em Ciência da Computação.
        </p>
        <p>
          Estive envolvido com maratonas de programação de competições
          promovidas pela ACM International Collegiate (ACM - ICPC).
        </p>
        <p>
          Atualmente, eu trabalho desenvolvendo extensões para navegadores utilizando JavaScript e ReactJS.
        </p>
        <p>
          No meu tempo livre, eu contribuo com projetos open-source dos mais diversos tipos.
        </p>
    `,
    __MSG_MORE__: "Saiba Mais",
    __MSG_BLOG__: "Blog",
    __MSG_PORTFOLIO_ITEM1__: "Extensão para navegador que aplica cupons automaticamente na página de pagamento de lojas online",
    __MSG_PORTFOLIO_ITEM2__: "Série de tutoriais para a categoria de simulação 2D de futebol de robôs (RoboCup Soccer Simulation)",
    __MSG_PORTFOLIO_ITEM3__: "Template para bot de StarCraft II tulizando a API SC2 Client",
    __MSG_PORTFOLIO_ITEM4__: "Site regional da Maratona de Programação do Tocantins",
    __MSG_INSTITUTION__: "Instituição",
    __MSG_THESIS_TITLE__: "Titulo",
    __MSG_ADVISER__: "Orientador",
    __MSG_BRIEF__: "Resumo",
    __MSG_PROGRAM__: "Programa",
    __MSG_CSF__: "Ciência sem Fronteiras - CAPES",
    __MSG_EDUCATION_ITEM1__: "Bacharelado em Ciência da Computação — 2010-2016",
    __MSG_EDUCATION_ITEM2__: "Intercâmbio Internacional — 2013-2014",
    __MSG_EDUCATION_ITEM3__: "Técnico em Informática — 2006-2009",
    __MSG_EDUCATION_ITEM2_BRIEF__: "Curso de inglês acadêmico e um ano de estudos no curso de Bacharelado em Tecnologia da Informação",
    __MSG_EDUCATION_ITEM3_BRIEF__: "Curso técnico em informática concomitante ao Ensino Médio",
    __MSG_HOME__: "Início"
  }
}

function translatePage (a) {
  var locale = a ? a.getAttribute('value') : localStorage.getItem('locale') || 'en'
  var elements = document.querySelectorAll('[data-i18n]')

  elements.forEach(function (elem) {
    var value = elem.getAttribute('data-i18n')

    if (value.match(/__MSG_(\w+)__/g)) {
      elem.innerHTML = i18n[locale][value]
    }
  })
  localStorage.setItem('locale', locale)

  document.querySelectorAll('div.locale > a').forEach(function (el) {
    el.style.textDecoration = 'none'
  })
  document.querySelector(`a[value=${locale}]`).style.textDecoration = 'underline'
}

translatePage()
