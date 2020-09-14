import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";
import * as axios from "axios";

const About = ({ title }) => {
    const clickHandler = () => {
        Router.push('/')
    }
    return (
      <MainLayout title='about page'>
        <h1 className='post'>{title}</h1>
        <button onClick={clickHandler}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go back to posts</button>
      </MainLayout>
    )
}

About.getInitialProps = async () => {
    const resp = await axios(`http://localhost:4200/about`)
    const title = resp.data.title

    return {
        title
    }
}

export default About;