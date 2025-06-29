import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import clsx from 'clsx'
import { categories, maturityLevels, technologies } from '../data/apps'

const AppFilters = ({ filters, onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryChange = (category) => {
    onFiltersChange({
      ...filters,
      category: category === 'Todas' ? '' : category
    })
  }

  const handleMaturityChange = (maturity) => {
    onFiltersChange({
      ...filters,
      maturityLevel: maturity === 'Todos' ? '' : maturity
    })
  }

  const handleTechnologyToggle = (tech) => {
    const newTechnologies = filters.technologies.includes(tech)
      ? filters.technologies.filter(t => t !== tech)
      : [...filters.technologies, tech]
    
    onFiltersChange({
      ...filters,
      technologies: newTechnologies
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      category: '',
      maturityLevel: '',
      technologies: []
    })
  }

  const hasActiveFilters = filters.category || filters.maturityLevel || filters.technologies.length > 0

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-900">Filtros</span>
            {hasActiveFilters && (
              <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                Activos
              </span>
            )}
          </div>
          <X className={clsx('w-5 h-5 text-gray-500 transition-transform', isOpen ? 'rotate-45' : '')} />
        </button>
      </div>

      {/* Filter Content */}
      <div className={clsx('md:block', isOpen ? 'block mt-4' : 'hidden')}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Categoría</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={clsx(
                    'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                    (category === 'Todas' && !filters.category) || filters.category === category
                      ? 'bg-primary-100 text-primary-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Maturity Level */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Nivel de madurez</h3>
            <div className="space-y-2">
              {maturityLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleMaturityChange(level)}
                  className={clsx(
                    'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                    (level === 'Todos' && !filters.maturityLevel) || filters.maturityLevel === level
                      ? 'bg-primary-100 text-primary-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechnologyToggle(tech)}
                  className={clsx(
                    'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                    filters.technologies.includes(tech)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <button
              onClick={clearFilters}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AppFilters 