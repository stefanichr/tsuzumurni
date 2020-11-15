import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Label} from 'reactstrap';
import CardComp from './CardComp';
function AboutComp() {
    return (
        <div>
          <Jumbotron style={{backgroundColor: '#FFA500',textAlign:'center'}}>
                <h1 className="display-3">PROFIL Tsuzu Murni </h1>
                <hr className="my-2" />
                <p>est 2020</p>
            </Jumbotron> 
            <Container>
                <Row>
                    <Col>
                        <Label>
                        Tsuzu Murni adalah kedai yang menyediakan beberapa makanan dan minuman yang berdiri sejak 2020. <br></br>
                        Produk Tsuzu Murni berupa : <br></br>
                        - Susu Sapi Murni <br></br>
                        - Roti Bakar Manis & Asin <br></br>
                        - Canai<br></br>
                        - Pisang Bakar<br></br>
                        - Ketan Susu<br></br>
                        - Indomie<br></br>
                        - Ricebowl<br></br>
                        - Camilan<br></br>
                        </Label>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutComp
