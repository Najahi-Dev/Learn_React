
import styled from 'styled-components';
import './App.css'
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const handleMinusButtonClick = () => {
    setNumber(preNumber => preNumber - 1);
  }
  
  const handlePlusButtonClick = () => {
    setNumber(preNumber => preNumber + 1);
  }

  return (
    <AppStyle>
      <div class="minus box box-btn" onClick={handleMinusButtonClick}>-</div>
      <div class="number box">{number}</div>
      <div class="plus box box-btn" onClick={handlePlusButtonClick}>+</div>
    </AppStyle>
  )
}

const AppStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;


  .box{
    /* border: 1px solid #000; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    font-size: 100px;
    user-select: none;
  }

  .box-btn{
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #cecece;
    width: 200px;

    &:hover {
      background-color: #9c9c9c;
    }

    &:active {
      background-color: #e6e5e5;
    }
  }
`;

export default App
