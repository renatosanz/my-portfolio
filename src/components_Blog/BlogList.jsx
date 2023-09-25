import React, { useEffect, useState } from 'react'
import { dataBlog } from '../constants/blogData'
import BlogCard from './BlogCard'
import './styles/BlogList.css'
import { Routes, Route } from 'react-router'
import Blog from './Blog'

export default function BlogContent() {
  return (
    <section id='Blog-cont'>
      <h1>Blog Post</h1>
      <ul id='Blog-list'>
        {
          dataBlog?.map((item,id)=>
            <BlogCard key={id} title={item.title} tags={item.tags} datePub={item.datePub} body={item.data} src={item.src} bgi={item.bgi}/>
          )
        }
      </ul>
      <Routes>
        {
          dataBlog?.map((item,id)=>
            <Route key={id} path={`/${item.src}`} element={<Blog src={item.src}/>}/>
          )
        }
      </Routes>
    </section>
  )
}
