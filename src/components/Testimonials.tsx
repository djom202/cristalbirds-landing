import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { TestimonialCard } from './ui/TestimonialCard';
import { theme } from '../styles/theme';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t.testimonials.clients.maria.name,
      position: t.testimonials.clients.maria.position,
      company: t.testimonials.clients.maria.company,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: t.testimonials.clients.maria.content,
      rating: 5,
      project: t.testimonials.clients.maria.project,
      variant: 'indigo' as const
    },
    {
      name: t.testimonials.clients.carlos.name,
      position: t.testimonials.clients.carlos.position,
      company: t.testimonials.clients.carlos.company,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: t.testimonials.clients.carlos.content,
      rating: 5,
      project: t.testimonials.clients.carlos.project,
      variant: 'teal' as const
    },
    {
      name: t.testimonials.clients.ana.name,
      position: t.testimonials.clients.ana.position,
      company: t.testimonials.clients.ana.company,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: t.testimonials.clients.ana.content,
      rating: 5,
      project: t.testimonials.clients.ana.project,
      variant: 'purple' as const
    },
    {
      name: t.testimonials.clients.roberto.name,
      position: t.testimonials.clients.roberto.position,
      company: t.testimonials.clients.roberto.company,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: t.testimonials.clients.roberto.content,
      rating: 5,
      project: t.testimonials.clients.roberto.project,
      variant: 'emerald' as const
    }
  ];

  const stats = [
    { number: '50+', label: t.testimonials.stats.projects, gradient: 'from-cyan-400 to-blue-500' },
    { number: '4.9/5', label: t.testimonials.stats.rating, gradient: 'from-blue-400 to-purple-500' },
    { number: '100%', label: t.testimonials.stats.satisfaction, gradient: 'from-purple-400 to-pink-500' },
    { number: '24/7', label: t.testimonials.stats.support, gradient: 'from-teal-400 to-emerald-500' }
  ];

  return (
    <section id="testimonials" className={`${theme.spacing.section} ${theme.colors.background.dark}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.testimonials.title} <span className={theme.colors.primary.text}>{t.testimonials.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4`}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid - Changed to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
              content={testimonial.content}
              rating={testimonial.rating}
              project={testimonial.project}
              variant={testimonial.variant}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${theme.typography.heading.h2} font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className={`${theme.colors.text.secondary} font-medium ${theme.typography.body.base}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;