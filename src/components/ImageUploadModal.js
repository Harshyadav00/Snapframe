// ImageUploadModal.js
import React from 'react';
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const ImageUploadModal = (props) => {
    const { show, onHide, imageUrl, setCaption, setImageUrl, handleCreatePost } = props;

    const uploadImage = (event) => {

        const thumb = event.currentTarget.files[0];

        const imagetypeEntered = thumb.type;
        if (!imagetypeEntered.match(/^image\/(?:jpeg|png)$/)) {
            alert("You can only upload JPEG or PNG.");
            console.log("Wrong file Input");
            return;
        }

        if (thumb.size > 1000000) {
            alert("Please select an image with less than 1MB.");
            console.log("File Size Exceeded");
            return;
        }

        try {
            var reader = new FileReader();

            reader.onload = function () {
                try {
                    var dataURL = reader.result;
                    console.log(dataURL);

                    setImageUrl(dataURL);
                } catch (error) {
                    console.error('Error processing image:', error);
                    // Handle additional error handling or logging as needed
                }
            };

            reader.readAsDataURL(thumb);
        } catch (error) {
            console.error('Error reading file:', error);
            console.log("File may not be selected");
            // Handle additional error handling or logging as needed
        }


    };

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">Create New Post</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group controlId="formCaption">
                        <Form.Label>Caption</Form.Label>
                        <Form.Control type="text" name="caption" onChange={(e) => setCaption(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formImageUrl">
                        <Form.Label>Upload Image</Form.Label>
                        {imageUrl && <img src={imageUrl} alt={imageUrl} height='400px' width='400px' />}
                        <input type="file" id='image' name='image' onChange={uploadImage} />
                    </Form.Group>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleCreatePost}>Create Post</Button>
                <Button onClick={onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ImageUploadModal;
