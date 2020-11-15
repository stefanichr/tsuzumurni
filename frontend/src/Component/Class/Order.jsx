import React, { Component } from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Row, Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios'
const api = 'http://localhost:3001'


class Order extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        produk: [],
        tipe: [],
        response:'',
        display:'none',
        activeTab: 1,
        content: [] 
      };
  }
  

  componentDidMount(){
    axios.get(api+'/tampilsemuatipe').then(res=>{
      this.setState({
        tipe: res.data.values
      }) 
    })

    axios.get(api+'/tampilsemuamenu').then(res=>{
      this.setState({
        produk: res.data.values
      }) 

      this.product()
    })

  
  }

  
  toggleButton (param) {
    this.setState({
      activeTab: param
    }) 
    this.product(param)
  }

  addToChart (param) {
   console.log(param)
  }

  product(param=1) {
    let content = [];
    let col = [];
    let j = 0

    this.state.produk.forEach((product,i) =>{
      if(product.tipe == param) {
        console.log('asu')
        j++
        if((j+1) % 3 == 0){

          content.push(
            <Row key={product.id}>  
                {col}
            </Row>   
          )
        }
        col.push(<Col sm="3"  key={product.id}>
            <Card>
                <CardImg top width="100%" src={product.img} alt="Card image cap" />
                <CardBody>
                <CardTitle>{product.menu}</CardTitle>
                        <CardSubtitle>{product.harga}</CardSubtitle>
                <CardText>{product.deskripsi}</CardText>
                        <Button onClick={() => this.addToChart(product.id)}>Order</Button>
                        </CardBody>
            </Card>
            </Col>); 
      }
        
    });

    this.setState({
      content: content
    }) 

  }
  
  render() {
    return (
      <div>
        <Nav tabs>
        {this.state.tipe.map(tipe =>
          <NavItem key ={tipe.id}>
            <NavLink
              className={classnames({ active: this.state.activeTab === tipe.id })}
              onClick={() => this.toggleButton(tipe.id)}
            >
              {tipe.tipe}
            </NavLink>
          </NavItem>
        )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={this.state.activeTab}>
            {this.state.content}
          </TabPane>
        </TabContent>
      </div>
    );
}
}



export default Order
