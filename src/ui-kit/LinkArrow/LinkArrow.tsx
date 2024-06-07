import Arrow from '@/public/assets/images/icons/link_arrow.svg';
import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

export const LinkArrow = ({ title, link }: Props) => {
  return (
    <Link
      href={link}
      className='flex h-full w-full items-center gap-[10px] rounded-[6px] bg-main-blue px-[15px] py-[13px] font-proxima text-[20px] font-bold text-white'
    >
      {title}
      <Arrow className='h-[24px] w-[24px]' />
    </Link>
  );
};
