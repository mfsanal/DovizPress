import { history } from 'utils';
import {Img} from 'react-image'
import React from "react";
import {Icon} from "components";

export const historyPush = (path, params=null) => {
    history.push(path,params);
};
export const objectToArray = obj => {
    let tmp = [];
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            tmp.push({
                key:k,
                val:obj[k]
            });
        }
    }
    return tmp;
};
export const trimSpaces = text => {
    return text.replace(/\s+/g, '');
}
export const onlyNumber = str => {
    return str.replace(/[^0-9]+/g, '');
};
export const nameToSlug = str => {
    return trimSpaces(str);
};
export const slugToName = slug => {
    return slug.split(/(?=[A-Z])/).join(" ");
};

export const getPathValue = (size) => {
    let path = window.location.pathname.split('/');
    return path[path.length-size];
};
export const convertFileSize = fileSize => {
    return ( fileSize / 1000000 ).toFixed(2);
};
export const goPage = (bank, date) => {
    window.location.href = '/' + nameToSlug(bank) + '/' + date;
};
export const getNewDate = date => {
    let d = date.split("-")
    return new Date(d[2],d[1]-1,d[0])
};
export const nameToIcon = name => {
    switch (name) {
        case 'Central Bank': return 'bank';
        case 'Serbest Piyasa': return 'balance-scale';
        default: return 'exclamation-triangle';
    }
};
export const getDropdownItem = bankType => {
    return <>
        <Icon item={nameToIcon(bankType)} /> &nbsp; { bankType }
    </>;
}
export const getSportIcon = icon => {
    return <Img
        src={ process.env.PUBLIC_URL + '/image/' + icon +'.png' }
        loader={<Icon item='spinner fa-spin' />}
        unloader={<Icon item='exclamation-triangle' />}
        alt={icon}
        title={icon}
    />;
}
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
export const getDovizIcon = (icon) => {
    if (icon)
        return <Img
            src={'https://www.tcmb.gov.tr/kurlar/kurlar_tr_dosyalar/images/' + icon + '.gif'}
            loader={<Icon item='spinner fa-spin'/>}
            unloader={<Icon item='globe'/>}
        />;
    else
        return <Img
            src={<Icon item='globe'/>}
            loader={<Icon item='spinner fa-spin'/>}
            unloader={<Icon item='globe'/>}
        />;
}
export const MMCBlink = time => {
    return (
        time === 'Maç Sonucu'
        || time === 'Başlamadı'
        || time === 'Ertelendi'
        || time === 'İptal'
        || time === 'Penaltılar'
        || time === 'Çekildi'
    )
        ? ''
        : ' blink';
}