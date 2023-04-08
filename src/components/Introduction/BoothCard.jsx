import React from 'react';
import Card from './styles';

const BoothCard = ({ title, intro, image }) => {
  const handleButtonClick = () => {};

  return (
    <>
      <Card
        title={title}
        text={intro}
        image={image}
        onClick={handleButtonClick}
      />
    </>
  );
};

export default BoothCard;
