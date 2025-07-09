# Integración CMS Headless - CristalBirds

Este proyecto incluye una integración completa con un CMS headless (Strapi) que permite gestionar todo el contenido del sitio web de forma remota.

## 🚀 Características

- **Gestión completa de contenido**: Textos, imágenes, enlaces y configuraciones
- **Multiidioma**: Soporte para español e inglés
- **Tiempo real**: Actualizaciones automáticas del contenido
- **Fallback inteligente**: Si el CMS no está disponible, usa contenido estático
- **Panel de administración**: Interfaz integrada para monitorear el CMS
- **Optimización de imágenes**: Gestión automática de assets

## 📋 Contenido Gestionable

### Secciones principales:
- **Hero**: Título, subtítulo, CTAs y características destacadas
- **Servicios**: Lista completa de servicios con descripciones e iconos
- **Proceso**: Pasos del proceso de desarrollo
- **Portfolio**: Proyectos con imágenes, tecnologías y resultados
- **Testimonios**: Reseñas de clientes con fotos y ratings
- **AWS Partnership**: Contenido de la sección de partnership
- **Contacto**: Información de contacto y formularios
- **Configuración general**: Logo, redes sociales, footer

### Tipos de contenido:
- ✅ Textos y descripciones
- ✅ Imágenes y media
- ✅ Enlaces y URLs
- ✅ Configuraciones del sitio
- ✅ Formularios de contacto
- ✅ Metadatos SEO

## 🛠️ Configuración

### 1. Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```bash
# CMS Configuration
VITE_CMS_URL=http://localhost:1337
VITE_CMS_API_TOKEN=tu_token_de_strapi_aqui
```

### 2. Instalación de Strapi (CMS)

```bash
# Crear nuevo proyecto Strapi
npx create-strapi-app@latest cms-cristalbirds --quickstart

# O usar Docker
docker run -it --rm \
  -v "$(pwd)/cms-data:/srv/app" \
  -p 1337:1337 \
  strapi/strapi
```

### 3. Configuración de Strapi

#### Content Types necesarios:

1. **Hero** (Single Type)
   - badge (Text)
   - title (Text)
   - titleHighlight (Text)
   - subtitle (Long Text)
   - primaryCTA (Text)
   - secondaryCTA (Text)
   - features (Component - repeatable)

2. **Services** (Collection Type)
   - title (Text)
   - description (Long Text)
   - icon (Text)
   - features (JSON)

3. **Projects** (Collection Type)
   - title (Text)
   - description (Long Text)
   - category (Text)
   - technologies (JSON)
   - results (JSON)
   - image (Media)
   - demoUrl (Text)
   - githubUrl (Text)

4. **Testimonials** (Collection Type)
   - name (Text)
   - position (Text)
   - company (Text)
   - content (Long Text)
   - rating (Number)
   - project (Text)
   - avatar (Media)

5. **Process Steps** (Collection Type)
   - title (Text)
   - description (Long Text)
   - details (JSON)
   - icon (Text)
   - order (Number)

6. **Contact Info** (Single Type)
   - email (Email)
   - phone (Text)
   - address (Text)
   - workingHours (Text)

7. **Site Settings** (Single Type)
   - siteName (Text)
   - siteDescription (Long Text)
   - logo (Media)
   - socialLinks (Component - repeatable)
   - footerText (Long Text)
   - copyrightText (Text)

8. **AWS Partnership** (Single Type)
   - badge (Text)
   - title (Text)
   - description (Long Text)
   - partnerBadge (Text)
   - ctaText (Text)
   - documentationUrl (Text)
   - benefits (Component - repeatable)

#### Configuración de permisos:

1. Ir a Settings > Users & Permissions Plugin > Roles
2. Configurar permisos para "Public":
   - Permitir `find` y `findOne` para todos los content types
3. Crear API Token en Settings > API Tokens

### 4. Configuración de internacionalización

1. Instalar plugin i18n en Strapi
2. Configurar locales: `en` (default) y `es`
3. Habilitar i18n para todos los content types

## 🎯 Uso

### Modo de desarrollo

```bash
# Iniciar Strapi (en directorio del CMS)
npm run develop

# Iniciar aplicación React
npm run dev
```

### Panel de administración

- Accede a `http://localhost:1337/admin` para gestionar contenido
- El panel integrado aparece en la esquina superior derecha del sitio
- Permite monitorear estado del CMS y actualizar contenido

### Gestión de contenido

1. **Crear contenido**: Usa el admin de Strapi para crear/editar
2. **Publicar**: Asegúrate de publicar el contenido
3. **Actualizar**: El sitio se actualiza automáticamente o usa el botón de refresh

## 🔧 Funcionalidades avanzadas

### Fallback inteligente
Si el CMS no está disponible, la aplicación usa el contenido estático de las traducciones como fallback.

### Optimización de imágenes
Las imágenes se sirven desde Strapi con optimización automática.

### Caché y performance
- Contenido se cachea en el cliente
- Actualizaciones incrementales
- Lazy loading de imágenes

### Formularios
Los formularios de contacto se envían directamente a Strapi y se almacenan como "Contact Submissions".

## 📱 Monitoreo

### Indicadores de estado:
- 🟢 Verde: CMS conectado y funcionando
- 🟡 Amarillo: Cargando contenido
- 🔴 Rojo: Error de conexión

### Panel de administración:
- Estadísticas de contenido cargado
- Botón de actualización manual
- Acceso directo al admin de Strapi
- Visualización de errores

## 🚀 Despliegue

### Strapi (CMS)
```bash
# Build para producción
npm run build

# Desplegar en Heroku, Railway, DigitalOcean, etc.
```

### Frontend
```bash
# Configurar variables de entorno de producción
VITE_CMS_URL=https://tu-cms.herokuapp.com
VITE_CMS_API_TOKEN=tu_token_de_produccion

# Build
npm run build
```

## 🔒 Seguridad

- API tokens para autenticación
- CORS configurado correctamente
- Validación de datos en frontend y backend
- Rate limiting en Strapi

## 📚 Recursos adicionales

- [Documentación de Strapi](https://docs.strapi.io/)
- [Guía de despliegue](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html)
- [Plugin i18n](https://docs.strapi.io/developer-docs/latest/plugins/i18n.html)

## 🆘 Solución de problemas

### CMS no conecta:
1. Verificar que Strapi esté ejecutándose
2. Comprobar variables de entorno
3. Verificar permisos de API

### Contenido no aparece:
1. Verificar que el contenido esté publicado
2. Comprobar configuración de i18n
3. Revisar permisos de roles

### Imágenes no cargan:
1. Verificar configuración de media en Strapi
2. Comprobar CORS settings
3. Verificar URLs de imágenes