import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { theme } from '../styles/theme';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: t.portfolio.categories.all, count: 8 },
    { id: 'web-app', name: t.portfolio.categories.webApp, count: 3 },
    { id: 'mobile-app', name: t.portfolio.categories.mobileApp, count: 2 },
    { id: 'healthcare', name: t.portfolio.categories.healthcare, count: 1 },
    { id: 'data-analytics', name: t.portfolio.categories.dataAnalytics, count: 1 },
    { id: 'ecommerce', name: t.portfolio.categories.ecommerce, count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: t.portfolio.projects.erp.title,
      category: 'web-app',
      description: t.portfolio.projects.erp.description,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: t.portfolio.projects.erp.results,
      variant: 'indigo' as const
    },
    {
      id: 2,
      title: t.portfolio.projects.ecommerceApp.title,
      category: 'mobile-app',
      description: t.portfolio.projects.ecommerceApp.description,
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      results: t.portfolio.projects.ecommerceApp.results,
      variant: 'purple' as const
    },
    {
      id: 3,
      title: t.portfolio.projects.telemedicine.title,
      category: 'healthcare',
      description: t.portfolio.projects.telemedicine.description,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'WebRTC', 'Python', 'Docker'],
      results: t.portfolio.projects.telemedicine.results,
      variant: 'teal' as const
    },
    {
      id: 4,
      title: t.portfolio.projects.analytics.title,
      category: 'data-analytics',
      description: t.portfolio.projects.analytics.description,
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['D3.js', 'Python', 'Pandas', 'MongoDB'],
      results: t.portfolio.projects.analytics.results,
      variant: 'emerald' as const
    },
    {
      id: 5,
      title: t.portfolio.projects.academic.title,
      category: 'web-app',
      description: t.portfolio.projects.academic.description,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'Azure'],
      results: t.portfolio.projects.academic.results,
      variant: 'orange' as const
    },
    {
      id: 6,
      title: t.portfolio.projects.delivery.title,
      category: 'mobile-app',
      description: t.portfolio.projects.delivery.description,
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      results: t.portfolio.projects.delivery.results,
      variant: 'pink' as const
    },
    {
      id: 7,
      title: t.portfolio.projects.elearning.title,
      category: 'web-app',
      description: t.portfolio.projects.elearning.description,
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Express', 'PostgreSQL', 'Redis'],
      results: t.portfolio.projects.elearning.results,
      variant: 'indigo' as const
    },
    {
      id: 8,
      title: t.portfolio.projects.marketplace.title,
      category: 'ecommerce',
      description: t.portfolio.projects.marketplace.description,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe'],
      results: t.portfolio.projects.marketplace.results,
      variant: 'teal' as const
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className={`${theme.spacing.section} ${theme.colors.background.darkAlt}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.portfolio.title} <span className={theme.colors.primary.text}>{t.portfolio.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4`}>
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {filteredProjects.map((project, index) => (
            <GlassCard
              key={project.id}
              variant={project.variant}
              className={`rounded-xl md:rounded-2xl overflow-hidden filter-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="gradient">
                    {categories.find(cat => cat.id === project.category)?.name || 'Project'}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className={`${theme.typography.heading.h4} ${theme.colors.text.primary} mb-2 md:mb-3`}>
                  {project.title}
                </h3>
                <p className={`${theme.colors.text.secondary} mb-3 md:mb-4 leading-relaxed ${theme.typography.body.small} md:text-base line-clamp-3`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex}>
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge>
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Results - Show only first 2 */}
                <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <span className={`${theme.typography.body.small} ${theme.colors.text.secondary} line-clamp-1`}>
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button variant="small" className="flex-1 text-xs md:text-sm">
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{t.portfolio.actions.viewProject}</span>
                  </Button>
                  <Button variant="small" className="flex-1 border border-white/20 glass-card text-slate-200 hover:bg-white/10 text-xs md:text-sm">
                    <Github className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{t.portfolio.actions.viewCode}</span>
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <GlassCard variant="indigo" className="rounded-2xl p-8 max-w-md mx-auto">
              <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-2`}>
                {t.portfolio.emptyState.title}
              </h3>
              <p className={theme.colors.text.secondary}>
                {t.portfolio.emptyState.description}
              </p>
            </GlassCard>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            <span className={theme.typography.body.base}>{t.portfolio.cta}</span>
            <ArrowRight className={`${theme.components.icon.small} group-hover:translate-x-1 transition-transform duration-200`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;