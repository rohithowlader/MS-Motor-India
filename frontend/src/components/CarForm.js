import React, { useState } from "react";
import { addCar } from "../api";
import { Card, Form, Button, Container, Modal, Alert } from "react-bootstrap";

const CarForm = () => {
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    fuel_type: "",
    price: "",
    status: "available",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const err = {};
    if (!form.brand) err.brand = "Brand is required";
    if (!form.model) err.model = "Model is required";
    if (!/^\d{4}$/.test(form.year)) err.year = "Year must be 4 digits";
    if (!form.fuel_type) err.fuel_type = "Fuel type is required";
    if (!form.price || isNaN(form.price)) err.price = "Valid price is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      addCar(form)
        .then(() => {
          setShowModal(true);
          setForm({
            brand: "",
            model: "",
            year: "",
            fuel_type: "",
            price: "",
            status: "available",
          });
        })
        .catch((err) => {
          setErrors({
            submit: err.response?.data?.error || "Submission failed",
          });
        });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h2 className="mb-3">Add New Car</h2>
        {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name="brand"
              value={form.brand}
              onChange={handleChange}
            />
            {errors.brand && (
              <small className="text-danger">{errors.brand}</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              name="model"
              value={form.model}
              onChange={handleChange}
            />
            {errors.model && (
              <small className="text-danger">{errors.model}</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              value={form.year}
              onChange={handleChange}
            />
            {errors.year && (
              <small className="text-danger">{errors.year}</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control
              name="fuel_type"
              value={form.fuel_type}
              onChange={handleChange}
            />
            {errors.fuel_type && (
              <small className="text-danger">{errors.fuel_type}</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              value={form.price}
              onChange={handleChange}
            />
            {errors.price && (
              <small className="text-danger">{errors.price}</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="available">Available</option>
              <option value="sold">Sold</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="primary">
            Add Car
          </Button>
        </Form>
      </Card>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Car added successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CarForm;
