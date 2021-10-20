import { server } from '../../../config'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'
//import { articles } from '../../../data'

const article = ({article}) => {
    //const router = useRouter()
    //const { id } = router.query
    return (
        <div>
            <Meta title={article.title} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back</Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await  res.json()
    return {
        props: {
            article
        }
    }
}

export default article