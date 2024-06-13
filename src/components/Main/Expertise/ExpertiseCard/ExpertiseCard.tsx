import TriangeIcon from '@/public/assets/images/icons/triangle.svg';
import { IImage } from '@/src/utils/types';
import Image from 'next/image';

interface Props {
  title: string;
  image: IImage;
  isEven?: boolean;
  subData: SubData[];
}

interface SubData {
  id: number;
  title: string;
}

export const ExpertiseCard = ({
  title,
  subData,
  image,
  isEven = false,
}: Props) => {
  return (
    <div
      className={`delay-300 group flex overflow-hidden bg-[linear-gradient(to_right,var(--dark-blue)_50%,white_50%)] bg-[length:200%_100%] transition-all duration-500 hover:bg-[position:-100%_0] hover:text-text-dark hover:delay-0 ${isEven && 'flex-row-reverse'}`}
    >
      <div className='relative flex w-full flex-col gap-[40px] px-[20px] py-[36px] tablet:w-[50%] desktop:px-[60px] desktop:py-[34px]'>
        <h3 className='relative z-10 font-unbound text-[24px] font-bold uppercase leading-[1.16] desktop:text-[38px]'>
          {title}
        </h3>
        <span className='relative z-10 block h-[1px] w-[98px] bg-white' />
        <ul className='relative z-10 flex flex-col gap-[19px]'>
          {subData.map((item) => (
            <li key={item.id} className='flex items-center gap-[19px]'>
              <TriangeIcon className='h-[18px] w-[18px]' />
              <p className=' font-proxima text-[20px] leading-[1.2] desktop:text-[24px] '>
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        <div className='brief-stroke absolute bottom-0 right-0 font-unbound text-[163px] font-bold uppercase leading-[0.7] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:delay-300'>
          brief
        </div>
      </div>
      <div className='relative hidden w-[50%] overflow-hidden tablet:block'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={`image ${title}`}
          className='absolute left-0 top-0'
        />
      </div>
    </div>
  );
};
