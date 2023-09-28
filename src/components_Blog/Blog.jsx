import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/Blog.css';

export default function Blog({ src }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Cargar el contenido de tu archivo Markdown utilizando una ruta relativa desde la raíz
    fetch(`${process.env.PUBLIC_URL}/src/components_Blog/md/${src}.mdx`)
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [src]);
  
  return (
    <div className='Blog-Content'>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
