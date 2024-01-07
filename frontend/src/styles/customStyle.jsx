import { css } from '@emotion/css';
import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';

const useCustomStyles = (styles) => {
  const [generatedClasses, setGeneratedClasses] = useState(null);
  const theme = useTheme();
  useEffect(() => {
    if (!generatedClasses) {
      const evaluatedStyles = typeof styles === 'function' ? styles(theme) : styles;
      const generated = {};

      Object.entries(evaluatedStyles).forEach(([key, value]) => {
        generated[key] = css(value);
      });

      setGeneratedClasses(generated);
    }
  }, [styles, theme, generatedClasses]);

  return generatedClasses || {};
};

export default useCustomStyles;
