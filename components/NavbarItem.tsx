import { IconType } from 'react-icons';
import Image from 'next/image';

import { FaUserCircle } from 'react-icons/fa';

interface INavbarItem {
    text: string;
    Icon?: IconType;
    size?: number;
    avatar?: boolean;
    imgSrc?: string;
}

const NavbarItem = ({
    Icon = FaUserCircle,
    text,
    size = 25,
    avatar,
    imgSrc = 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.18169-1/cp0/p40x40/12742742_489360197915136_3155195159521985616_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=asiDjeTSl4cAX863G6v&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_5K0rckiIGdq7a9eQNrxirZ3-vB-WJGtIiIi90sUWTwQ&oe=620926B5'
}: INavbarItem) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white">
            {avatar ? (
                <Image
                    src={imgSrc}
                    alt="Profil img"
                    width={size}
                    height={size}
                    quality={100}
                    className="rounded select-none"
                />
            ) : (
                <Icon size={size} />
            )}
            {text}
        </div>
    );
};

export default NavbarItem;
