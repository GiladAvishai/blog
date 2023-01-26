import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json(); 
    setPosts(data);
  };

  return (
    <>
      <div>
        <h1>hello</h1>
        <button onClick={fetchPosts}>load Posts</button>
        {
          posts.map( post => {
            return (
              <div key={post.id}>
                {post.id} {post.title} {post.content}
              </div>
            );
          })
        }
      </div>
    </>
  );
}
