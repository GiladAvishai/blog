import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [reqPost, setReqPost] = useState({});

  /* @function fetchPosts
   * an async funtion that fetch all the post through the api.
   */
  const fetchPosts = async () => {
    const response = await fetch("/api/posts/getReq/getPosts");
    const data = await response.json();
    setPosts(data);
  };

  const handleSubmit = async (e) => {
    // // Stop the form from submitting and refreshing the page.
    e.preventDefault();

    // Get data from the form.
    const data = {
      clientInput: e.target.postIdSearch.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endPoint = "/api/posts/getReq/getSpecPost";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON File.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    if (response.status === 400) {
      return alert(result.data);
    }

    setReqPost((reqPost) => result.data);
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
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="postIdSearch">Find by post id:</label>
            <input type="text" id="postIdSearch" name="postIdSearch" />
            <button type="submit">Submit</button>
          </form>
          <div>
            <h1>{reqPost.id}</h1>
            <h1>{reqPost.title}</h1>
            <h1>{reqPost.content}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
