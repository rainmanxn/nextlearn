import Link from "next/link";
import {MainLayout} from "../components/MainLayout";

const Index = () => {
    return (
      <MainLayout title='home page'>
        <h1>Hello Next</h1>
        <p><Link href='/about'>About</Link></p>
        <p><Link href='/posts'><a>Posts</a></Link></p>
      </MainLayout>
    )
}

export default Index;