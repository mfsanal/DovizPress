import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const Yasal = () => {
    return <Container>
        <Row>
            <Col md={12}>
                <Card body style={{textAlign:'center'}}>
                    <h1>Yasal Bilgilendirme</h1>
                    <p>
                        Doviz.press (DP) 'deki doviz bilgileri <strong>SADECE BİLGİ AMAÇLIDIR.</strong><br/>
                        SKN Bilgilerin tutarlılığı konusunda garanti veremez.<br/>
                        SKN Açık kaynak kodlu bir sitedir<br/>
                        GITHUB : <a href="https://github.com/mfsanal/DovizPress">https://github.com/mfsanal/DovizPress</a>
                    </p>
                </Card>
            </Col>
        </Row>
    </Container>;
};

export {Yasal}