import { ChangeEvent, useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { EXPIRATION_DATE } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';

import * as styled from './ExpirationDateBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';

const ExpirationDateBox = () => {
  const { expirationDate, setExpirationDate, serialNumbers } =
    useContext(CardContext);
  const { validate, isError } = useInputValidator(
    isNumeric,
    EXPIRATION_DATE.MAX_LENGTH
  );

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!validate(value)) {
      return;
    }

    setExpirationDate({
      ...expirationDate,
      [name]: value,
    });
  };

  return (
    <styled.ExpirationDateBox>
      <label>
        <commonStyled.LabelTextParagraph>
          <span>만료일</span>
        </commonStyled.LabelTextParagraph>
        <styled.InputBox>
          {Object.entries(expirationDate).map(([key, value]) => {
            const placeholder = key === 'month' ? 'MM' : 'YY';
            const isMonthInput = key === 'month';
            const isSerialNumbersFull =
              serialNumbers.fourthSerialNumber.length === 4;

            return (
              <Input
                key={key}
                inputmode="numeric"
                name={key}
                value={value ?? ''}
                onChange={handleInputChange}
                width="s"
                type="text"
                maxLength={2}
                placeholder={placeholder}
                isFocus={isMonthInput && isSerialNumbersFull}
                isError={isError}
              />
            );
          })}
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph isError={isError}>
        {ERROR_MESSAGE.SHOULD_NUMBER}
      </commonStyled.ErrorMessageParagraph>
    </styled.ExpirationDateBox>
  );
};

export default ExpirationDateBox;
