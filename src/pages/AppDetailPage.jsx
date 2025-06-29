import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, ExternalLink, Play, ShoppingCart, CheckCircle, 
  DollarSign, Sparkles, Quote, Star, MessageCircle 
} from 'lucide-react'
import clsx from 'clsx'
import { apps } from '../data/apps'

const AppDetailPage = () => {
  const { id } = useParams()
  const app = apps.find(a => a.id === id)

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Aplicación no encontrada</h1>
          <Link to="/apps" className="btn-primary">
            Volver al marketplace
          </Link>
        </div>
      </div>
    )
  }

  const getTechBadgeClass = (tech) => {
    const techClasses = {
      'AI': 'badge-ai',
      'Automation': 'badge-automation',
      'Analytics': 'badge-data',
      'UX': 'badge-ux',
      'Frontend': 'badge-ux',
      'Data Science': 'badge-data',
      'NLP': 'badge-ai',
      'Predictive Analytics': 'badge-data',
      'IoT': 'badge-automation'
    }
    return techClasses[tech] || 'badge-ai'
  }

  const getMaturityBadgeClass = (level) => {
    const maturityClasses = {
      'MVP': 'badge-mvp',
      'Beta': 'badge-beta',
      'Ready to Deploy': 'badge-ready'
    }
    return maturityClasses[level] || 'badge-mvp'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/apps" 
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al marketplace</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {app.name}
                  </h1>
                  {app.createdWithAI && (
                    <Sparkles className="w-6 h-6 text-purple-500" title="Creado con IA" />
                  )}
                </div>
                <p className="text-xl text-primary-600 font-medium mb-4">{app.tagline}</p>
                <p className="text-lg text-gray-600 mb-6">{app.longDescription}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={clsx('badge', getTechBadgeClass(tech))}
                    >
                      {tech}
                    </span>
                  ))}
                  <span className={clsx('badge', getMaturityBadgeClass(app.maturityLevel))}>
                    {app.maturityLevel}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="md:ml-8 md:w-80">
                <div className="card p-6">
                  <div className="space-y-4">
                    <a
                      href={app.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Probar demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link
                      to={`/quote/${app.id}`}
                      className="w-full btn-secondary flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Cotizar compra</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Demo */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Demo en video</h2>
              <div className="card p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-primary-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  Video demo disponible en la versión en vivo
                </p>
                <a
                  href={app.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Ver demo completo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características clave</h2>
              <div className="card p-6">
                <ul className="space-y-4">
                  {app.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.benefits.map((benefit, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* AI Creation */}
            {app.createdWithAI && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  <span>Creado con IA</span>
                </h2>
                <div className="card p-6 bg-purple-50 border-purple-200">
                  <p className="text-gray-700">{app.createdWithAI}</p>
                </div>
              </motion.section>
            )}

            {/* Testimonials */}
            {app.testimonials && app.testimonials.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonios</h2>
                <div className="space-y-6">
                  {app.testimonials.map((testimonial, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-start space-x-4">
                        <Quote className="w-8 h-8 text-primary-400 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                              <span className="text-primary-600 font-semibold text-sm">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{testimonial.name}</p>
                              <p className="text-sm text-gray-500">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Modalidades de adquisición</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-semibold text-gray-900">Licencia</p>
                  <p className="text-2xl font-bold text-blue-600">{app.pricing.license}</p>
                  <p className="text-sm text-gray-600">Uso inmediato con soporte</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-gray-900">Código fuente</p>
                  <p className="text-2xl font-bold text-green-600">{app.pricing.source}</p>
                  <p className="text-sm text-gray-600">Personalización completa</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <p className="font-semibold text-gray-900">Como servicio</p>
                  <p className="text-2xl font-bold text-purple-600">{app.pricing.service}</p>
                  <p className="text-sm text-gray-600">Implementación gestionada</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>FAQ</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-2">¿Se puede personalizar?</p>
                  <p className="text-sm text-gray-600">Sí, especialmente con la opción de código fuente completo.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">¿Qué incluye la compra?</p>
                  <p className="text-sm text-gray-600">Instalación, configuración inicial y 3 meses de soporte técnico.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">¿Tiempo de implementación?</p>
                  <p className="text-sm text-gray-600">Entre 1-2 semanas dependiendo de la complejidad de integración.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 bg-primary-50 border-primary-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Tienes preguntas?</h3>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está listo para ayudarte a encontrar la mejor solución.
              </p>
              <Link to="/contact" className="w-full btn-primary">
                Contactar ahora
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDetailPage 