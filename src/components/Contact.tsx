import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { ContactInfo } from './ui/ContactInfo';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { theme } from '../styles/theme';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: Mail,
      title: t.contact.info.email.title,
      content: t.contact.info.email.content,
      subtitle: t.contact.info.email.subtitle,
      variant: 'indigo' as const
    },
    {
      icon: Phone,
      title: t.contact.info.phone.title,
      content: t.contact.info.phone.content,
      subtitle: t.contact.info.phone.subtitle,
      variant: 'purple' as const
    },
    {
      icon: MapPin,
      title: t.contact.info.location.title,
      content: t.contact.info.location.content,
      subtitle: t.contact.info.location.subtitle,
      variant: 'teal' as const
    }
  ];

  return (
    <section id="contact" className={`${theme.spacing.section} ${theme.colors.background.darkAlt}`}>
      <div className={theme.spacing.container}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${theme.typography.heading.h2} ${theme.colors.text.primary} mb-4`}>
            {t.contact.title} <span className={theme.colors.primary.text}>{t.contact.titleHighlight}</span>
          </h2>
          <p className={`${theme.typography.body.large} ${theme.colors.text.secondary} max-w-3xl mx-auto px-4`}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-4 md:mb-6`}>
                {t.contact.info.title}
              </h3>
              <p className={`${theme.colors.text.secondary} mb-6 md:mb-8 leading-relaxed ${theme.typography.body.base}`}>
                {t.contact.info.description}
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 md:space-y-6">
              {contactItems.map((item, index) => (
                <ContactInfo
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  subtitle={item.subtitle}
                  variant={item.variant}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="rounded-xl md:rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-emerald-400 mx-auto mb-4" />
                <h3 className={`${theme.typography.heading.h3} ${theme.colors.text.primary} mb-2`}>
                  {t.contact.form.success.title}
                </h3>
                <p className={`${theme.colors.text.secondary} ${theme.typography.body.base}`}>
                  {t.contact.form.success.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className={`block ${theme.typography.body.small} font-medium ${theme.colors.text.secondary} mb-2`}>
                      {t.contact.form.name.label} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={theme.components.input}
                      placeholder={t.contact.form.name.placeholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block ${theme.typography.body.small} font-medium ${theme.colors.text.secondary} mb-2`}>
                      {t.contact.form.email.label} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={theme.components.input}
                      placeholder={t.contact.form.email.placeholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="company" className={`block ${theme.typography.body.small} font-medium ${theme.colors.text.secondary} mb-2`}>
                      {t.contact.form.company.label}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={theme.components.input}
                      placeholder={t.contact.form.company.placeholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className={`block ${theme.typography.body.small} font-medium ${theme.colors.text.secondary} mb-2`}>
                      {t.contact.form.project.label}
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className={theme.components.input}
                    >
                      <option value="" className="bg-slate-800">{t.contact.form.project.placeholder}</option>
                      <option value="web-app" className="bg-slate-800">{t.contact.form.project.options.webApp}</option>
                      <option value="mobile-app" className="bg-slate-800">{t.contact.form.project.options.mobileApp}</option>
                      <option value="erp-crm" className="bg-slate-800">{t.contact.form.project.options.erpCrm}</option>
                      <option value="ecommerce" className="bg-slate-800">{t.contact.form.project.options.ecommerce}</option>
                      <option value="cloud" className="bg-slate-800">{t.contact.form.project.options.cloud}</option>
                      <option value="other" className="bg-slate-800">{t.contact.form.project.options.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block ${theme.typography.body.small} font-medium ${theme.colors.text.secondary} mb-2`}>
                    {t.contact.form.message.label} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${theme.components.input} resize-none`}
                    placeholder={t.contact.form.message.placeholder}
                  ></textarea>
                </div>

                <Button type="submit" className="w-full group">
                  <Send className={`${theme.components.icon.small} group-hover:translate-x-1 transition-transform duration-200`} />
                  <span className={theme.typography.body.base}>{t.contact.form.submit}</span>
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;