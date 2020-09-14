import Head from "next/head";
import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import axios from 'axios';
import { useState, useEffect } from 'react'

const Posts = ({ posts: serverPosts }) => {
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
  const [posts, setPost] = useState(serverPosts)

  useEffect(() => {
    const load = async () => {
      let response = await axios('http://localhost:4200/posts')
      response = response.data
      setPost(response)
    }
    if (!serverPosts) load()
  }, [])

  if (!posts) {
    return <MainLayout>
      <p>...loading</p>
    </MainLayout>
  }

    return (
      <MainLayout title='posts page'>
        <Head>
          <title>Posts page</title>
        </Head>
        <h1 className='post'>Post page</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        {/*<pre>{JSON.stringify(posts, null, 2)}</pre>*/}
      </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) return {posts: null}
  const post = await axios('http://localhost:4200/posts')
  const posts = post.data
  return {
    posts
  }
}

export default Posts;