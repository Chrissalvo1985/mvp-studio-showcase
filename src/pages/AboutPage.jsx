import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, Target, Users, Lightbulb, ArrowRight, 
  Brain, Code, Rocket, Shield, Clock, Trophy 
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Propósito real',
      description: 'Cada solución que creamos debe resolver un problema concreto y generar valor inmediato.'
    },
    {
      icon: Brain,
      title: 'IA como herramienta',
      description: 'Usamos inteligencia artificial para potenciar la creatividad humana, no para reemplazarla.'
    },
    {
      icon: Rocket,
      title: 'Velocidad de ejecución',
      description: 'Del concepto a la implementación en semanas, no meses. Agilidad sin sacrificar calidad.'
    },
    {
      icon: Shield,
      title: 'Transparencia total',
      description: 'Sin marketing inflado. Mostrar qué funciona, cómo funciona y por qué lo hicimos.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Identificar problema',
      description: 'Detectamos necesidades reales del mercado o desafíos específicos de nuestros clientes.'
    },
    {
      step: '02',
      title: 'Prototipo inteligente',
      description: 'Combinamos experiencia humana con IA para crear soluciones innovadoras y eficientes.'
    },
    {
      step: '03',
      title: 'Validar en producción',
      description: 'Probamos cada app en escenarios reales hasta que funciona perfectamente.'
    },
    {
      step: '04',
      title: 'Escalar y optimizar',
      description: 'Una vez validada, la optimizamos y la hacemos disponible para más usuarios.'
    }
  ]

  const stats = [
    { icon: Code, value: '50+', label: 'Proyectos completados' },
    { icon: Users, value: '200+', label: 'Clientes satisfechos' },
    { icon: Clock, value: '85%', label: 'Reducción de tiempo' },
    { icon: Trophy, value: '95%', label: 'Tasa de éxito' }
  ]

  const team = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Fundador',
      bio: 'Ingeniero de software con 10 años creando soluciones que escalan. Especialista en IA aplicada.',
      initial: 'AR'
    },
    {
      name: 'Sofia Chen',
      role: 'CTO',
      bio: 'Arquitecta de sistemas y experta en machine learning. Anteriormente en Google y Microsoft.',
      initial: 'SC'
    },
    {
      name: 'Diego Morales',
      role: 'Head of Design',
      bio: 'Diseñador UX/UI con enfoque en productos B2B. Obsesionado con la simplicidad funcional.',
      initial: 'DM'
    },
    {
      name: 'Elena Vasquez',
      role: 'Product Manager',
      bio: 'Estratega de producto con experiencia en startups de alto crecimiento. MBA por Wharton.',
      initial: 'EV'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Qué hacemos, cómo trabajamos <br />
              <span className="text-gradient">con IA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Somos un estudio boutique que crea soluciones tecnológicas reales. 
              No prototipos que se quedan en el cajón, sino aplicaciones que ya están 
              funcionando y generando valor.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Fundado en 2023 • Basado en Latinoamérica</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra misión
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 md:p-12 text-center"
          >
            <Lightbulb className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Convertir ideas en soluciones que ya funcionan
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Estamos cansados de ver "demos" y "prototipos" que nunca llegan a producción. 
              Por eso, cada aplicación que creamos ya está lista para usar, generar valor 
              y adaptarse a las necesidades específicas de cada cliente. Combinamos la 
              agilidad de una startup con la experiencia de un equipo senior.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada línea de código que escribimos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro proceso combina metodología ágil con IA para acelerar el desarrollo 
              sin comprometer la calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="card p-6 h-full">
                  <div className="text-4xl font-bold text-primary-200 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestro impacto
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Los números que respaldan nuestro enfoque y demuestran que funciona.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              El equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales senior con experiencia en startups de alto crecimiento 
              y empresas tecnológicas líderes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ya sea que tengas una idea específica o necesites ayuda para identificar 
              oportunidades, estamos aquí para convertir conceptos en soluciones reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apps"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Ver nuestras apps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Trabajemos juntos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 