import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import { createWaybill } from '../api';
import { useReactToPrint } from 'react-to-print';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import logger from '../styles/loadingBtn.gif'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function SignUpForm() {
  const user = JSON.parse(localStorage.getItem('data'));
  const [grossWeight, setGrossWeight] = useState('');
  const [truckWeight, setTruckWeight] = useState('');
  const history = useHistory();
  console.log("Create Page")
  const [waybillData, setWaybillData] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleGrossWeightChange = (e) => {
    setGrossWeight(e.target.value);
    handleChange(e)
  };

  const handleTruckWeightChange = (e) => {
    setTruckWeight(e.target.value);
    handleChange(e)
  };

  const calculateNetWeight = () => {
    if (grossWeight && truckWeight) {
      return parseFloat(grossWeight) - parseFloat(truckWeight);
    }
    return '';
  };

  const handlePrint = useReactToPrint();

  const handleSubmit = async (e) => {
    setSubmitDisabled(true);
    setLoading(true)
    e.preventDefault();
     // Check if any field is empty
     if (!waybillData.firstName || !waybillData.lastName || !waybillData.truckSize || !waybillData.truckWeight || !waybillData.truckGross || !waybillData.itemDesc) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Check if net weight is equal to or less than 0
    const netWeight = calculateNetWeight();
    if (netWeight <= 0) {
      alert('Truck Weight (Net) must be greater than 0.');
      return;
    }

    let formData = waybillData
    formData.truckNet = netWeight

    console.log(waybillData)
    try {
      // Send the waybillData to the server for processing and save it in the history
      const response = await createWaybill(formData);
      if (response.status) {
        history.push('/');
      }
      console.log('Waybill generated:', response.data);
      // Clear the form
      // setWaybillData({});
    } catch (error) {
      setSubmitDisabled(false);
      setLoading(false)
      alert(error);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWaybillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // if (name === 'grossWeight' || name === 'truckWeight') {
    //   const netWeight = calculateNetWeight();
    //   setWaybillData((prevData) => ({
    //     ...prevData,
    //     truckNet: netWeight,
    //   }));
    // }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (!storedToken) {
        history.push('/login')
    }
}, [history])

  return (
    <div style={{ color: '#000', overflowX: 'hidden', height: '100%', backgroundImage: 'url("https://i.imgur.com/krNCvnr.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WayBill</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto w-75">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/waybill-form">Generate Waybill</Nav.Link>
              <NavDropdown.Divider />
              {user?.role > 2 && <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">View Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/waybill-form">Create User</NavDropdown.Item>
              </NavDropdown>}
            </Nav>
            <Navbar.Text className="w-25 text-end">
              Signed in as: <a href="#profile">{user?.firstName} {user?.lastName}</a>
            </Navbar.Text>
            <Navbar.Text className="w-25 text-end">
              <a href="/logout">Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container fluid className="px-1 py-5 mx-auto">
      <Row className="d-flex justify-content-center">
        <Col xl={7} lg={8} md={9} col={11} className="text-center">
          <h2 className="font-weight-bold" style={{"-webkit-text-stroke": "0.5px black", "-webkit-text-fill-color": "white"}}>Generate Waybill</h2>
          <p className="blue-text" style={{"-webkit-text-fill-color": "white"}}>
            Just answer a few questions<br /> so that we can personalize the right experience for you.
          </p>
          <Card className="card" style={{ padding: '30px 40px' }}>
            <h5 className="text-center mb-4">Powering world-class companies</h5>
            <Form className="form-card" onSubmit={handleSubmit}>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Driver's First name<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="fname" name="firstName" placeholder="Enter first name" onChange={handleChange} />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Driver's Surname<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="lname" name="lastName" placeholder="Enter Surname" onChange={handleChange} />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Truck Size<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="size" name="truckSize" placeholder="" onChange={handleChange} />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Truck Weight (Empty)<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="weight" name="truckWeight" placeholder="" onChange={handleTruckWeightChange} />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Truck Weight (Gross)<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="truckGross" name="truckGross" placeholder="" onChange={handleGrossWeightChange} />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Truck Weight (Net)<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="truckNet" name="truckNet" placeholder="" value={calculateNetWeight()} disabled onChange={handleChange} />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Item Description<span className="text-danger"> *</span></Form.Label>
                  <Form.Control as="textarea" id="itemDesc" name="itemDesc" placeholder="" onChange={handleChange} />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">Vehicle Number<span className="text-danger"> *</span></Form.Label>
                  <Form.Control type="text" id="vehicleNumber" name="vehicleNumber" placeholder="Enter vehicle Number" onChange={handleChange} />
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col sm={6} className="mt-4">
                  <Button type="submit" className="btn-block btn-primary"disabled={submitDisabled} style={{"background-color":'#5B0A9C'}}>
                    Generate New Waybill {loading ? <img src={logger} alt="Loading" style={{ width: '15px', height: '15px', display: 'inline' }} /> : ""}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default WaybillForm;
