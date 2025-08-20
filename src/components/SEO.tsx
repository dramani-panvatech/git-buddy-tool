import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "RingRemind - Expert Legal Services & Consultation | Poway, CA",
  description = "Professional legal services in Poway, CA. Expert attorneys specializing in family law, personal injury, criminal defense, and immigration. Free consultation available. Call 1-800-916-2459.",
  keywords = "legal services, attorney, lawyer, family law, personal injury, criminal defense, immigration, Poway, California, legal consultation",
  image = "https://ringremind.com/og-image.jpg",
  url = "https://ringremind.com/",
  type = "website",
  author = "RingRemind Legal Services",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false
}) => {
  const siteName = "RingRemind Legal Services";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Enhanced robots meta tag
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@PanvaTechnology" />
      <meta name="twitter:creator" content="@PanvaTechnology" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Poway, California" />
      <meta name="geo.position" content="32.940329;-117.020342" />
      <meta name="ICBM" content="32.940329, -117.020342" />
      
      {/* Language and encoding */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEO; 