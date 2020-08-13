import React from 'react';
import { Home } from 'pages/Home'
import { Yasal } from 'pages/Yasal'

const E404 = () => {
    return <div align='center'>
        404 - NotFound
    </div>;
};

const ContextComponent = () => {
    let paths = window.location.pathname.split('/');
    switch (paths[1]) {
        case '' : return Home;
        case 'CentralBank' : return Home;
        case 'SerbestPiyasa' : return Home;
        case 'Yasal' : return Yasal;

        default : return E404;
    }
}

export { ContextComponent }
