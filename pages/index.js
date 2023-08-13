import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  /* @function fetchPosts 
  * an async funtion that fetch all the post through the api.
  */
  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <>
      <div>
        <h1>blog</h1>
        <button onClick={fetchPosts}>load Posts</button>
        {/*load and deconstruct each post onto the page*/}
        {posts.map((post) => {
          return (
            <div key={post.id}>
              {post.id} {post.title} {post.content}
            </div>
          );
        })}
      </div>
    </>
  );
}
