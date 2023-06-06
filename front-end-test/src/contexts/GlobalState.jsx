import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://dev.codeleap.co.uk/careers/");
      const posts = await res.json();
      setPostList(posts.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  const createPost = async (username, title, content) => {
    try {
      let response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "POST",
        body: JSON.stringify({
          username,
          title,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      fetchPosts();
    } catch (error) {
      console.log(error.response);
    }
  };

  const data = {
    openRemoveModal,
    setOpenRemoveModal,
    openEditModal,
    setOpenEditModal,
    postList,
    createPost,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
