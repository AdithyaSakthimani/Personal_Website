import React, { useState, useEffect } from 'react';


const CustomTypewriter = ( words, speed = 200 ) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const typingDelay = speed;
  const deletingDelay = speed / 2; 
  const pauseAfterWord = 1000;

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      if (!reverse) {
        setText(words[index].substring(0, subIndex + 1));
        if (subIndex + 1 === words[index].length) {
          setTimeout(() => setReverse(true), pauseAfterWord); 
        } else {
          setSubIndex((prev) => prev + 1);
        }
      } else {
        
        setText(words[index].substring(0, subIndex - 1));
        if (subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % words.length);
        } else {
          setSubIndex((prev) => prev - 1);
        }
      }
    }, reverse ? deletingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingDelay, deletingDelay, pauseAfterWord]);

  return text ;
};

export default CustomTypewriter;
