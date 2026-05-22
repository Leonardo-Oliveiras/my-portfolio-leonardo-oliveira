import type { ProjectItem } from '@/types/project';

export const es = {
nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      name: 'Leonardo Oliveira',
      title: 'Ingeniero de Experiencias Digitales',
      subtitle: 'Construyendo experiencias digitales modernas que combinan ingeniería, accesibilidad, rendimiento y diseño centrado en el humano.',
      description: 'Creo experiencias digitales escalables, accesibles y de alto rendimiento con UX excepcional. Combinando ingeniería de nivel enterprise con flujos de trabajo asistidos por IA y profunda comprensión de las necesidades del usuario.',
      stats: {
        experience: '5+ Años de Experiencia',
        countries: '3+ Países',
        languages: '3+ Idiomas',
      },
      cta: {
        projects: 'Ver Proyectos',
        contact: 'Contáctame',
        resume: 'Descargar CV',
      },
    },
    techCarousel: {
      title: 'Tecnologías y Plataformas',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Un poco sobre quién soy',
      intro: 'Soy un Ingeniero de Experiencias Digitales viviendo en Brasil, apasionado por crear experiencias digitales que realmente importan.',
      passion: 'Mi trabajo está en la intersección de ingeniería, diseño y experiencia de usuario. Creo que la tecnología debe ser invisible - lo que los usuarios deben notar es la facilidad con que logran sus objetivos.',
      journey: 'He tenido el privilegio de trabajar con empresas multinacionales y startups por igual, siempre trayendo el mismo compromiso con la calidad, accesibilidad y rendimiento.',
      languages: {
        title: 'Idiomas',
        subtitle: 'Conectando a través de la comunicación',
        native: 'Portugués',
        nativeLevel: 'Nativo',
        english: 'Inglés',
        englishLevel: 'Fluido',
        spanish: 'Español',
        spanishLevel: 'Fluido',
        norwegian: 'Noruego',
        norwegianLevel: 'Aprendiendo',
      },
      interests: {
        title: 'Más Allá del Código',
        music: 'Entusiasta del R&B y música de los 80',
        gaming: 'Fan de The Talos Principle',
        cats: 'Orgulloso dueño de 6 gatos',
        catsSubtitle: 'Mis compañeros de código favoritos',
        travel: 'Visité 3 países, muchos más por explorar',
      },
    },
    howIWork: {
      title: 'Cómo Trabajo',
      subtitle: 'Mi enfoque para construir experiencias digitales',
      principles: [
        {
          title: 'Ingeniería Orientada a UX',
          description: 'Cada línea de código sirve a la experiencia del usuario. Hago el puente entre la intención del diseño y la implementación técnica.',
        },
        {
          title: 'Accesibilidad Primero',
          description: 'El diseño inclusivo no es una reflexión tardía. Construyo con directrices WCAG desde el primer día.',
        },
        {
          title: 'Obsesionado con el Rendimiento',
          description: 'Tiempos de carga menores a 3 segundos, scores Lighthouse 95+ e interacciones suaves son mi base.',
        },
        {
          title: 'Espíritu Colaborativo',
          description: 'Prospero en equipos multifuncionales, comunicándome claramente con diseñadores, stakeholders e ingenieros.',
        },
      ],
    },
    experience: {
      title: 'Experiencia y Expertise',
      subtitle: 'Construyendo productos digitales a escala',
      description: 'De multinacionales como everis/NTT DATA a startups ágiles como Contabilizei, pasando por consultoría en Compass.uol (con proyectos para clientes como Vivo) y retail enterprise en Meijer, me adapto a cualquier entorno manteniendo altos estándares de calidad.',
      roles: [
        {
          period: '2020 - Presente',
          title: 'Ingeniero Frontend Senior',
          company: 'NTT DATA / Consultoría Enterprise',
          companies: ['NTT DATA', 'Compass.uol', 'Contabilizei', 'Meijer'],
          description: 'Construyendo aplicaciones enterprise escalables, plataformas de ecommerce y experiencias digitales para multinacionales. En Compass.uol, contribuí en proyectos para Vivo como cliente, dentro de un equipo de consultoría distribuido.',
          highlights: [
            'Aplicaciones a escala enterprise sirviendo millones de usuarios',
            'Proyecto para Vivo entregado durante la etapa en Compass.uol',
            'Colaboración multinacional en equipos distribuidos',
            'Agilidad de startup en Contabilizei con estándares enterprise',
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AEM'],
        },
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Trabajos seleccionados mostrando mi expertise',
      viewProject: 'Ver Proyecto',
      items: [
        {
          title: 'Meijer Shoppable Ad Experience',
          description: 'Experiencia de ecommerce enterprise migrada de terceros a plataforma interna. Enfoque en optimización de rendimiento, lazy loading y validación de accesibilidad.',
          technologies: ['React', 'React Query', 'TypeScript', 'GraphQL', 'AEM', 'Java'],
          type: 'Enterprise',
          link: 'https://www.meijer.com/',
          image: '/images/project-meijer.webp',
          accent: 'blue',
        },
        {
          title: 'Dream Assessoria',
          description: 'Sitio de planificación de bodas de lujo diseñado y desarrollado desde cero. Enfocado en UX con scores Lighthouse casi perfectos.',
          technologies: ['React', 'Next.js', 'Tailwind CSS'],
          type: 'Diseño y Desarrollo',
          link: 'https://www.dreamassessoria.com/',
          image: '/images/project-dream.webp',
          accent: 'rose',
        },
        {
          title: 'Daphne & Leonardo Story',
          description: 'Plataforma de boda multilingüe para invitados internacionales con guías de viaje, integraciones de regalos y altos scores de accesibilidad.',
          technologies: ['React', 'Next.js', 'i18n', 'Tailwind CSS'],
          type: 'Plataforma Multilingüe',
          link: 'https://www.daphneleonardostory.com/',
          image: '/images/project-wedding.webp',
          accent: 'amber',
        },
      ] satisfies ProjectItem[],
    },
    quality: {
      title: 'Filosofía de Calidad',
      subtitle: 'Excelencia en ingeniería como estándar',
      metrics: [
        { value: '95+', label: 'Score Lighthouse', description: 'Rendimiento consistente en todos los proyectos' },
        { value: '<3s', label: 'Tiempo de Carga', description: 'Optimizado para audiencias globales' },
        { value: 'WCAG', label: 'Accesibilidad', description: 'Implementaciones AA compliant' },
        { value: '100%', label: 'Mobile First', description: 'Responsivo desde el inicio' },
      ],
    },
    ai: {
      title: 'IA e Innovación',
      subtitle: 'Abrazando el futuro del desarrollo',
      description: 'Utilizo herramientas de IA diariamente para mejorar mi flujo de desarrollo. Desde código inteligente hasta revisión cuidadosa, estas herramientas me ayudan a entregar trabajo de mayor calidad más rápido.',
      tools: ['Anthropic Claude', 'GitHub Copilot'],
      benefits: {
        title: 'Integración Diaria de IA',
        items: [
          { title: 'Desarrollo Acelerado', description: 'Prototipado e implementación más rápidos con coding asistido por IA' },
          { title: 'Code Review Mejorado', description: 'Análisis completo y sugerencias para código más limpio y seguro' },
          { title: 'Testing Mejorado', description: 'Generación completa de tests e identificación de casos extremos' },
          { title: 'Productividad Optimizada', description: 'Workflows simplificados y carga cognitiva reducida' },
        ],
      },
    },
    contact: {
      title: 'Conectemos',
      subtitle: '¿Listo para construir algo excepcional juntos?',
      description: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades de ser parte de tu visión.',
      links: {
        linkedin: 'LinkedIn',
        linkedinUrl: 'linkedin.com/in/leonardo-oliveiras010',
        github: 'GitHub',
        githubUrl: 'github.com/Leonardo-Oliveiras',
        email: 'Email',
        emailAddress: 'leonardooliveirass@outlook.com',
        whatsapp: 'Chatear por WhatsApp',
        resume: 'Descargar CV',
      },
    },
    footer: {
      copyright: '© 2026 Leonardo Oliveira. Hecho con cariño.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
      },
    },
};
