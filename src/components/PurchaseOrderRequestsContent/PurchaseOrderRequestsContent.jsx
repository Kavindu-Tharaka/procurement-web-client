import React, { useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
const axios = require('axios');

function PurchaseOrderRequestsContent() {
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/v1/order/')
            .then(function (response) {
                console.log(response.data.data.orders);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <ContentHeader header="Purchase Order Requests" />
        </div>
    );
}

export default PurchaseOrderRequestsContent;
