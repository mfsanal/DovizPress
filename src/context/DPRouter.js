import React from 'react';
import {
    Container,
    Nav,
    Navbar
} from "react-bootstrap";
import {Route} from "react-router-dom";
import {ContextComponent} from "context/contextComponents";
import {Icon} from "components";
import {Img} from "react-image";

const DPRouter = ({ ...rest}) => {

    const RouterComponent = ContextComponent();

    return <Route {...rest} render={ matchProps => (
        <>
            <Navbar bg="light" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="/" className="mr-md-auto">
                        <Img
                            src={ process.env.PUBLIC_URL + '/image/logo.png' }
                            loader={<Icon item='spinner fa-spin' />}
                            unloader={<Icon item='exclamation-triangle' />}
                            alt={'Doviz Press - DP'}
                            title={'Doviz Press - DP'}
                            height={'40'}
                        />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/">Anasayfa</Nav.Link>
                        <Nav.Link href="/Yasal">Yasal</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>

            <RouterComponent { ...matchProps } />
        </>
    )} />;
};

export { DPRouter };