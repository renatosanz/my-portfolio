import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/Blog.css';

export default function Blog({ src }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Cargar el contenido de tu archivo Markdown cuando src cambie
    fetch(`src/components_Blog/md/${src}.mdx`)
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [src]); // Observa cambios en la propiedad src

  return (
    <div className='Blog-Content'>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
