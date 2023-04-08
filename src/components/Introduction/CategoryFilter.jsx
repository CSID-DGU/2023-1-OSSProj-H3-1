import React, { useState, useEffect } from 'react';
import { dbService } from '../../fbase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { CategoryBtn, CategoryWrap } from './styles';
import BoothCard from './BoothCard';
import { BoothCardContainer } from './styles';

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, 'booth'));
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  // 카테고리
  const categories = [
    '전체',
    'IT',
    '문화·예술·공연',
    '봉사·사회활동',
    '학술·교양',
    '창업·취업',
    '체육',
    '친목',
  ];

  // 카드보이게
  const visibleCards =
    selectedCategory === '전체'
      ? nweets
      : nweets.filter((card) => card.category === selectedCategory);

  const handleClick = (category) => {
    if (selectedCategory === category) {
      // setSelectedCategory(null);
      // onCategoryChange(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <CategoryWrap>
        {categories.map((category, index) => (
          <CategoryBtn
            key={category}
            onClick={() => handleClick(category)}
            active={selectedCategory === category}
          >
            {category}
          </CategoryBtn>
        ))}
      </CategoryWrap>
      <BoothCardContainer>
        {visibleCards.map((boo) => {
          return (
            <>
              <BoothCard
                key={boo.title}
                title={boo.title}
                intro={boo.hashtag}
                image={boo.attachmentUrl2}
              />
            </>
          );
        })}
      </BoothCardContainer>
    </>
  );
};

export default CategoryFilter;
