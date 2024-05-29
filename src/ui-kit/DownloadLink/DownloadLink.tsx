import DownloadIcon from '@/public/assets/images/icons/download.svg';
import Link from 'next/link';

interface Props {
  link: string;
}

export const DownloadLink = ({ link }: Props) => {
  return (
    <Link
      href={link}
      download
      target='_blank'
      className='mt-[12px] mb-[12px] p-[10px] w-[262px] flex items-start gap-[12px] bg-main-bg  rounded-[5px] tablet:w-[263px] tablet:mb-0 tablet:mt-[20px]'
    >
      <DownloadIcon className='w-[20px] h-[auto]' />
      <div className='flex flex-col gap-[4px] text-white'>
        <span className='font-proxima font-bold text-[12px] leading-[1.33] tablet:text-[20px] tablet:leading-[1]'>
          Download the research
        </span>
        <span className='font-proxima text-[12px] leading-[1.16]'>
          Downloaded 152 times already
        </span>
      </div>
    </Link>
  );
};
