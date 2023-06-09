import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [postList, setPostList] = useState([]);
  const [choosenPost, setChoosenPost] = useState({});

  const [username, setUsername] = useState("");

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

  const editPost = async (id, title, content) => {
    if (title && content) {
    } else {
      alert("Please, type the Title and Content of your post!");
    }
  };

  const deletePost = async (id) => {
    console.log(id);
    if (id) {
      try {
        await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
          method: "DELETE",
        }).then((response) => {
          response.json();
          fetchPosts();
          alert("Post deleted succesfully!");
        });
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert("Invalid requisition.");
    }
  };

  const data = {
    openRemoveModal,
    setOpenRemoveModal,
    openEditModal,
    setOpenEditModal,
    postList,
    createPost,
    username,
    setUsername,
    editPost,
    choosenPost,
    setChoosenPost,
    deletePost,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
