export const apps = [
  {
    id: 'jarvis-os',
    name: 'Jarvis OS',
    tagline: 'Sistema de productividad personal inteligente con IA',
    description: 'Plataforma completa de productividad personal que integra notas, ideas, reflexiones y analytics con asistente de IA.',
    longDescription: 'Jarvis OS es un sistema avanzado de productividad personal que combina gestión de notas, ideas y reflexiones con potentes capacidades de análisis y visualización. Incluye un asistente de IA integrado, analytics detallados con gráficos interactivos, y herramientas de organización que te ayudan a maximizar tu creatividad y productividad.',
    category: 'Productividad',
    technologies: ['AI', 'Analytics', 'Frontend'],
    maturityLevel: 'Ready to Deploy',
    demoUrl: 'https://jarvis-os-git-main-chris-projects-350fdfeb.vercel.app',
    features: [
      'Sistema de notas inteligente y organizado',
      'Gestión avanzada de ideas creativas',
      'Módulo de reflexiones personales',
      'Analytics y visualizaciones con D3 y Recharts',
      'Asistente de IA con OpenAI integrado',
      'Interfaz moderna con Chakra UI',
      'Visualizaciones interactivas con Force Graph'
    ],
    benefits: [
      'Centraliza toda tu información personal',
      'Análisis inteligente de patrones y tendencias',
      'Interfaz elegante y fácil de navegar',
      'Asistente IA para análisis y orientación',
      'Visualizaciones que revelan insights únicos'
    ],
    pricing: {
      license: '$4,999',
      source: '$19,999',
      service: 'Desde $2,999/mes'
    },
    testimonials: [
      {
        name: 'Dr. Patricia Silva',
        company: 'Innovation Labs',
        text: 'Revolutionó mi forma de organizar ideas y proyectos. Los analytics me ayudan a entender mis patrones de trabajo.'
      }
    ],
    videoUrl: '/videos/jarvis-os-demo.mp4',
    createdWithAI: 'Asistente IA conversacional con OpenAI, visualizaciones inteligentes con D3-Force, y analytics predictivos para optimización personal.'
  },
  {
    id: 'ideasparaapp',
    name: 'Ideas Para App',
    tagline: 'Plataforma web moderna para explorar y organizar ideas creativas',
    description: 'Aplicación web que combina creatividad e inteligencia artificial para explorar, organizar y desarrollar ideas innovadoras.',
    longDescription: 'Ideas Para App es una aplicación web moderna construida con las últimas tecnologías (React 19, TypeScript, Tailwind CSS 4.x) que te ayuda a explorar, organizar y desarrollar tus ideas creativas. Integra inteligencia artificial via OpenAI para análisis y orientación, incluye un sistema de diario personal, modo de liberación creativa y una comunidad para compartir inspiración.',
    category: 'Productividad',
    technologies: ['AI', 'Frontend', 'Analytics'],
    maturityLevel: 'Ready to Deploy',
    demoUrl: 'https://ideasparaapp.vercel.app',
    features: [
      'Exploración de ideas por categorías',
      'Diario personal con filtros y búsqueda',
      'ConciencIA: Asistente IA powered by OpenAI',
      'Modo liberación para expresión libre',
      'Comunidad para compartir contenido',
      'Fanzine con contenido inspiracional curado',
      'Diseño responsive optimizado'
    ],
    benefits: [
      'Organiza y estructura tus ideas creativas',
      'Obtén análisis y orientación con IA',
      'Conecta con una comunidad creativa',
      'Interfaz moderna y fácil de usar',
      'Tecnología de vanguardia (React 19, TS)'
    ],
    pricing: {
      license: '$1,999',
      source: '$7,999',
      service: 'Desde $899/mes'
    },
    testimonials: [
      {
        name: 'Elena Martínez',
        company: 'Creative Studio',
        text: 'Una herramienta increíble para organizar ideas. La integración con IA es perfecta para obtener nuevas perspectivas.'
      }
    ],
    videoUrl: '/videos/ideasparaapp-demo.mp4',
    createdWithAI: 'Integración completa con OpenAI para análisis de ideas, gestión inteligente de contenido con Zustand y tecnologías de vanguardia.'
  },
  {
    id: 'ecrcrew',
    name: 'ECR Crew',
    tagline: 'Plataforma de chatbot inteligente con múltiples agentes de IA',
    description: 'Sistema avanzado de chatbot que integra múltiples agentes de IA con autenticación completa y backend robusto.',
    longDescription: 'ECR Crew es una plataforma completa de chatbot que combina múltiples agentes de inteligencia artificial en una interfaz elegante y segura. Incluye sistema completo de autenticación con JWT, rate limiting, backend con Express, y una experiencia de usuario moderna con React. Perfecta para empresas que necesitan asistentes IA especializados.',
    category: 'AI',
    technologies: ['AI', 'Backend', 'Frontend'],
    maturityLevel: 'Ready to Deploy',
    demoUrl: 'https://ecrcrew.vercel.app',
    features: [
      'Múltiples agentes de IA especializados',
      'Sistema completo de autenticación con JWT',
      'Backend robusto con Express y rate limiting',
      'Interfaz de chat moderna y responsive',
      'Gestión de usuarios y sesiones',
      'Renderizado avanzado con React Markdown',
      'Destacado de sintaxis para código'
    ],
    benefits: [
      'Acceso a múltiples especialistas de IA',
      'Seguridad empresarial con autenticación',
      'Escalabilidad con rate limiting incorporado',
      'Experiencia de usuario fluida y moderna',
      'Backend preparado para producción'
    ],
    pricing: {
      license: '$2,499',
      source: '$9,999',
      service: 'Desde $1,299/mes'
    },
    testimonials: [
      {
        name: 'Roberto Méndez',
        company: 'AI Solutions',
        text: 'Una plataforma de chatbot increíblemente completa. Los múltiples agentes nos dan la versatilidad que necesitábamos.'
      }
    ],
    videoUrl: '/videos/ecrcrew-demo.mp4',
    createdWithAI: 'Múltiples agentes de IA con OpenAI, backend inteligente con rate limiting automático, y arquitectura escalable para chat empresarial.'
  }
];

export const categories = [
  'Todas',
  'Productividad',
  'AI'
];

export const maturityLevels = [
  'Todos',
  'Ready to Deploy'
];

export const technologies = [
  'AI',
  'Frontend',
  'Analytics',
  'Backend'
]; 