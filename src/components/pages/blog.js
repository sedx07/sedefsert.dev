import React from 'react';
import '../css/pages/blog/blog.css';

const blogs = [
  {
    title: "text1",
    date: "march 2025",
    summary: "summary",
    link: "#"
  },
  {
    title: "text2",
    date: "june 2025",
    summary: "summary",
    link: "#"
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>blog</h2>
      <div className="blog-list">
        {blogs.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <a href={post.link}>contunie</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
