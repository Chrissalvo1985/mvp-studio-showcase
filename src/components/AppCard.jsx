import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Play, ShoppingCart, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const AppCard = ({ app, delay = 0 }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {app.name}
            </h3>
            {app.createdWithAI && (
              <Sparkles className="w-4 h-4 text-purple-500" title="Creado con IA" />
            )}
          </div>
          <p className="text-sm text-primary-600 font-medium mb-2">{app.tagline}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {app.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className={clsx('badge', getTechBadgeClass(tech))}
          >
            {tech}
          </span>
        ))}
        {app.technologies.length > 3 && (
          <span className="badge bg-gray-100 text-gray-600">
            +{app.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Maturity Level */}
      <div className="mb-6">
        <span className={clsx('badge', getMaturityBadgeClass(app.maturityLevel))}>
          {app.maturityLevel}
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={app.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-primary text-center flex items-center justify-center space-x-2"
        >
          <Play className="w-4 h-4" />
          <span>Probar demo</span>
          <ExternalLink className="w-3 h-3" />
        </a>
        <Link
          to={`/apps/${app.id}`}
          className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Ver detalles</span>
        </Link>
      </div>

      {/* Category */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          {app.category}
        </span>
      </div>
    </motion.div>
  )
}

export default AppCard 