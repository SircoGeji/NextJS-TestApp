import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import styles from '../styles/error.module.sass'

export default function errorPage(){
    return (
        <MainLayout>
            <h1 className={styles.error}>Error 404</h1>
            <p>Please <Link href={'/'}><a>go back</a></Link> to home page</p>
        </MainLayout>
    )
}