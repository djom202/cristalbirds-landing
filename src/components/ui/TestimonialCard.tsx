import React from 'react';
import { Star, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Badge } from './Badge';
import { theme } from '../../styles/theme';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project: string;
  variant?: 'indigo' | 'purple' | 'teal' | 'emerald' | 'pink' | 'orange';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  image,
  content,
  rating,
  project,
  variant = 'indigo'
}) => {
  return (
    <GlassCard variant={variant} className="p-4 md:p-6">
      {/* Quote Icon */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <Quote className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />
      </div>

      {/* Rating */}
      <div className="flex space-x-1 mb-3 md:mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-amber-400 fill-current" />
        ))}
      </div>

      {/* Content - Truncated for better fit */}
      <p className={`${theme.colors.text.primary} mb-4 md:mb-6 leading-relaxed ${theme.typography.body.base} italic line-clamp-4`}>
        "{content.length > 120 ? content.substring(0, 120) + '...' : content}"
      </p>

      {/* Project Tag */}
      <div className="mb-3 md:mb-4">
        <Badge variant="gradient">
          {project}
        </Badge>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/20 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div>
          <h4 className={`font-bold ${theme.colors.text.primary} ${theme.typography.body.base}`}>
            {name}
          </h4>
          <p className={`${theme.colors.text.accent} font-medium ${theme.typography.body.small}`}>
            {position}
          </p>
          <p className={`${theme.colors.text.muted} ${theme.typography.body.small}`}>
            {company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};