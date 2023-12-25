// Explore.js
import React, { useEffect, useState } from 'react';
import Post from '../components/Posts';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageUploadModal from '../components/ImageUploadModal'; // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css';

const Explore = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [posts, setPosts] = useState();
    const [error, setError] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
    }, [user]);

    const handleCreatePost = async () => {

        console.log("imageUrl", imageUrl);

        const requestBody = {
            userId: user.userSub,
            imageUrl: imageUrl,
            caption: caption
        }

        try {
            const response = await fetch('http://localhost:8077/createPost', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(requestBody)
            });

            const result = await response.json();

            if (result.errors) {
                alert("Error while creating post")
            }

            alert("Post created Succesfully")
            setModalShow(false);
            getAllPosts();
        } catch (error) {
            console.error('Error while createin post', error);
        }
    }

    const getAllPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8077/getAllPosts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });

            const result = await response.json();

            if (result.errors) {
                throw new Error(result.errors[0].message);
            }

            setLoading(false);
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(true);
            throw error;
        }
    };

    useEffect(() => {
        getAllPosts()
            .then((posts) => setPosts(posts))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-2'>
                        <>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Upload image
                            </Button>

                            <ImageUploadModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                imageUrl={imageUrl}
                                setCaption={setCaption}
                                setImageUrl={setImageUrl}
                                handleCreatePost={handleCreatePost}
                            />
                        </>
                    </div>
                    <div className='col-10'>
                        {posts ? (
                            posts.map((post) => (
                                <Post key={post.id} user={post.user} imageUrl={post.imageUrl} caption={post.caption} />
                            ))
                        ) : error ? (
                            <p>An error occurred</p>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
