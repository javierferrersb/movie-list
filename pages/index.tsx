import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Movie List</title>
                <meta name="description" content="Movie list" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="font-sans">
                <h1 className="">Movie List</h1>
                <ul>
                    <li>
                        <a href="/details/1">Movie 1</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
