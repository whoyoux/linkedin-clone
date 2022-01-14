import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { MdKeyboardArrowRight } from 'react-icons/md';

const SignIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign in | Linked In Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
                        Welcome to our community!
                    </h1>
                    <div className="space-y-4">
                        <div className="intent">
                            <h2 className="text-xl">Search a job</h2>
                            <MdKeyboardArrowRight
                                size={20}
                                className="text-gray-700"
                            />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Find a person you know</h2>
                            <MdKeyboardArrowRight
                                size={20}
                                className="text-gray-700"
                            />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Learn a new skill</h2>
                            <MdKeyboardArrowRight
                                size={20}
                                className="text-gray-700"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
                    <Image
                        src="https://rb.gy/vkzpzt"
                        alt="Image"
                        layout="fill"
                    />
                </div>
            </main>
        </>
    );
};
export default SignIn;
