import React, { useRef, useState, useEffect } from "react";
import "./Post.css";
import MediaContent from "../MediaContent";
import { Link, json } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import Modal from "react-modal";
import { useAuth } from "../../AuthContext";
import { Form } from "react-bootstrap";

const Post = (props) => {
  const { user } = useAuth();
  const id = props.id;
  const postUser = props.user;
  const imageUrl = props.imageUrl;
  const caption = props.caption;
  const likedByUser = props.likedByUser;
  const likes = props.likes;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const openModal = (postId) => {
    setPostData(null);
    setComments([]);
    setNewCommentText("");
    fetchPostData(postId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fetchSinglePostData = async (postId) => {
    setPostData(null);
    await fetch(
      `http://localhost:8077/getPostById?postId=${postId}&userId=${user.userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setPostData(res);
      });
  };

  const likePost = async () => {
    const requestData = {
      likedByUserId: user.userId,
      postId: id,
    };
    await fetch(`http://localhost:8077/likePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        fetchPostData(id);
      });
  };

  const disLikePost = async () => {
    let formData = {
      likedByUserId: user.userId,
      postId: id,
    };

    await fetch(`http://localhost:8077/disLikePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        fetchPostData(id);
      });
  };

  const getAllCommentsForPost = async (postId) => {
    await fetch(
      `http://localhost:8077/getAllCommentsforPost?postId=${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      });
  };

  const fetchPostData = async (postId) => {
    try {
      fetchSinglePostData(postId);
      getAllCommentsForPost(postId);
    } catch (error) {
      console.error("Error fetching post data or comments:", error);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    const requestBody = {
      comment: newCommentText,
      userId: user.userId,
      postId: id,
    };
    await fetch(`http://localhost:8077/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        setPostData(res);
      });
  };

  return (
    <article className="Post">
      <header>
        <Link to={`/user/${postUser.userId}`}>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img
                src={
                  postUser?.avatar == null
                    ? "https://instagramclone210739-dev.s3.ap-south-1.amazonaws.com/default-user-image.jpg"
                    : postUser.avatar
                }
                alt={"image of " + postUser?.userName}
              />
            </div>
            <div className="Post-user-nickname">
              <div>{postUser?.fullName}</div>
              <div style={{ color: "#888888", fontSize: "15px" }}>
                {postUser?.userName}
              </div>
            </div>
          </div>
        </Link>
      </header>
      <div onClick={() => openModal(id)}>
        <div className="post-image">
          <div className="post-image-bg">
            <MediaContent
              src={imageUrl}
              type={imageUrl.split(/[#?]/)[0].split(".").pop().trim()}
              height="300px"
              width="300px"
            />
          </div>
        </div>
        <div>
          <button className="like-button">
            {likedByUser ? <FcLike /> : <CiHeart />}
          </button>
          {likes}
        </div>
        <div className="Post-caption">
          <strong>{postUser?.userName}</strong> {caption}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Post Modal"
      >
        {postData && (
          <>
            <header>
              <Link to={`/user/${user.userId}`}>
                <div className="Post-user">
                  <div className="Post-user-avatar">
                    <img
                      src={
                        user?.avatar == null
                          ? "https://instagramclone210739-dev.s3.ap-south-1.amazonaws.com/default-user-image.jpg"
                          : user.avatar
                      }
                      alt={"image of " + postData?.user?.userName}
                    />
                  </div>
                  <div className="Post-user-nickname">
                    <span>{postData?.user?.fullName}</span>
                    <span>{postData?.user?.userName}</span>
                  </div>
                </div>
              </Link>
            </header>
            <div className="post-image">
              <div className="post-image-bg">
                <MediaContent
                  src={postData?.imageUrl}
                  type={postData?.imageUrl
                    .split(/[#?]/)[0]
                    .split(".")
                    .pop()
                    .trim()}
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
            <div>
              {postData?.likedByUser ? (
                <FcLike onClick={disLikePost} />
              ) : (
                <CiHeart onClick={likePost} />
              )}
              {postData?.likes}
            </div>
            <div className="Post-caption">
              <strong>{postData?.user?.userName}</strong> {postData?.caption}
            </div>
            <h6>Comments:</h6>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Add comment"
                  onChange={(e) => setNewCommentText(e.target.value)}
                />
              </Form.Group>
              <button type="submit" onClick={addComment}>
                Post
              </button>
            </Form>
            <div className="comments">
              {comments.map((comment) => (
                <div className="comments-data" key={comment.id}>
                  <Link to={`/user/${comment.userId}`}>
                    <strong style={{ color: "#000" }}>{comment.name}</strong>
                  </Link>{" "}
                  {comment.comment}
                </div>
              ))}
            </div>
          </>
        )}
      </Modal>
    </article>
  );
};

export default Post;
