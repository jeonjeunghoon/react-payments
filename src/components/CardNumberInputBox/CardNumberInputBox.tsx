import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './CardNumberInputBox.styled';
import { isNumeric } from '../../validator';

export interface NumbersState {
  first: string;
  second: string;
  third: string;
  fourth: string;
  [key: string]: string;
}

const CardNumberInputBox = () => {
  const [numbers, setNumbers] = useState<NumbersState>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 4) return;

    setNumbers({
      ...numbers,
      [name]: value,
    });
  };

  return (
    <styled.CardNumberInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.keys(numbers).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                value={numbers[key]}
                onChange={onChange}
                width="xl"
                type="text"
                maxLength={4}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;
