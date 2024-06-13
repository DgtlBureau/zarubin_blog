import Image from 'next/image';

export const Unlock = () => {
  return (
    <div className='junstify-center flex h-full flex-col items-center'>
      <Image
        src='/assets/images/main/group.png'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
        alt=''
        className='absolute bottom-0 right-0 opacity-[3%]'
      />
      <h2 className='relative z-[5] py-[170px] font-unbound text-[40px] font-bold uppercase tablet:text-[60px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
        Unlock Your Business Potential <br /> with Our Expertise and
        <p className='text-stroke text-[40px] tablet:text-[60px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
          Strategic Insights
        </p>
      </h2>
    </div>
  );
};
