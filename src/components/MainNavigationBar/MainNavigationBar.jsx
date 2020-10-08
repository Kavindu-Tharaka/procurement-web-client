import React from 'react';
import { Link } from 'react-router-dom';

import {
    FaRegCalendarAlt,
    FaChalkboardTeacher,
    FaUserFriends,
    FaChartPie,
    FaTh,
    FaBuilding,
    FaBook,
    FaTags,
	FaClock,
	FaLock,
    FaExclamationTriangle,
    FaWarehouse,
} from 'react-icons/fa';

import { GoTasklist } from 'react-icons/go';
import { MdCompareArrows } from 'react-icons/md';
import { ImExit } from "react-icons/im";

import './mainNavigationBar.css';

const MainNavigationBar = (props) => {
    const iconSize = '30px';
    const iconColor = '#fff';

    return (
        <div className="mnb-nav-container">
            <header>
                <img
                    src={'https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=100'}
                    alt="admin"
                    className="side-bar-profile-image rounded-circle"
                />
                <p className="no-margin sidebar-user-name">
                    {'John Doe'}
                </p>
                <p className="no-margin sidebar-user-email">
                    {'john@email.com'}
                </p>
                <button className="side-nav-logout-btn">
                    <ImExit size={15} color={`${iconColor}`} /> Logout
                </button>
            </header>

            <Link to="/purchace-order-requests">
                <div
                    className={`mnb-nav-link-container ${
                        props.selectedMainLink === 'purchace-order-requests'
                            ? 'mnb-nav-link-container-active'
                            : null
                    }`}
                    onClick={() =>
                        props.setSelectedMainLink('purchace-order-requests')
                    }
                >
                    <GoTasklist size={`${iconSize}`} color={`${iconColor}`} />
                    <p className="mnb-nav-link-text">Purchace Order Requests</p>
                </div>
            </Link>

            <Link to="/suppliers">
                <div
                    className={`mnb-nav-link-container ${
                        props.selectedMainLink === 'suppliers'
                            ? 'mnb-nav-link-container-active'
                            : null
                    }`}
                    onClick={() => props.setSelectedMainLink('suppliers')}
                >
                    <FaUserFriends
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                    <p className="mnb-nav-link-text">Suppliers</p>
                </div>
            </Link>

            <Link to="/stock">
                <div
                    className={`mnb-nav-link-container ${
                        props.selectedMainLink === 'stock'
                            ? 'mnb-nav-link-container-active'
                            : null
                    }`}
                    onClick={() => props.setSelectedMainLink('stock')}
                >
                    <FaWarehouse size={`${iconSize}`} color={`${iconColor}`} />
                    <p className="mnb-nav-link-text">Stock</p>
                </div>
            </Link>

            <Link to="/po-vs-dan">
                <div
                    className={`mnb-nav-link-container ${
                        props.selectedMainLink === 'po-vs-dan'
                            ? 'mnb-nav-link-container-active'
                            : null
                    }`}
                    onClick={() => props.setSelectedMainLink('po-vs-dan')}
                >
                    <MdCompareArrows
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                    <p className="mnb-nav-link-text">PO vs DAN</p>
                </div>
            </Link>
        </div>
    );
};

export default MainNavigationBar;
