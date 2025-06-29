import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, Calculator, CheckCircle, Send, 
  Package, Code, Settings, Sparkles, ArrowLeft 
} from 'lucide-react'
import { apps } from '../data/apps'

const QuotePage = () => {
  const { appId } = useParams()
  const app = appId ? apps.find(a => a.id === appId) : null
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: app ? 'license' : '',
    urgency: 'normal',
    customizations: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    { 
      id: 'license', 
      name: 'Licencia de uso', 
      description: 'Uso inmediato con soporte',
      icon: Package 
    },
    { 
      id: 'source', 
      name: 'Código fuente', 
      description: 'Personalización completa',
      icon: Code 
    },
    { 
      id: 'service', 
      name: 'Como servicio', 
      description: 'Implementación gestionada',
      icon: Settings 
    },
    { 
      id: 'custom', 
      name: 'Desarrollo personalizado', 
      description: 'Solución a medida',
      icon: Sparkles 
    }
  ]

  const urgencyOptions = [
    { id: 'normal', name: 'Normal (2-3 semanas)', multiplier: '1x' },
    { id: 'urgent', name: 'Urgente (1 semana)', multiplier: '1.5x' },
    { id: 'express', name: 'Express (3-5 días)', multiplier: '2x' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote request:', formData)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ 
        name: '', email: '', company: '', phone: '',
        service: app ? 'license' : '', urgency: 'normal',
        customizations: '', budget: '', message: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card p-12 text-center max-w-md mx-4"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Cotización solicitada!
          </h2>
          <p className="text-gray-600 mb-6">
            Hemos recibido tu solicitud de cotización. Te enviaremos una propuesta detallada en menos de 24 horas.
          </p>
          <Link to={app ? `/apps/${app.id}` : '/apps'} className="btn-primary">
            {app ? 'Volver a la app' : 'Ver más apps'}
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {app && (
            <Link 
              to={`/apps/${app.id}`}
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a {app.name}</span>
            </Link>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calculator className="w-8 h-8 text-primary-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Solicitar <span className="text-gradient">cotización</span>
              </h1>
            </div>
            {app ? (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Obtén una cotización personalizada para <strong>{app.name}</strong>. 
                Elige la modalidad que mejor se adapte a tus necesidades.
              </p>
            ) : (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada 
                con opciones personalizadas para tu empresa.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <ShoppingCart className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalles de la cotización
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Tipo de servicio *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                      <label key={service.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all ${
                          formData.service === service.id 
                            ? 'border-primary-500 bg-primary-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="flex items-start space-x-3">
                            <service.icon className={`w-5 h-5 mt-0.5 ${
                              formData.service === service.id ? 'text-primary-600' : 'text-gray-400'
                            }`} />
                            <div>
                              <p className="font-medium text-gray-900">{service.name}</p>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Urgencia del proyecto *
                  </label>
                  <div className="space-y-3">
                    {urgencyOptions.map((option) => (
                      <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.id}
                          checked={formData.urgency === option.id}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-900">{option.name}</span>
                        <span className="text-sm text-primary-600 font-medium">({option.multiplier})</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto estimado (USD)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-15000">$5,000 - $15,000</option>
                    <option value="15000-50000">$15,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                    <option value="discuss">Prefiero discutirlo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personalizaciones requeridas
                  </label>
                  <textarea
                    name="customizations"
                    rows={4}
                    value={formData.customizations}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe las modificaciones, integraciones o funcionalidades adicionales que necesitas..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Información adicional
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Cuéntanos más sobre tu proyecto, cronograma, equipo técnico..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar cotización</span>
                </button>
              </form>
            </motion.div>
          </div>

          <div className="space-y-6">
            {app && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{app.shortDescription}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Licencia:</span>
                    <span className="font-medium text-blue-600">{app.pricing.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Código fuente:</span>
                    <span className="font-medium text-green-600">{app.pricing.source}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Como servicio:</span>
                    <span className="font-medium text-purple-600">{app.pricing.service}</span>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 bg-primary-50 border-primary-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Proceso de cotización
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                  <span>Recibimos tu solicitud</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
                  <span>Análisis técnico (6-12h)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
                  <span>Cotización detallada (24h)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
                  <span>Llamada de ajustes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">5</span>
                  <span>Propuesta final</span>
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Para proyectos urgentes o complejos, agenda una llamada directa con nuestro equipo.
              </p>
              <Link to="/contact" className="w-full btn-secondary text-center">
                Contactar ahora
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotePage 