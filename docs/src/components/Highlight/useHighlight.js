import { useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import hljs from 'highlight.js/lib/highlight';

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
