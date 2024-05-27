'use client';
import Facebook from '@/public/assets/images/social/facebook-icon.svg';
import Instagram from '@/public/assets/images/social/instagram-icon.svg';
import Linkedin from '@/public/assets/images/social/linkedin-icon.svg';
import Twitter from '@/public/assets/images/social/twitter-icon.svg';
import { BASE_URL } from '@/src/utils/alias';
import { usePathname } from 'next/navigation';

const SHARING = {
  FACEBOOK_SHARE: 'https://www.facebook.com/sharer/sharer.php?u=',
  TWITTER: 'https://twitter.com/intent/tweet?&url=',
  LINKEDIN_SHARE: 'https://www.linkedin.com/sharing/share-offsite/?url=',
  INSTAGRAM_SHARE: 'https://www.instagram.com/share?url=',
};

const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '';

export const SocialFollow = () => {
  const pathName = usePathname();
  console.log(SHARING.FACEBOOK_SHARE + pathName);

  return (
    <div className='relative flex flex-col gap-[12px] z-[5]'>
      <span className='text-[12px] text-text-dark font-bold tablet:text-[16px]'>
        Did you find this post interesting? Share it!
      </span>
      <ul className='flex gap-[20px]'>
        <li>
          <a
            href={`${SHARING.FACEBOOK_SHARE + URL + pathName}`}
            target='_blank'
            className='z-[20]'
          >
            <Facebook className='w-[24px]' />
          </a>
        </li>
        <li>
          <a href={`${SHARING.TWITTER + URL + pathName}`} target='_blank'>
            <Twitter className='w-[24px]' />
          </a>
        </li>
        <li>
          <a
            href={`${SHARING.INSTAGRAM_SHARE + URL + pathName}`}
            target='_blank'
          >
            <Instagram className='w-[24px]' />
          </a>
        </li>
        <li>
          <a
            href={`${SHARING.LINKEDIN_SHARE + URL + pathName}`}
            target='_blank'
          >
            <Linkedin className='w-[24px]' />
          </a>
        </li>
      </ul>
    </div>
  );
};