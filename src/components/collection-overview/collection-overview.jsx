import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import CollectionPreview from './../collection-preview/collection-preview'
import { selectCollectionsForPreview } from '../../redux/shop/selector-shop';
import {CollectionsOverviewContainer} from './style-collection-overview';




const CollectionOverview =({collections}) =>(
    <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview)