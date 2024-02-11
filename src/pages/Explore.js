// Explore.js
import React, { useEffect, useState } from "react";
import Post from "../components/Posts";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Loader from "../components/Loader";

const Explore = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);

  const getAllPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8077/getAllPosts?pageNo=${pageNo}&userId=${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      setLoading(false);
      setPageNo(pageNo + 1);
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      throw error;
    }
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => setPosts(posts))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="container-fluid p-5 ">
        <div className="row">
          <div className="col-8">
            {posts ? (
              posts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  user={post.user}
                  imageUrl={post.imageUrl}
                  caption={post.caption}
                  likedByUser={post.likedByUser}
                  likes={post.likes}
                />
              ))
            ) : error ? (
              <p>An error occurred</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        {/* <div>
          <Loader getAllPosts={getAllPosts()} />
        </div> */}
      </div>
    </div>
  );
};

export default Explore;
