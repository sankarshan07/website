import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Sankarshan Desai</title>
                <meta name="description" content="Portfolio Website"/>
                <meta name={`viewport`} content={`width=device-width, initial-scale=1.0`}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
