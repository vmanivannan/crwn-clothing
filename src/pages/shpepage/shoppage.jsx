import React from 'react';
import SHOP_DATA from './shoppage.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import './shoppage.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA,
        }
    } 

    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview id={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;