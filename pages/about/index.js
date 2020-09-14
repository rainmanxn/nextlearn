import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

const About = () => {
    const clickHandler = () => {
        Router.push('/')
    }
    return (
      <MainLayout title='about page'>
        <h1 className='post'>About page</h1>
        <button onClick={clickHandler}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go back to posts</button>
      </MainLayout>
    )
}

export default About;