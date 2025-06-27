import React from 'react';
import '../css/pages/blog/blog.css';

const blogs = [
  {
    title: "Yapay Zekâ ile Şiir Üretimi",
    date: "Mart 2025",
    summary: "RNN ile Türkçe şiir ürettim. Bu yazıda nasıl eğittiğimi ve sonuçları paylaşıyorum.",
    link: "#"
  },
  {
    title: "React ile Portföy Sitesi Nasıl Yapılır?",
    date: "Haziran 2025",
    summary: "React, GitHub Pages ve EmailJS ile modern bir kişisel portföyü nasıl yayına alırsın, adım adım anlattım.",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {blogs.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <a href={post.link}>Devamını oku</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
