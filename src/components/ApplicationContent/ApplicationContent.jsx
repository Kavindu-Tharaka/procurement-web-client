import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//components
import PurchaseOrderRequests from '../../containers/PurchaseOrderRequests/PurchaseOrderRequests';

import './applicationContent.css';


const ApplicationContent = (props) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <div
            className={
                showSubMenu
                    ? 'ac-main-container-with-side-menu'
                    : 'ac-main-container-without-side-menu'
            }
        >
            <Switch>
            <Route
                    path="/purchace-order-requests"
                    component={() => (
                        <PurchaseOrderRequests setShowSubMenu={setShowSubMenu} />
                    )}
                />
                <Route
                    path="/"
                    // component={() => (
                    //     <WorkingTime setShowSubMenu={setShowSubMenu} />
                    // )}
                />
            </Switch>
        </div>
    );
};

export default ApplicationContent;
