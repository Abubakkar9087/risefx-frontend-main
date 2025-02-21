import React, { useEffect, useRef, useState } from 'react';

const Typewriter = () => {
  const [content] = useState(["Rise with RISE FX", "World's Most Trusted Forex Broker Award Winner 2023", "40,000+ Happy Client's from Worldwide", "Be a fund Riser with RISEFX"]);
  const [speed] = useState(50);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const demoRef = useRef(null);

  useEffect(() => {
    typeWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeWriter = () => {
    if (isDeleting) {
      // If deleting, remove the last character
      demoRef.current.innerHTML = content[currentContentIndex].substring(0, index - 1);
      setIndex(prevIndex => prevIndex - 1);

      // Check if all characters are deleted
      if (index <= 0) {
        setIsDeleting(false);
        setCurrentContentIndex((currentContentIndex + 1) % content.length); // Move to the next content
        setTimeout(typeWriter, 1000); // Pause before starting to type new content
      } else {
        // Continue deleting with a delay
        setTimeout(typeWriter, speed);
      }
    } else {
      // If typing, add the next character
      demoRef.current.innerHTML = content[currentContentIndex].substring(0, index + 1);
      setIndex(prevIndex => prevIndex + 1);

      // Check if we reached the end of the current content
      if (index >= content[currentContentIndex].length) {
        // Start deleting after a short pause
        setIsDeleting(true);
        setTimeout(typeWriter, 1000); // Pause before deleting
      } else {
        // Continue typing with a delay
        setTimeout(typeWriter, speed);
      }
    }
  };

  return (
    <p ref={demoRef}></p>
  );
};

export default Typewriter;
