import { Form } from './Form/Form';
import { ContractFormTemplate } from '../../shared/ContactFormTemplate/ContractFormTemplate';

export const ContactForm = () => {
  return (
    <ContractFormTemplate
      title={
        <h2 className='font-unbound text-[32px] font-bold uppercase text-slate-900 tablet:text-[50px] desktop-big:text-[70px]'>
          We are always glad to have new partners and ambitious tasks.
        </h2>
      }
    >
      <Form />
    </ContractFormTemplate>
  );
};
