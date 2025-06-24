import React, { useEffect, useState } from "react";
import { getCars } from "../api";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./CarList.css"; // ⬅️ Make sure to import the CSS file

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars()
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Car List</h2>
      <Row>
        {cars.map((car) => (
          <Col md={4} key={car._id} className="mb-4">
            <Card className="zoom-card">
              <Card.Body>
                <Card.Title>
                  {car.brand} {car.model}
                </Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {car.year}
                  <br />
                  <strong>Fuel:</strong> {car.fuel_type}
                  <br />
                  <strong>Price:</strong> ₹{car.price}
                  <br />
                  <strong>Status:</strong> {car.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
