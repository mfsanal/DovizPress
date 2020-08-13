import React from 'react';
import { subDays, format, getDay } from 'date-fns'
import tr from 'date-fns/locale/tr'
import DatePicker, {setDefaultLocale} from "react-datepicker";
import moment from "moment";
import 'styles/pages/match_list.scss';
import "react-datepicker/dist/react-datepicker.css";
import {
    Button,
    Card,
    Col,
    Container,
    DropdownButton,
    Dropdown,
    Row, Table
} from "react-bootstrap";
import {
    getDropdownItem,
    getNewDate,
    getPathValue,
    goPage,
    slugToName,
    disabledDays
} from "utils";
import {DovizList} from "components";

const Home = () => {
    const bankType = getPathValue(2) === '' ? 'Central Bank' : slugToName(getPathValue(2));
    const bankDay = getPathValue(1) === '' ? 'Bugun' : getPathValue(1);
    const selectedDate = bankDay === 'Bugun' ? new Date() : getNewDate(bankDay);
    const selectedBank = getDropdownItem(bankType);

    setDefaultLocale(tr)

    const disabledRules = date => {
        const day = getDay(date);
        return day !== 0 && day !== 6 && !disabledDays.includes(format(date,'yyyy-MM-dd'));
    }

    const DPB = ({ value, onClick }) => <Button
        variant="outline-info"
        className="dpb"
        onClick={onClick}
        size="sm"
    >
        {value}
    </Button>;

    return <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <Card body className='live-score-menu-item'>
                            <DropdownButton
                                size="sm"
                                variant="outline-info"
                                title={selectedBank}
                            >
                                <Dropdown.Item onClick={ () => goPage('Central Bank',bankDay) }>
                                    { getDropdownItem('Central Bank') }
                                </Dropdown.Item>
                                <Dropdown.Item onClick={ () => goPage('Serbest Piyasa',bankDay) }>
                                    { getDropdownItem('Serbest Piyasa') }
                                </Dropdown.Item>
                            </DropdownButton>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card body className='live-score-menu-item'>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={selectedDate}
                                filterDate={disabledRules}
                                minDate={subDays(new Date(), 90)}
                                maxDate={new Date()}
                                onChange={date => goPage(bankType, moment(date).format("DD-MM-YYYY")) }
                                customInput={ <DPB /> }
                            />
                        </Card>
                    </Col>
                </Row>
                <br/>
                <DovizList bankType={bankType} bankDay={bankDay} />
                <br />
            </Col>
        </Row>
    </Container>;
};

export { Home };