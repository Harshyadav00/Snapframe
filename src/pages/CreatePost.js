import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import MediaContent from "../components/MediaContent";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 5242880) {
      alert("Please select a file less than 5mb  ");
      return;
    }
    setSelectedFile(file);
    setSelectedName(file.name);
    // Additional validation logic
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
    <div style={{ paddingLeft: "50px", paddingTop: "1px" }}>
      <Form className="create-post-container my-5 ">
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
          <div className="file-upload">
            <CloudUploadIcon fontSize="large" />
            <h3> {selectedName || "Drag & Drop or Click to upload"}</h3>
            <p>Maximun file size 5mb</p>
            <input type="file" onChange={handleFileChange} />
          </div>
        </Form.Group>
        <button type="submit" onClick={handleSubmit}>
          Upload
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
