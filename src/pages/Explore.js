import React, { useEffect, useState } from 'react';
import Post from '../components/Posts';

const Explore = () => {
    const [posts, setPosts] = useState();
    const [error, setError] = useState(false);

    const getAllPosts = async () => {
        try {
            const response = await fetch('http://localhost:8077/getAllPosts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors', // Ensure that CORS is enabled
            });

            // Process the response as needed


            const result = await response.json();

            if (result.errors) {
                throw new Error(result.errors[0].message);
            }

            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(true);
            throw error;
        }
    };

    useEffect(() => {
        getAllPosts()
            .then(posts => setPosts(posts))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            {posts ? (
                posts.map(post => (
                    <Post key={post.id} user={post.user} imageUrl={post.imageUrl} caption={post.caption} />
                ))
            ) : error ? (
                <p>An error occurred</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Explore;
