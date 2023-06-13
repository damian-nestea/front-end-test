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
      try {
        const response = await fetch(
          `https://dev.codeleap.co.uk/careers/${id}/`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              username: username,
              title: title,
              content: content,
            }),
          }
        );
        if (response.ok) {
          fetchPosts();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please, type a valid Title and Content of your post!");
    }
  };

  const deletePost = async (id) => {
    console.log(id);
    if (id) {
      try {
        await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
          method: "DELETE",
        }).then((response) => {
          fetchPosts();
          alert("Post deleted succesfully!", response);
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
