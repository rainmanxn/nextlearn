import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

const Posts = () => {
    const router = useRouter();

    // console.log(router.query.id)
    return (
        <MainLayout>
            <h1 className='post'>Current {router.query.id}</h1>
        </MainLayout>
    )
}

export default Posts;