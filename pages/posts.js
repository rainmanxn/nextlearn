import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import axios from 'axios';
import { useState, useEffect } from 'react'

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([])
  // const fnReq = async () => {
  //   const res = await axios('http://localhost:4200/posts')
  //   console.log(res.data)
  //   setPosts(res.data)
  //   // return await res.data
  // }
  // useEffect(() => {
  //   fnReq()
  // }, [])
console.log(posts)
    return (
      <MainLayout title='posts page'>
        <Head>
          <title>Posts page</title>
        </Head>
        <h1 className='post'>Post page</h1>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </MainLayout>
    )
}

Posts.getInitialProps = async () => {
  const post = await axios('http://localhost:4200/posts')
  const posts = post.data
  return {
    posts
  }
}

export default Posts;