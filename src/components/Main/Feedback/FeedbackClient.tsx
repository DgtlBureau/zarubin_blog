'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { IFeedback } from '@/src/utils/types';
import { useState } from 'react';
import styles from './Feedback.module.css';
import { FeedbackCard } from './FeedbackCard/FeedbackCard';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

interface Props {
  feedback: IFeedback[];
}

export const FeedbackClient = ({ feedback }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Feedback</h2>

        <NextPrevBtn
          nextPage={() => swiper?.slideNext()}
          prevPage={() => swiper?.slidePrev()}
        />
      </div>
      <Swiper onSwiper={setSwiper} className='max-w-full'>
        {feedback.map((item, index) => (
          <SwiperSlide key={item.id}>
            <FeedbackCard
              data={item}
              length={feedback.length}
              indexNumber={index + 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
