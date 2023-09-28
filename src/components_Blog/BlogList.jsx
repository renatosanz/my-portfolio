import React, { useEffect, useState } from 'react'
import { dataBlog } from '../constants/blogData'
import BlogCard from './BlogCard'
import './styles/BlogList.css'
import Blog from './Blog'

export default function BlogContent() {

  const [currentBlog, setCurrentBlog] = useState({src:"welcome"});

  return (
    <section id='Blog-cont'>
      <h1>Blog Posts</h1>
      <ul id='Blog-list'>
        {
          dataBlog?.map((item,id)=>
          <div key={id} onClick={()=>{setCurrentBlog(item)}}>
            <BlogCard 
            title={item.title} 
            tags={item.tags} 
            datePub={item.datePub} 
            body={item.data} 
            src={item.src} 
            bgi={item.bgi}/>
          </div>
          )
        }
      </ul>
      <Blog src={currentBlog.src}/>
    </section>
  )
}
