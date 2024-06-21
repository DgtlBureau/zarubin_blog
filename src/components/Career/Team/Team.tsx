'use client';
import classNames from 'classnames';
import { TeamCardTriangle } from '../../svg/TeamCardTriangle';

type TeamCard = {
  title: string;
  description: string;
  alt?: boolean;
};

const TEAM_CARDS: TeamCard[] = [
  {
    title: 'Tons of cases',
    description:
      'We have been researching and applying the best practices in the industries',
  },
  {
    title: 'We solve complex cases',
    description: 'We find growth points in non-obvious moments',
  },
  {
    title: '15+ experts',
    description:
      'They find solutions to the most difficult business problems and apply them in practice',
    alt: true,
  },
];

export const Team = () => {
  return (
    <div className='flex flex-col gap-[60px]'>
      <h2 className='break-words font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
        a team of experienced pro`s, charged with results
      </h2>
      <div className='grid grid-cols-1 gap-10 desktop:grid-cols-3'>
        {TEAM_CARDS.map((teamCard) => (
          <TeamCard key={teamCard.title} data={teamCard} />
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ data }: { data: TeamCard }) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-[19px] p-10',
        data.alt ? 'relative bg-white text-dark' : 'bg-[--second-blue]',
      )}
    >
      <h4 className='font-unbound text-[32px] font-bold uppercase tablet:text-[44px]'>
        {data.title}
      </h4>

      <p
        className={classNames('font-proxima text-[20px] leading-[1.2]', {
          'max-w-[75%]': data.alt,
        })}
      >
        {data.description}
      </p>
      {data.alt && (
        <div className='absolute bottom-4 right-4 hidden w-[100px] tablet:block desktop:w-[181px]'>
          <TeamCardTriangle />
        </div>
      )}
    </div>
  );
};
