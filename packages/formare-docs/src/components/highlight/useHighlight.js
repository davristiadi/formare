import { useEffect } from './node_modules/react';
import { findDOMNode } from './node_modules/react-dom';
import hljs from './node_modules/highlight.js/lib/highlight';

const useHighlight = ({ ref }) => {
  useEffect(() => {
    const nodes = ref.querySelectorAll('pre code');

    nodes.forEach(node => {
      hljs.highlightBlock(node[i]);
    });

    return () => {};
  }, []);
};

export default useHighlight;
