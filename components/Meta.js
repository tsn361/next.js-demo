import Head from "next/head";

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title : 'ttt',
    keywords: 'kkk',
    description: 'dd'
}
export default Meta