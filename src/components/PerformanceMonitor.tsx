
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface ExtendedPerformanceEntry extends PerformanceEntry {
  processingStart?: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              value: Math.round(entry.startTime),
              custom_parameter: 'core_web_vitals'
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries() as ExtendedPerformanceEntry[]) {
          const fid = entry.processingStart ? entry.processingStart - entry.startTime : 0;
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(fid),
              custom_parameter: 'core_web_vitals'
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        if (window.gtag) {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000),
            custom_parameter: 'core_web_vitals'
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Initialize tracking
    if (typeof window !== 'undefined') {
      trackWebVitals();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
