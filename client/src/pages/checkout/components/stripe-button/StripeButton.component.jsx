import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VrxaiUkkPtJPk6cnGHnWRMzk00JQ4d4gbF';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(() => alert('Payment successful.'))
        .catch(error => {
            console.error(`Payment Error: ${ error }`);
            alert('There was an issue with your payment. Please use the provided credit card.');
        });
    }

    return <StripeCheckout
        label="Pay Now"
        name="CROWN COMMERCE Ltd."
        billingAddress
        shippingAddress
        /* image="http://svgshare.com/i/CUz.svg" */
        description={ `Your total is $${ price }` }
        amount={ priceForStripe }
        panelLabel="Pay Now"
        token={ onToken }
        stripeKey={ publishableKey }
    />
}

export default StripeButton;