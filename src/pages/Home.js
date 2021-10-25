import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import axios from "axios";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios.get(apiUrl).then((posts) => {
      const allPosts = posts.data;
      const allPostsFiltered = allPosts.slice(0, 5);
      console.log(allPosts.slice(0, 5));
      setAppState({ loading: false, posts: allPostsFiltered });
    });
  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
