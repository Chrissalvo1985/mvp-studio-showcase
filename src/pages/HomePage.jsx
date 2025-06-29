import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Rocket, CheckCircle } from 'lucide-react'
import AppCard from '../components/AppCard'
import { apps } from '../data/apps'

const HomePage = () => {
  const featuredApps = apps.filter(app => app.maturityLevel === 'Ready to Deploy').slice(0, 3)

  const features = [
    {
      icon: Target,
      title: 'Soluciones con propósito',
      description: 'Cada app resuelve problemas reales y concretos del mundo empresarial.'
    },
    {
      icon: Zap,
      title: 'Potenciado por IA',
      description: 'Utilizamos inteligencia artificial para crear soluciones más inteligentes y eficientes.'
    },
    {
      icon: Rocket,
      title: 'Listo para producción',
      description: 'Nuestras apps están probadas y listas para ser implementadas inmediatamente.'
    }
  ]

  const stats = [
    { value: '50+', label: 'Soluciones creadas' },
    { value: '95%', label: 'Satisfacción del cliente' },
    { value: '2 semanas', label: 'Tiempo de implementación' },
    { value: '300%', label: 'ROI promedio' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prototipos con <span className="text-gradient">propósito</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Soluciones que ya están listas para el mundo real. 
              Explora nuestro marketplace de aplicaciones innovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apps"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Explorar Apps</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quote"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Cotizar solución personalizada
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir MVP Studio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No creamos prototipos que se quedan en el cajón. Desarrollamos soluciones 
              que ya están funcionando y generando valor real.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apps destacadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones listas para producción que ya están generando valor para nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApps.map((app, index) => (
              <AppCard key={app.id} app={app} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/apps"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Ver todas las apps</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Tienes una idea? Hagámosla realidad
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Trabajamos contigo para crear soluciones personalizadas que resuelvan 
              los desafíos específicos de tu empresa.
            </p>
            <Link
              to="/quote"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Cotizar mi proyecto</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 