import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                <h1>Shop Page</h1>
            </div>
        );
    }
}

export default ShopPage;