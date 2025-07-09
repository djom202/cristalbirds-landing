import React, { useState } from 'react';
import { Settings, Database, RefreshCw, ExternalLink, Eye, EyeOff } from 'lucide-react';
import { useCMSContext } from '../../context/CMSContext';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { theme } from '../../styles/theme';

export const CMSAdmin: React.FC = () => {
  const { 
    loading, 
    error, 
    refreshContent, 
    isCMSEnabled,
    hero,
    services,
    projects,
    testimonials
  } = useCMSContext();
  
  const [isVisible, setIsVisible] = useState(false);

  if (!isCMSEnabled) {
    return null;
  }

  const cmsUrl = import.meta.env.VITE_CMS_URL;

  const stats = {
    hero: hero ? 1 : 0,
    services: services.length,
    projects: projects.length,
    testimonials: testimonials.length
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-50 p-3 glass-card rounded-full hover:glass-card-indigo transition-all duration-300"
        title="Panel de administración CMS"
      >
        <Settings className="h-5 w-5 text-cyan-400" />
      </button>

      {/* Admin Panel */}
      {isVisible && (
        <div className="fixed top-32 right-4 z-50 w-80">
          <GlassCard variant="indigo" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${theme.typography.heading.h4} ${theme.colors.text.primary}`}>
                Panel CMS
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded"
              >
                <EyeOff className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            {/* Status */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Database className="h-4 w-4 text-cyan-400" />
                <span className={`${theme.typography.body.small} ${theme.colors.text.primary}`}>
                  Estado del CMS
                </span>
              </div>
              <Badge variant={error ? 'default' : 'gradient'}>
                {loading ? 'Cargando...' : error ? 'Error' : 'Conectado'}
              </Badge>
            </div>

            {/* Content Stats */}
            <div className="mb-4">
              <h4 className={`${theme.typography.body.base} ${theme.colors.text.primary} mb-2`}>
                Contenido cargado:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-white/5 rounded">
                  <div className="text-lg font-bold text-cyan-400">{stats.hero}</div>
                  <div className="text-xs text-slate-400">Hero</div>
                </div>
                <div className="text-center p-2 bg-white/5 rounded">
                  <div className="text-lg font-bold text-cyan-400">{stats.services}</div>
                  <div className="text-xs text-slate-400">Servicios</div>
                </div>
                <div className="text-center p-2 bg-white/5 rounded">
                  <div className="text-lg font-bold text-cyan-400">{stats.projects}</div>
                  <div className="text-xs text-slate-400">Proyectos</div>
                </div>
                <div className="text-center p-2 bg-white/5 rounded">
                  <div className="text-lg font-bold text-cyan-400">{stats.testimonials}</div>
                  <div className="text-xs text-slate-400">Testimonios</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <Button
                variant="small"
                onClick={refreshContent}
                disabled={loading}
                className="w-full"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Actualizar contenido
              </Button>
              
              <Button
                variant="small"
                onClick={() => window.open(`${cmsUrl}/admin`, '_blank')}
                className="w-full border border-white/20 glass-card text-slate-200 hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir Strapi Admin
              </Button>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-xs text-red-400">{error}</p>
              </div>
            )}
          </GlassCard>
        </div>
      )}
    </>
  );
};