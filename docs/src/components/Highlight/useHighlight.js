import { useEffect } from 'react';
import hljs from 'highlight.js/lib/highlight';

const useHighlight = () => {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);
};

export default useHighlight;
