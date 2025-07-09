import React from 'react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { theme } from '../styles/theme';

interface CMSLoaderProps {
  loading: boolean;
  error: string | null;
  onRetry?: () => void;
  children: React.ReactNode;
}

export const CMSLoader: React.FC<CMSLoaderProps> = ({
  loading,
  error,
  onRetry,
  children
}) => {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard className="p-8 text-center">
          <Loader2 className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-2`}>
            Cargando contenido...
          </h3>
          <p className={`${theme.colors.text.secondary} ${theme.typography.body.base}`}>
            Obteniendo la información más reciente del CMS
          </p>
        </GlassCard>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard variant="orange" className="p-8 text-center max-w-md">
          <AlertCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
          <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-2`}>
            Error al cargar contenido
          </h3>
          <p className={`${theme.colors.text.secondary} ${theme.typography.body.base} mb-6`}>
            {error}
          </p>
          {onRetry && (
            <Button onClick={onRetry} variant="secondary" className="group">
              <RefreshCw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Reintentar
            </Button>
          )}
        </GlassCard>
      </div>
    );
  }

  return <>{children}</>;
};

// Componente para mostrar estado del CMS
export const CMSStatus: React.FC<{
  isCMSEnabled: boolean;
  loading: boolean;
  error: string | null;
}> = ({ isCMSEnabled, loading, error }) => {
  if (!isCMSEnabled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <GlassCard className="p-3 flex items-center space-x-2">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 text-cyan-400 animate-spin" />
            <span className="text-xs text-slate-300">Sincronizando CMS...</span>
          </>
        ) : error ? (
          <>
            <AlertCircle className="h-4 w-4 text-orange-400" />
            <span className="text-xs text-slate-300">Error CMS</span>
          </>
        ) : (
          <>
            <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-300">CMS Conectado</span>
          </>
        )}
      </GlassCard>
    </div>
  );
};