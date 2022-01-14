import { useState, useEffect } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { signIn, useSession } from 'next-auth/react';

import { useTheme } from 'next-themes';

import { AiOutlineSearch } from 'react-icons/ai';
import { MdHome, MdSettings } from 'react-icons/md';

import NavbarItem from '../components/NavbarItem';

import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme, theme } = useTheme();
    const { data: session, status } = useSession();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSingIn = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <header className="flex items-center justify-center sm:justify-around py-3 w-full gap-10 sm:gap-0 absolute bottom-0 sm:relative">
            <div className="flex items-center space-x-2">
                {!!isMounted && (
                    <>
                        {resolvedTheme === 'dark' ? (
                            <Image
                                src="https://rb.gy/bizvqj"
                                width={55}
                                height={55}
                                alt="LinkedIn logo"
                            />
                        ) : (
                            <Image
                                src="https://rb.gy/dpmd9s"
                                width={55}
                                height={55}
                                alt="LinkedIn logo"
                            />
                        )}
                    </>
                )}

                {/* TODO: Searching for a user */}

                {status === 'authenticated' && (
                    <div className="items-center space-x-1 dark:bg-gray-700 py-2.5 px-4 rounded w-full hidden sm:flex">
                        <AiOutlineSearch size={25} />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
                        />
                    </div>
                )}
            </div>
            <div className="flex items-center space-x-6">
                {status === 'authenticated' ? (
                    <>
                        {' '}
                        <NavbarItem Icon={MdHome} text="Home" />
                        <NavbarItem
                            Icon={FaUserCircle}
                            text="Me"
                            avatar
                            imgSrc={session?.user?.image}
                        />
                        <NavbarItem Icon={MdSettings} text="Settings" />
                    </>
                ) : (
                    <>
                        <button
                            className="border text-blue-700 rounded-full border-blue-700 font-semibold py-1.5 px-5 transition-all hover:border-2"
                            onClick={handleSingIn}
                        >
                            Sign in
                        </button>
                    </>
                )}

                {/* {'Dark mode swtich'} */}
                {!!isMounted && (
                    <div
                        className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative select-none ${
                            resolvedTheme === 'dark'
                                ? 'justify-end'
                                : 'justify-start'
                        }`}
                        onClick={() =>
                            setTheme(
                                resolvedTheme === 'dark' ? 'light' : 'dark'
                            )
                        }
                    >
                        <span className="absolute left-0">🌜</span>
                        <motion.div
                            className="w-5 h-5 bg-white rounded-full z-40"
                            layout
                        />

                        <span className="absolute right-0.5">🌞</span>
                    </div>
                )}
            </div>
        </header>
    );
}
