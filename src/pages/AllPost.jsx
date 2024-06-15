import React from 'react'
import { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import PostCard from '../components/PostCard'
import { set } from 'react-hook-form'
import { Container } from '../components'


function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 w-1/4'>
            <PostCard {...post}/>
          </div>
        ))}
      </div>
        
      </Container>
    </div>
  )
}

export default AllPost
