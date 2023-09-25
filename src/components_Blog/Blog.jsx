import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import'./styles/Blog.css';

export default function Blog({src}) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Cargar el contenido de tu archivo Markdown (puedes usar una solicitud HTTP o cargar desde un archivo local)
    fetch(`src/components_Blog/md/${src}.mdx`)
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data)
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  return (
    <div className='Blog-Content'>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
