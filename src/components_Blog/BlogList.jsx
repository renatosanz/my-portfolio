import React, { useEffect, useState } from 'react'
import { dataBlog } from '../constants/blogData'
import BlogCard from './BlogCard'
import './styles/BlogList.css'

export default function BlogContent({selfRef}) {
  return (
    <section id='Blog-cont' ref={selfRef}>
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
            bgi={item.bgi}/>
          </div>
          )
        }
      </ul>
    </section>
  )
}
