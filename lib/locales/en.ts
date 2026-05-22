import type { ProjectItem } from '@/types/project';

export const en = {
nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Leonardo Oliveira',
      title: 'Digital Experience Engineer',
      subtitle: 'Building modern digital experiences that combine engineering, accessibility, performance, and human-centered design.',
      description: 'I craft scalable, accessible, and high-performance digital experiences with exceptional UX. Combining enterprise-level engineering with AI-assisted workflows and a deep understanding of user needs.',
      stats: {
        experience: '5+ Years Experience',
        countries: '3+ Countries',
        languages: '3+ Languages',
      },
      cta: {
        projects: 'View Projects',
        contact: 'Contact Me',
        resume: 'Download Resume',
      },
    },
    techCarousel: {
      title: 'Technologies & Platforms',
    },
    about: {
      title: 'About Me',
      subtitle: 'A bit about who I am',
      intro: "I'm a Digital Experience Engineer living in Brazil, passionate about creating digital experiences that truly matter.",
      passion: "My work sits at the intersection of engineering, design, and user experience. I believe technology should feel invisible - what users should notice is how effortlessly they accomplish their goals.",
      journey: "I've had the privilege of working with multinational companies and startups alike, always bringing the same commitment to quality, accessibility, and performance.",
      languages: {
        title: 'Languages',
        subtitle: 'Connecting through communication',
        native: 'Portuguese',
        nativeLevel: 'Native',
        english: 'English',
        englishLevel: 'Fluent',
        spanish: 'Spanish',
        spanishLevel: 'Fluent',
        norwegian: 'Norwegian',
        norwegianLevel: 'Learning',
      },
      interests: {
        title: 'Beyond Code',
        music: 'R&B and 80s music enthusiast',
        gaming: 'The Talos Principle fan',
        cats: 'Proud owner of 6 cats',
        catsSubtitle: 'My favorite coding companions',
        travel: 'Visited 3 countries, many more to explore',
      },
    },
    howIWork: {
      title: 'How I Work',
      subtitle: 'My approach to building digital experiences',
      principles: [
        {
          title: 'UX-Oriented Engineering',
          description: 'Every line of code serves the user experience. I bridge the gap between design intent and technical implementation.',
        },
        {
          title: 'Accessibility First',
          description: 'Inclusive design is not an afterthought. I build with WCAG guidelines from day one, ensuring everyone can use what I create.',
        },
        {
          title: 'Performance Obsessed',
          description: 'Sub-3-second load times, 95+ Lighthouse scores, and smooth interactions are my baseline, not my stretch goal.',
        },
        {
          title: 'Collaborative Spirit',
          description: 'I thrive in cross-functional teams, communicating clearly with designers, stakeholders, and fellow engineers.',
        },
      ],
    },
    experience: {
      title: 'Experience & Expertise',
      subtitle: 'Building digital products at scale',
      description: 'From multinational companies such as NTT DATA to fast-paced startups like Contabilizei, consulting engagements at Compass.uol (including client projects for Vivo), and enterprise retail work for Meijer, I adapt easily to different environments while consistently delivering scalable, high-quality digital solutions focused on performance, accessibility, and user experience.',
      roles: [
        {
          period: '2020 - Present',
          title: 'Senior Frontend Engineer',
          company: 'Engineering & Consulting',
          companies: ['NTT DATA', 'Compass.uol', 'Contabilizei', 'Meijer'],
          description: 'Building scalable enterprise applications, e-commerce platforms, and modern digital experiences for multinational companies and high-traffic environments. At Compass.uol, contributed to client-facing projects for Vivo while working within a distributed consulting team.',
          highlights: [
            'Enterprise platforms designed for large-scale user experiences',
            'Vivo client project delivered while employed at Compass.uol',
            'International collaboration with distributed teams across multiple time zones',
            'Startup mindset combined with enterprise-level engineering standards',
            'Strong focus on UX, scalability, accessibility, and maintainable architecture',
            'Experience mentoring developers and contributing to code quality practices',
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AEM'],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Selected work showcasing my expertise',
      viewProject: 'View Project',
      items: [
        {
          title: 'Meijer Shoppable Ad Experience',
          description: 'Enterprise ecommerce experience migrated from third-party to internal platform. Focused on performance optimization, lazy loading, and accessibility validation.',
          technologies: ['React', 'React Query', 'TypeScript', 'GraphQL', 'AEM', 'Java'],
          type: 'Enterprise',
          link: 'https://www.meijer.com/',
          image: '/images/project-meijer.webp',
          accent: 'blue',
        },
        {
          title: 'Dream Assessoria',
          description: 'Luxury wedding planner website designed and developed from scratch. UX-focused with near-perfect Lighthouse scores and elegant conversion-focused experience.',
          technologies: ['React', 'Next.js', 'Tailwind CSS'],
          type: 'Design & Development',
          link: 'https://www.dreamassessoria.com/',
          image: '/images/project-dream.webp',
          accent: 'rose',
        },
        {
          title: 'Daphne & Leonardo Story',
          description: 'Multilingual wedding platform for international guests featuring travel guides, gift integrations, and high accessibility scores.',
          technologies: ['React', 'Next.js', 'i18n', 'Tailwind CSS'],
          type: 'Multilingual Platform',
          link: 'https://www.daphneleonardostory.com/',
          image: '/images/project-wedding.webp',
          accent: 'amber',
        },
      ] satisfies ProjectItem[],
    },
    quality: {
      title: 'Quality Philosophy',
      subtitle: 'Engineering excellence as a standard',
      metrics: [
        { value: '95+', label: 'Lighthouse Score', description: 'Consistent performance across all projects' },
        { value: '<3s', label: 'Load Time', description: 'Optimized for global audiences' },
        { value: 'WCAG', label: 'Accessibility', description: 'AA compliant implementations' },
        { value: '100%', label: 'Mobile First', description: 'Responsive from the start' },
      ],
    },
    ai: {
      title: 'AI & Innovation',
      subtitle: 'Embracing the future of development',
      description: "I leverage AI tools daily to enhance my development workflow. From intelligent code completion to thoughtful code review, these tools help me deliver higher quality work faster.",
      tools: ['Anthropic Claude', 'GitHub Copilot'],
      benefits: {
        title: 'Daily AI Integration',
        items: [
          { title: 'Accelerated Development', description: 'Faster prototyping and implementation with AI-assisted coding' },
          { title: 'Enhanced Code Review', description: 'Thorough analysis and suggestions for cleaner, safer code' },
          { title: 'Improved Testing', description: 'Comprehensive test generation and edge case identification' },
          { title: 'Optimized Productivity', description: 'Streamlined workflows and reduced cognitive load' },
        ],
      },
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Ready to build something exceptional together?",
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      links: {
        linkedin: 'LinkedIn',
        linkedinUrl: 'linkedin.com/in/leonardo-oliveiras010',
        github: 'GitHub',
        githubUrl: 'github.com/Leonardo-Oliveiras',
        email: 'Email',
        emailAddress: 'leonardooliveirass@outlook.com',
        whatsapp: 'Chat on WhatsApp',
        resume: 'Download Resume',
      },
    },
    footer: {
      copyright: '© 2026 Leonardo Oliveira. Crafted with care.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
      },
    },
};
