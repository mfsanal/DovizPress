import React, { useEffect } from 'react';
import {Card, Table} from "react-bootstrap";
import {getAllDoviz} from "store/action";
import { useDispatch, useSelector } from "react-redux";
import { getDovizIcon, nameToSlug} from "utils";
import 'styles/pages/match_list.scss';
import moment from "moment";

const DovizList = ({bankType, bankDay}) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.doviz);

    const reOrderList = data => {
        if (data && data.length>0){
            return data
        } else {
            return [{
                code:-99,
                name:null,
                buy:null,
                sell:null
            }]
        }
    };

    const getData =()=> {
        let day =  bankDay === 'Bugun' ? moment().format('DD-MM-YYYY') : bankDay;
        dispatch(getAllDoviz(nameToSlug(bankType), day));
    }

    useEffect( () => {
        getData();
        const interval = setInterval(() => {
            getData();
        }, 15 * 60 * 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, []);

    return <Card body>
        {console.log(reOrderList(data))}
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                <th>#</th>
                <th>Para Birimi</th>
                <th>Alış</th>
                <th>Satış</th>
            </tr>
            </thead>
            <tbody>
                {
                    reOrderList(data).map( (item,index) =>{
                        if(item.code === -99)
                            return <tr>
                                <td colSpan={4} style={{textAlign:'center'}}> Veri Bulunamadı </td>
                            </tr>;
                        else
                            return <tr>
                                <td>{index+1}</td>
                                <td>{ getDovizIcon(item.code) } {item.name}</td>
                                <td>{item.buy}</td>
                                <td>{item.sell}</td>
                            </tr>
                    })
                }
            </tbody>
        </Table>
    </Card>;
};
//https://www.tcmb.gov.tr/kurlar/kurlar_tr_dosyalar/images/USD.gif

export { DovizList }