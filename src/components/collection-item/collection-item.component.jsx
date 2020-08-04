import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  BackgroundImage,
  AddButton,
  CollectionFooterContainer,
  Name,
  Price,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <BackgroundImage
      className="image"
      imageUrl={item.imageUrl}
    ></BackgroundImage>
    <CollectionFooterContainer>
      <Name>{item.name}</Name>
      <Price>{item.price}</Price>
    </CollectionFooterContainer>
    <AddButton onClick={() => addItem(item)} inverted>
      ADD TO CART
    </AddButton>
  </CollectionItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
