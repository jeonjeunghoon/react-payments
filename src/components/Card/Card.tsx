import { CardInfo } from '../../types/state';

import * as styled from './Card.styled';

export interface CardProps {
  cardInfo: CardInfo;
  bgColor: string;
}

const Card = ({ cardInfo, bgColor }: CardProps) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInformationContainer>
        <styled.CardNumber>
          <input disabled defaultValue={cardInfo.cardNumbers.firstCardNumber} />
          <input disabled defaultValue={cardInfo.cardNumbers.secondCardNumber} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.thirdCardNumber} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.fourthCardNumber} />
        </styled.CardNumber>
        <styled.CardNameAndExpirationDateContainer>
          <styled.CardName>{cardInfo.ownerName ?? 'NAME'}</styled.CardName>
          <styled.ExpirationDate>{`
					${cardInfo.expirationDate.month ?? 'MM'}/${cardInfo.expirationDate.year ?? 'YY'}
					`}</styled.ExpirationDate>
        </styled.CardNameAndExpirationDateContainer>
      </styled.CardInformationContainer>
    </styled.Card>
  );
};

export default Card;
