import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import AppCard from '../components/AppCard'
import AppFilters from '../components/AppFilters'
import { apps } from '../data/apps'

const AppsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    maturityLevel: '',
    technologies: []
  })

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory = !filters.category || app.category === filters.category

      // Maturity level filter
      const matchesMaturity = !filters.maturityLevel || app.maturityLevel === filters.maturityLevel

      // Technology filter
      const matchesTechnology = filters.technologies.length === 0 || 
        filters.technologies.some(tech => app.technologies.includes(tech))

      return matchesSearch && matchesCategory && matchesMaturity && matchesTechnology
    })
  }, [searchQuery, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Marketplace de aplicaciones
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestra colección de soluciones listas para producción. 
              Cada app está diseñada para resolver problemas específicos del mundo real.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar aplicaciones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <AppFilters filters={filters} onFiltersChange={setFilters} />
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {filteredApps.length} {filteredApps.length === 1 ? 'aplicación encontrada' : 'aplicaciones encontradas'}
            </p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredApps.map((app, index) => (
                <AppCard key={app.id} app={app} delay={index * 0.1} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron aplicaciones
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta ajustar tus filtros o términos de búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setFilters({
                    category: '',
                    maturityLevel: '',
                    technologies: []
                  })
                }}
                className="btn-primary"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AppsPage 