// Theme configuration for consistent styling across the application
export const theme = {
  // Glass morphism variants
  glass: {
    base: 'backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 24px 12px rgba(255, 255, 255, 0.02);',
    card: 'glass-card',
    indigo: 'glass-card-indigo',
    purple: 'glass-card-purple',
    teal: 'glass-card-teal',
    emerald: 'glass-card-emerald',
    pink: 'glass-card-pink',
    orange: 'glass-card-orange'
  },

  // Color system
  colors: {
    primary: {
      gradient: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500',
      gradientHover: 'hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400',
      text: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
    },
    background: {
      dark: 'bg-dark-gradient',
      darkAlt: 'bg-dark-gradient-alt',
      darkSoft: 'bg-dark-gradient-soft'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-slate-300',
      muted: 'text-slate-400',
      accent: 'text-cyan-400'
    }
  },

  // Typography
  typography: {
    heading: {
      h1: 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
      h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
      h3: 'text-xl md:text-2xl font-bold',
      h4: 'text-lg md:text-xl font-bold'
    },
    body: {
      large: 'text-lg md:text-xl',
      base: 'text-sm md:text-base',
      small: 'text-xs md:text-sm'
    }
  },

  // Spacing
  spacing: {
    section: 'py-12 md:py-20',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    card: 'p-6 md:p-8',
    button: 'px-6 md:px-8 py-3 md:py-4'
  },

  // Animations
  animations: {
    hover: 'hover:scale-105 transition-all duration-300',
    hoverShadow: 'hover:shadow-2xl',
    fadeInUp: 'animate-fade-in-up',
    pulse: 'animate-pulse',
    float: 'animate-float'
  },

  // Components
  components: {
    button: {
      primary: 'group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mobile-touch-target',
      secondary: 'px-6 md:px-8 py-3 md:py-4 glass-card text-slate-200 font-semibold rounded-xl hover:glass-card-indigo transition-all duration-300 transform hover:scale-105 mobile-touch-target',
      small: 'flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 mobile-touch-target'
    },
    input: 'w-full px-3 md:px-4 py-2 md:py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-sm md:text-base mobile-touch-target',
    badge: 'text-xs px-2 md:px-3 py-1 bg-white/10 text-slate-200 rounded-full font-medium border border-white/20',
    icon: {
      small: 'h-4 w-4 md:h-5 md:w-5',
      medium: 'h-6 w-6 md:h-8 md:w-8',
      large: 'h-8 w-8 md:h-10 md:w-10'
    }
  }
};

// Utility function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};