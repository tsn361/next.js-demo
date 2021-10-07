import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>My first next.js app</title>
        <meta name="keywords" content='Web apps'></meta>
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}