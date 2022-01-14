import type { NextPage } from 'next';
import Head from 'next/head';

import { signOut } from 'next-auth/react';

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Linked In Clone</title>
                <meta name="description" content="LinkedIn clone" />
                <meta name="author" content="whoyoux" />
                <link rel="icon" href="/favicon.ico" />
                <body className="bg-gray-100 dark:bg-gray-900" />
            </Head>

            <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto mt-5 sm:mt-0">
                <button onClick={() => signOut()} className="p-3 border">
                    Sign out
                </button>
            </main>
        </div>
    );
};

export default Index;
