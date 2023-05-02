import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';
import { CARD_COMPANY_INFO } from '../../constants/cardCompany';

import * as styled from './CardCompanyContents.styled';
import CardCompanyButton from '../CardCompanyButton/CardCompanyButton';

const CardCompanyContents = () => {
  const { setCardCompany } = useContext(CardInfoContext);

  return (
    <styled.CardCompanyContents>
      {CARD_COMPANY_INFO.map(companyInfo => {
        return (
          <CardCompanyButton
            key={companyInfo.NAME}
            Logo={<companyInfo.LOGO />}
            name={companyInfo.NAME}
            theme={companyInfo.THEME}
            setCardCompany={setCardCompany}
          />
        );
      })}
    </styled.CardCompanyContents>
  );
};

export default CardCompanyContents;
