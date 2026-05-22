import type { ProjectItem } from '@/types/project';

export const pt = {
nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      name: 'Leonardo Oliveira',
      title: 'Engenheiro de Experiências Digitais',
      subtitle: 'Construindo experiências digitais modernas que combinam engenharia, acessibilidade, performance e design centrado no humano.',
      description: 'Crio experiências digitais escaláveis, acessíveis e de alta performance com UX excepcional. Combinando engenharia de nível enterprise com workflows assistidos por IA e profunda compreensão das necessidades dos usuários.',
      stats: {
        experience: '5+ Anos de Experiência',
        countries: '3+ Países',
        languages: '3+ Idiomas',
      },
      cta: {
        projects: 'Ver Projetos',
        contact: 'Entre em Contato',
        resume: 'Baixar Currículo',
      },
    },
    techCarousel: {
      title: 'Tecnologias & Plataformas',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Um pouco sobre quem sou',
      intro: 'Sou um Engenheiro de Experiências Digitais vivendo no Brasil, apaixonado por criar experiências digitais que realmente importam.',
      passion: 'Meu trabalho está na interseção de engenharia, design e experiência do usuário. Acredito que a tecnologia deve ser invisível - o que os usuários devem notar é a facilidade com que alcançam seus objetivos.',
      journey: 'Tive o privilégio de trabalhar com empresas multinacionais e startups, sempre trazendo o mesmo compromisso com qualidade, acessibilidade e performance.',
      languages: {
        title: 'Idiomas',
        subtitle: 'Conectando através da comunicação',
        native: 'Português',
        nativeLevel: 'Nativo',
        english: 'Inglês',
        englishLevel: 'Fluente',
        spanish: 'Espanhol',
        spanishLevel: 'Fluente',
        norwegian: 'Norueguês',
        norwegianLevel: 'Aprendendo',
      },
      interests: {
        title: 'Além do Código',
        music: 'Entusiasta de R&B e música dos anos 80',
        gaming: 'Fã de The Talos Principle',
        cats: 'Orgulhoso dono de 6 gatos',
        catsSubtitle: 'Meus companheiros de código favoritos',
        travel: 'Visitei 3 países, muitos mais a explorar',
      },
    },
    howIWork: {
      title: 'Como Trabalho',
      subtitle: 'Minha abordagem para construir experiências digitais',
      principles: [
        {
          title: 'Engenharia Orientada a UX',
          description: 'Cada linha de código serve a experiência do usuário. Faço a ponte entre a intenção do design e a implementação técnica.',
        },
        {
          title: 'Acessibilidade em Primeiro Lugar',
          description: 'Design inclusivo não é uma reflexão tardia. Construo com diretrizes WCAG desde o primeiro dia.',
        },
        {
          title: 'Obcecado por Performance',
          description: 'Tempos de carregamento abaixo de 3 segundos, scores Lighthouse 95+ e interações suaves são minha base.',
        },
        {
          title: 'Espírito Colaborativo',
          description: 'Prospero em equipes multifuncionais, comunicando claramente com designers, stakeholders e engenheiros.',
        },
      ],
    },
    experience: {
      title: 'Experiência & Expertise',
      subtitle: 'Construindo produtos digitais em escala',
      description: 'De multinacionais como everis/NTT DATA a startups ágeis como Contabilizei, passando por consultoria na Compass.uol (com projetos para clientes como a Vivo) e retail enterprise na Meijer, adapto-me a qualquer ambiente mantendo altos padrões de qualidade.',
      roles: [
        {
          period: '2020 - Presente',
          title: 'Engenheiro Frontend Sênior',
          company: 'NTT DATA / Consultoria Enterprise',
          companies: ['NTT DATA', 'Compass.uol', 'Contabilizei', 'Meijer'],
          description: 'Construindo aplicações enterprise escaláveis, plataformas de ecommerce e experiências digitais para multinacionais. Na Compass.uol, atuei em projetos para a Vivo como cliente, dentro de uma equipe de consultoria distribuída.',
          highlights: [
            'Aplicações em escala enterprise servindo milhões de usuários',
            'Projeto para a Vivo entregue durante passagem pela Compass.uol',
            'Colaboração multinacional em equipes distribuídas',
            'Agilidade de startup na Contabilizei com padrões enterprise',
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AEM'],
        },
      ],
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Trabalhos selecionados mostrando minha expertise',
      viewProject: 'Ver Projeto',
      items: [
        {
          title: 'Meijer Shoppable Ad Experience',
          description: 'Experiência de ecommerce enterprise migrada de terceiros para plataforma interna. Foco em otimização de performance, lazy loading e validação de acessibilidade.',
          technologies: ['React', 'React Query', 'TypeScript', 'GraphQL', 'AEM', 'Java'],
          type: 'Enterprise',
          link: 'https://www.meijer.com/',
          image: '/images/project-meijer.webp',
          accent: 'blue',
        },
        {
          title: 'Dream Assessoria',
          description: 'Site de assessoria de casamentos de luxo projetado e desenvolvido do zero. Focado em UX com scores Lighthouse quase perfeitos.',
          technologies: ['React', 'Next.js', 'Tailwind CSS'],
          type: 'Design & Desenvolvimento',
          link: 'https://www.dreamassessoria.com/',
          image: '/images/project-dream.webp',
          accent: 'rose',
        },
        {
          title: 'Daphne & Leonardo Story',
          description: 'Plataforma de casamento multilíngue para convidados internacionais com guias de viagem, integrações de presentes e altos scores de acessibilidade.',
          technologies: ['React', 'Next.js', 'i18n', 'Tailwind CSS'],
          type: 'Plataforma Multilíngue',
          link: 'https://www.daphneleonardostory.com/',
          image: '/images/project-wedding.webp',
          accent: 'amber',
        },
      ] satisfies ProjectItem[],
    },
    quality: {
      title: 'Filosofia de Qualidade',
      subtitle: 'Excelência em engenharia como padrão',
      metrics: [
        { value: '95+', label: 'Score Lighthouse', description: 'Performance consistente em todos os projetos' },
        { value: '<3s', label: 'Tempo de Carga', description: 'Otimizado para audiências globais' },
        { value: 'WCAG', label: 'Acessibilidade', description: 'Implementações AA compliant' },
        { value: '100%', label: 'Mobile First', description: 'Responsivo desde o início' },
      ],
    },
    ai: {
      title: 'IA & Inovação',
      subtitle: 'Abraçando o futuro do desenvolvimento',
      description: 'Utilizo ferramentas de IA diariamente para aprimorar meu fluxo de desenvolvimento. Desde código inteligente até revisão cuidadosa, essas ferramentas me ajudam a entregar trabalho de maior qualidade mais rápido.',
      tools: ['Anthropic Claude', 'GitHub Copilot'],
      benefits: {
        title: 'Integração Diária de IA',
        items: [
          { title: 'Desenvolvimento Acelerado', description: 'Prototipagem e implementação mais rápidas com coding assistido por IA' },
          { title: 'Code Review Aprimorado', description: 'Análise completa e sugestões para código mais limpo e seguro' },
          { title: 'Testes Melhorados', description: 'Geração abrangente de testes e identificação de casos extremos' },
          { title: 'Produtividade Otimizada', description: 'Workflows simplificados e carga cognitiva reduzida' },
        ],
      },
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Pronto para construir algo excepcional juntos?',
      description: 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.',
      links: {
        linkedin: 'LinkedIn',
        linkedinUrl: 'linkedin.com/in/leonardo-oliveiras010',
        github: 'GitHub',
        githubUrl: 'github.com/Leonardo-Oliveiras',
        email: 'Email',
        emailAddress: 'leonardooliveirass@outlook.com',
        whatsapp: 'Conversar no WhatsApp',
        resume: 'Baixar Currículo',
      },
    },
    footer: {
      copyright: '© 2026 Leonardo Oliveira. Feito com carinho.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
      },
    },
};
