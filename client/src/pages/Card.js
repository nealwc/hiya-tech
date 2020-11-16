import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, CardColumns } from 'react-bootstrap';
import moment from 'moment';
import TabsBar from '../components/Tabs'

import * as API from '../utils/API';

function AllItems() {
  const [items, setItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();

  useEffect(() => {
    loadItems()
  }, [currentFilter])

  function loadItems() {
    API.getAllItems()
      .then(res => {
        const sorted = res.data.sort((i1, i2) => moment(i2.date) - moment(i1.date))
        if (currentFilter) {
          const filteredItems = sorted.filter(item => {
            return item.category === currentFilter
          })
          setItems(filteredItems)
        }
        else {
          setItems(sorted)
        }
      })
  }

  const itemFilter = (event) => {
    console.log("clicked!")
    event.preventDefault();
    const filterCategory = event.target.value
    console.log(filterCategory)
    setCurrentFilter(filterCategory)
  }

  return (
    <>
      <Container style={{ width: '100%' }}>
        <TabsBar
          itemFilter={itemFilter} />
        <Row>
          <Col>
            <CardColumns>
              {items.map((item) => {
                return (
                  <Card border="primary" bg="dark" text="light" style={{ padding: "20px", margin: "20px" }}>
                    <Card.Header style={{ fontSize: "25px" }}>{item.user.username}
                    </Card.Header>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Description: {item.description}</Card.Text>
                      <Card.Text>Price: ${item.price}</Card.Text>
                      <a href={`mailto: ${item.user.email}`} style={{ color: "white", fontSize: "45px" }}>&#9993;</a>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllItems;