import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        Product Name: { this.props.product.name }
                        <br/>
                        Product Cost: { this.props.product.cost }
                        <hr/>
                        <button onClick={() => this.props.changeCost(5)} className="btn btn-primary">Increase Cost</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    product: PropTypes.object
}

