import styled, { css, useTheme } from 'styled-components'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from '../../../assets/icons'


import { getDesktopStyles } from '../../../styles/breakpoints'

// import { Review } from '../../../components/Review'




export const Reviews = () => {
    const { colors } = useTheme();
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  };

  const prevReview = () => {
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );
  };

  return (
    <Container>
      <ReviewsTitle>reviews</ReviewsTitle>
      <WrapperReviewConteiner>
        {reviews
          .slice(
            currentReview,
            currentReview + (window.innerWidth >= 1280 ? 2 : 1)
          )
          .map(review => (
            <ReviewContainer key={review.id}>
              <FlexConteiner>
                <Avatar src={review.avatar} alt={review.name} />
                <Name>{review.name}</Name>
              </FlexConteiner>
              <Rating>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    active={index < review.rating}
                    onClick={() => console.log(`Rating: ${index + 1}`)}
                  >
                    ★
                  </Star>
                ))}
              </Rating>

              <ReviewText>{review.text}</ReviewText>
            </ReviewContainer>
          ))}
      </WrapperReviewConteiner>
      <ButtonContainer>
        <Button onClick={prevReview}>
                  <ArrowLeft color={colors.black} />
        </Button>
        <Button onClick={nextReview}>
          <ArrowRight color={colors.black} />
        </Button>
      </ButtonContainer>
    </Container>
  );
};



export const ReviewsTitle = styled.h2`
  width: 129px;
  height: 32px;
  margin-top: 64px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #3E85F3;

  ${getDesktopStyles(css`
    width: 184px;
    height: 44px;
    font-size: 40px;
    line-height: 44px;
  `)}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  max-width: 335px;
  height: auto;
  text-align: center;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 10px;
  padding: 25px;

 ${getDesktopStyles(css`
   max-width: 504px;
  `)}
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h3`
  margin-top: 10px;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 60px;
  margin-top: 0;
`;

export const Star = styled.span`
  margin: 0 5px;
  font-size: 15px;
  color: ${props => (props.active ? '#FFC107' : '#E0E0E0')};
  cursor: pointer;
`;

export const ReviewText = styled.p`
  margin: 10px 0;
  width: 100%;
  height: 36px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);
  height: auto;
  text-align: start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 80px;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`;

export const FlexConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const WrapperReviewConteiner = styled.div`
  display: flex;
  flex-direction: column;

   ${getDesktopStyles(css`
   display: flex;
    flex-direction: row;
  `)}
`;