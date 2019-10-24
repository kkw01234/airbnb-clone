import React from "react";
import { Component,StarComponent,NameDiv,ContentComponent,ContentDiv } from "./style";
import StarRating from "react-star-ratings";

export const Accommodation = (props) => {
  return (
    <Component>
      <ContentComponent>
        <StarComponent>
          <StarRating
            rating={props.accommodation.rating}
            starRatedColor="pink"
            numberOfStars={5}
            name="rating"
            starSpacing="0.1rem"
            starDimension="1rem"
          />
          <div>{props.accommodation.rating}</div>
        </StarComponent>
        <NameDiv>{props.accommodation.name}</NameDiv>
        <ContentDiv>인원 {props.accommodation.min_person}~{props.accommodation.max_person}명 / 침실 : {props.accommodation.room_count} / 욕실 : {props.accommodation.bathroom_count}</ContentDiv>
        <ContentDiv>가격 : {props.accommodation.price}</ContentDiv>
      </ContentComponent>
      <div>
        <div><img src={props.accommodation.image} width="300rem"></img></div>
      </div>
    </Component>
  );
};
