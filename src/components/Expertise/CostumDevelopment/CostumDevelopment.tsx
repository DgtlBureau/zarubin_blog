import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';

export const CostumDevelopment = () => {
  const tags = [
    'Tailored software solutions',
    'Enhanced efficiency and productivity',
    'Competitive edge',
  ];

  const description = {
    descr1:
      'Custom Development tailors software solutions to meet specific business needs, enhancing operational efficiency and providing a competitive edge.',
    descr2:
      "Custom Development focuses on creating software solutions that are specifically designed to meet your business's unique requirements. This approach ensures that the software aligns perfectly with your operational processes, enhancing efficiency and productivity. By developing custom solutions, you gain a competitive edge through unique functionalities and features that are not available in off-the-shelf software. This leads to better performance, streamlined operations, and ultimately, increased profitability.",
  };

  return (
    <ComponentContainer light={true}>
      <TitleContent title='Custon Development' tags={tags} />
      <div>
        <DescriptionContent
          description={description.descr1}
          subDescription={description.descr2}
        />
      </div>
    </ComponentContainer>
  );
};