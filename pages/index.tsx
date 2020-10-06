import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout title={'NEXT.JS Home'}>
            <h1>Welcome to NEXT.JS!</h1>
            <p>Lorem ipsum dolor et apem</p>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={"/posts"}><a>Posts</a></Link></p>
        </MainLayout>
    )
}