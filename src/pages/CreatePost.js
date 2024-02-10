import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import MediaContent from "../components/MediaContent";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

  const handleSubmit = async () => {
    if (!selectedFile || !caption) {
      alert("Please select a file and add a caption.");
    } else {
      let formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("userId", user.userId);
      formData.append("caption", caption);

      try {
        const response = await fetch("http://localhost:8077/createPost", {
          method: "POST",
          body: formData,
          headers: {
            contentType: "application/json",
          },
          mode: "cors",
        })
          .then((res) => {
            alert("Succesfully uploaded post");
          })
          .catch((e) => {
            alert("error while uploading file");
            console.log(e);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <Form className="create-post-container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Caption</Form.Label>
          <Form.Control
            type="text"
            placeholder="Caption"
            onChange={(e) => setCaption(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          {selectedFile && (
            <MediaContent
              src={URL.createObjectURL(selectedFile)}
              type={selectedFile.name.split(/[#?]/)[0].split(".").pop().trim()}
            />
          )}
          <Form.Control type="file" onChange={handleFileInputChange} />
        </Form.Group>
        <button type="submit" onClick={handleSubmit}>
          Create Post
        </button>
      </Form>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="caption"
    //       placeholder="caption"
    //       onChange={(e) => setCaption(e.target.value)}
    //     />
    //     {selectedFile && (
    //       <MediaContent
    //         src={URL.createObjectURL(selectedFile)}
    //         type={selectedFile.type}
    //         height="300px"
    //         width="300px"
    //       />
    //     )}
    //     <input type="file" name="file" onChange={handleFileInputChange} />
    //   </form>
    // </div>
  );
};

export default CreatePost;
