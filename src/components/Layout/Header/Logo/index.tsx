import Image from 'next/image';
import Link from 'next/link';

// define property


const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
      <Image
        src="/images/logo/gkjw_surabaya.png"
        alt="logo"
        width={70}
        height={0}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
