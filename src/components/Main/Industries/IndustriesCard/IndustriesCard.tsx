import Arrow from '@/public/assets/images/icons/link_arrow.svg';
import TriangeIcon from '@/public/assets/images/icons/triangle.svg';
import Link from 'next/link';

interface Props {
  title: string;
  link: string;
  data: Data[];
}

interface Data {
  id: number;
  title: string;
}

export const IndustriesCard = ({ title, data, link }: Props) => {
  const btnTitle = title.split(' ')[0];
  const moreThanFour = data.length > 4;

  return (
    <div className='relative z-20 flex flex-col gap-[40px]'>
      <h2 className='break-words font-unbound text-[70px] font-bold leading-[1] text-text-dark tablet:text-[90px] desktop:text-[100px]'>
        {title}
      </h2>
      <ul
        className={`flex flex-col gap-[20px] ${moreThanFour && 'tablet:grid tablet:grid-cols-2'}`}
      >
        {data.map((item) => (
          <li key={item.id} className='flex items-center gap-[20px]'>
            <TriangeIcon className='h-[18px] w-[18px]' />
            <p className='relative font-proxima text-[20px] leading-[1.2] text-text-dark desktop:text-[28px]'>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href={link}
        className='flex w-fit items-center justify-center gap-[10px] rounded-[5px] bg-main-blue p-[13px_15px] font-proxima text-[20px] font-bold tablet:mt-[92px] tablet:h-[112px] tablet:min-w-[407px] tablet:text-[40px] desktop:mt-[20px]'
      >
        {`${btnTitle} solutions`}
        <Arrow className='h-[24px] w-[24px] tablet:h-[auto] tablet:w-[44px]' />
      </Link>
    </div>
  );
};