import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='sticky bottom-0 w-full h-[78px] p-[0_24px] bg-slate-800 desktop:p-[0_144px] flex justify-between text-[14px] leading-[1.2] desktop:text-[18px] desktop:leading-[1.1] items-center desktop:h-[82px]'>
      <span className='text-red'>&#169; 2024</span>
      <Link href='https://zarubin.co.uk/policy_en' target='_blank' className=''>
        Policy Privacy
      </Link>
    </footer>
  );
};
