import React from 'react';
import Post from '../components/post'
import Submit from './submit'
import Preloader from '../components/preloader';
import axios from 'axios'
import { useEffect, useState } from 'react';
export default function Home() {
    const [post, setPost] = useState({
        title: '',
        text: '',
        tags: [],
    })

    const getPost = async () => {
        
        const {data} = await axios.get('http://localhost:8000/api/v1/posts/random')
        setPost(data)
    }
    useEffect(() => {
        getPost();
      }, []);
    return (
        <>
            < Post title={JSON.stringify(post.title)} text= {JSON.stringify(post.text).replace(/"/g, "")} />
       </> 
    )
}