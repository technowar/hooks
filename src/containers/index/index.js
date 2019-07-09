import React from 'react';
import { Button } from 'antd';
import { UseStateValue } from '../../provider';

function Index() {
  const [, dispatch] = UseStateValue();

  function handleButtonClick() {
    dispatch({
      type: 'CHANGE_ITEM_NAME',
      payload: {
        item: 'X',
      },
    });
  }

  return (
    <Button onClick={handleButtonClick}>Set Username</Button>
  );
}

export default Index;
