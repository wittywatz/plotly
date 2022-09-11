import { useState, useCallback, useEffect } from 'react';
const useSystemDefaultTheme = () => {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');

      if (media.matches) {
        setColorMode('Dark');
      } else {
        setColorMode('Light');
      }
    }
  }, []);

  return colorMode;
};

export default useSystemDefaultTheme;
