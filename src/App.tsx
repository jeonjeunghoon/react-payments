import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import { useState } from 'react';
import Header from './components/Header/Header';

interface Numbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface ExpirationDate {
  month: string;
  year: string;
}

interface Password {
  first: string;
  second: string;
}

export interface CardInfo {
  numbers: Numbers;
  expirationDate: ExpirationDate;
  securityCode: string;
  password: Password;
  ownerName?: string;
}

const App = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MyCardPage cardList={cardList} />} />
          <Route path="/register" element={<CardRegisterPage setCardList={setCardList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
