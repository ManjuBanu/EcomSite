
import React from 'react';
import {addItem} from './../../redux/cart/act-cart';
import {connect} from 'react-redux';

import { CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer} from './style-collection-item';

export const CollectionItem =({item,addItem}) =>{
    const { name, price, imageUrl } = item;
    return(
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl}/> 
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
            Add to cart
          </AddButton>
        </CollectionItemContainer>
    )
}


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);






