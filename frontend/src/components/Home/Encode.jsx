import React, { useState, useEffect, useRef } from 'react';

const Encode = ({ scrollContainerRef }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [showText, setShowText] = useState(false);
    const scrollRef = useRef(null);

    const asciiArt = `
                                                                                            
            (((((((((((((((                           (((((((,                  
         (((((  (((((((((((            (((((((        ((((((((((((((            
        (((((   ((                 ((((((((((              (((((((((((          
       (((((   (                      (((((((                   ((((((          
       ((((   (                     (  ((((((                    *(((((         
       (((   ((                     (((((((((                    ((((((         
       ((   (((                      ,(((((((                    ((((((         
       *(((((((                      (((((((                     ((((((         
        ((((((/                      (((((((                     ((((((         
 *((((  ((((((                       (((((((                     *((((((   (((((
((((((( ((((                         (((((((                         (((  ((((((
  ((((  ((((((                       .(((((                      *((((((   (((( 
         ((((((                       (((((                      (((((((        
         ((((((                       (((((                      ((((((((       
         ((((((                        (((                       ((((((((       
         ((((((                                                  ((((((((       
         /(((((                      ((((((                      (((  (((       
          (((((                    (((*  ((((                    ((   (((       
          ((((/                    ((((  ((((                   ,(   ((((       
          (((((((((                  (((((((                    (,  (((((       
           ((((((((((((                               /(((((((((( ((((((        
                ((((((((((                            ((((((((((((((((                    

  `;

    useEffect(() => {
        const lines = asciiArt.split('\n');
        let currentLine = 0;

        const intervalId = setInterval(() => {
            if (currentLine < lines.length) {
                setDisplayedLines(prevLines => [...prevLines, lines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(intervalId);
                setShowText(true);
            }

            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({
                    top: scrollContainerRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [scrollContainerRef]);

    useEffect(() => {

        if (showText && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [showText, scrollContainerRef]);

    return (
        <div className='text-center text-sm'>
            <pre>
                <code>
                    {displayedLines.map((line, index) => (
                        <React.Fragment key={index}>{line}{'\n'}</React.Fragment>
                    ))}
                </code>
            </pre>
            <div ref={scrollRef}>
                {showText && (
                    <div className="font-bold minecraft text-5xl text-center">
                        Collaborate     Innovate     Elevate
                    </div>
                )}
            </div>
        </div>
    );
};

export default Encode;