import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import axios from "axios";
import Link from "next/link";

const Post = ({ post: serverPost }) => {
    const router = useRouter();
    const [post, setPost] = useState(serverPost)
    useEffect(() => {
      const load = async () => {
        let data = await axios(`http://localhost:4200/posts/${router.query.id}`)
        data = data.data
        setPost(data)
      }
      if (!serverPost) load()
    }, [])
    // console.log(router.query.id)
  if (!post) {
    return <MainLayout>
            <p>...loading</p>
            </MainLayout>
  }
    return (
        <MainLayout>
            {/*<h1 className='post'>Current {router.query.id}</h1>*/}
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <button><Link href='/posts'>Back to all posts</Link></button>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) return {post: null}
  let post = await axios(`http://localhost:4200/posts/${query.id}`)
  post = post.data
  return {
    post
  }
}

export default Post;