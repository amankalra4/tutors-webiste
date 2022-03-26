import { logo } from "@modules/constants";
import Head from "next/head";

interface MetaData {
    title: string;
    description: string;
}

export default function MetaData(props: MetaData) {
    const { title, description } = props;
    return (
        <Head>
            {title && (
                <>
                    <title>{title}</title>
                    <meta property="og:title" content={title} />
                </>
            )}
            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}
            <meta property="og:image" content="/site-logo.jpg" />
        </Head>
    );
}
