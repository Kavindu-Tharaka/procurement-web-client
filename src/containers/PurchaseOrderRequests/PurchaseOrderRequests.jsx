import React from 'react';
import { useEffect } from 'react';

// Component
import PurchaseOrderRequestsContent from '../../components/PurchaseOrderRequestsContent/PurchaseOrderRequestsContent';

const PurchaseOrderRequests = (props) => {
    useEffect(() => {
        props.setShowSubMenu(true);
    });

    return <PurchaseOrderRequestsContent/>;
};

export default PurchaseOrderRequests;
