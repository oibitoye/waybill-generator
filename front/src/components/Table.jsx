import React from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogo from '../styles/AppLogo.png'

function WordXMLTable({data, qrcode, sn}) {
    const dateString = data.createdAt;
    const date = new Date(dateString);

    const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return (
        <Container className="pt-5 sm:w-100" style={{
            width: '80%',
            '@media (max-width: 600px)': {
                width: '99%',
            },
            }}>
            <Table style={{ width: '100%', marginBottom: "0px" }}>
                <thead>
                    <tr>
                        <th colSpan="1" style={{ width: '5%', textAlign: 'left', padding: '0px 0px' }}>
                            <img src={AppLogo} alt="App Logo" style={{ width: '50px' }} />
                            <div style={{ marginTop: '0px', fontSize: '8px' }}>RC. 1093991</div>
                        </th>
                        <th colSpan="1" style={{ width: '90%', textAlign: 'center', padding: '0px 0px' }}>
                            <b style={{
                                fontSize: '25px',
                                '@media (max-width: 600px)': {
                                    fontSize: '14px',
                                },
                                }}>
                                <span style={{ color: '#C3282E' }}>DEEDS</span> PROPERTIES & INVESTMENT LTD
                            </b>
                        </th>
                        <th className="mr-4" colSpan="1" style={{ width: '1%', textAlign: 'right', padding: '0px 0px' }}>
                        </th>
                    </tr>
                </thead>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <thead>
                    <tr>
                    <th colSpan="1" style={{ width: '30%', textAlign: 'left' }}>
                        <b>Tell:</b> 0703.337.3551
                        </th>
                        <th colSpan="1" style={{ width: '40%', textAlign: 'center' }}>
                        <b style={{ fontSize: '25px' }}>W A Y B I L L</b>
                        </th>
                        <th className="mr-4" colSpan="1" style={{ fontFamily: 'Crash Numbering Serif, serif', width: '30%', textAlign: 'right', paddingTop: '0px', paddingBottom: '0px' }}>
                        S/No: {sn}
                        </th>
                    </tr>
                    {/* <tr>
                        <th colSpan="4" style={{ fontColor: 'grey', width: '100%', textAlign: 'center' }}>
                        <b>Dispatch Section</b>
                        </th>
                    </tr> */}
                </thead>
                </Table>
                <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <tbody>
                    <tr style={{ height: '13.45pt' }}>
                    <td style={{ width: '100.0%' }}>
                        <p className="py-0 mt-1 mb-1" style={{ textAlign: 'center' }}>
                        <b>Dispatch Section</b>
                        </p>
                    </td>
                    </tr>
                </tbody>
                </Table>
                <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <tbody>
                <tr>
                    <td colSpan="2" style={{ width: '48.6%' }}>
                    <b>FROM:</b>
                    </td>
                    <td colSpan="2" style={{ width: '51.4%' }}>
                    <b>TO:</b>
                    </td>
                </tr>
                </tbody>
            </Table>
            {/* <Container>
                <p className="py-0" style={{ fontSize: '2.0pt', fontFamily: 'Trebuchet MS, sans-serif' }}>
                    &nbsp;
                </p>
            </Container> */}
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <thead>
                    <tr>
                        <th className="p-0" style={{ width: '47.12%', height: 'fit-content' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                            <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Commodity</span>
                            </b>
                        </p>
                        </th>
                        <th className="p-0" colSpan="3" style={{ width: '52.88%', height: 'fit-content' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                            <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                                Truck Weight (Tonnes)
                            </span>
                            </b>
                        </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td rowSpan="2" style={{ width: '47.12%' }}>
                        <p className="py-0" style={{ textAlign: 'center' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>&nbsp;</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '16.32%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Empty</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '17.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Gross</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '18.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Net</span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '17.63%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '14pt', fontFamily: 'Calibri, sans-serif' }}>
                        {data?.truckWeight}
                        </span>
                        </p>
                    </td>
                    <td style={{ width: '17.62%' }}>
                    <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '14pt', fontFamily: 'Calibri, sans-serif' }}>
                        {data?.truckGross}
                        </span>
                        </p>
                    </td>
                    <td style={{ width: '17.63%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '14pt', fontFamily: 'Calibri, sans-serif' }}>
                        {data?.truckNet}
                        </span>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <thead>
                    <tr>
                    <th className="py-0" style={{ width: '477.9pt', marginTop: '0', marginBottom: '0' }}>
                        <p className="py-0"style={{ marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>REMARKS</span>
                        </b>
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ width: '477.9pt' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '11.0pt', fontFamily: 'Calibri, sans-serif' }}>&nbsp;{data.itemDesc}</span>
                        </b>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <tbody>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                        <p className="py-0 m-0" style={{ tabStops: '74.4pt' }}>
                            <b>
                                <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                                Driver’s Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            </b>
                            <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                            {data?.firstName} {data?.lastName}
                            </span>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Dispatched by:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </b>
                        <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                            {data?.dispatcher}
                            </span>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                    <p className="py-0 m-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Vehicle Plate #:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </b>
                        <b>
                        <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                        {data?.vehicleNumber && data.vehicleNumber.toUpperCase()}
                        </span>
                        </b>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Title:
                            </span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Signature and Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </b>
                        <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                        {formattedDate}
                        </span>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0">
                            <b>
                                <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                                Signature and Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            </b>
                            <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                                {formattedDate}
                            </span>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <tbody>
                    <tr style={{ height: '13.45pt' }}>
                    <td style={{ width: '100.0%' }}>
                        <p className="py-0 mt-1 mb-1" style={{ textAlign: 'center' }}>
                        <b>Receipt Section</b>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <thead>
                    <tr>
                        <th className="p-0" style={{ width: '47.12%', height: 'fit-content' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                            <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Commodity</span>
                            </b>
                        </p>
                        </th>
                        <th className="p-0" colSpan="3" style={{ width: '52.88%', height: 'fit-content' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                            <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                                Truck Weight (Tonnes)
                            </span>
                            </b>
                        </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td rowSpan="2" style={{ width: '47.12%' }}>
                        <p className="py-0" style={{ textAlign: 'center' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>&nbsp;</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '16.32%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Empty</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '17.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Gross</span>
                        </b>
                        </p>
                    </td>
                    <td className="p-0" style={{ width: '18.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>Net</span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '16.32%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '7.0pt' }}>&nbsp;</span>
                        </p>
                    </td>
                    <td style={{ width: '17.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '7.0pt' }}>&nbsp;</span>
                        </p>
                    </td>
                    <td style={{ width: '18.78%' }}>
                        <p className="py-0" style={{ textAlign: 'center', marginTop: '0', marginBottom: '0' }}>
                        <span style={{ fontSize: '7.0pt' }}>&nbsp;</span>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <thead>
                    <tr>
                    <th className="py-0" style={{ width: '477.9pt', marginTop: '0', marginBottom: '0' }}>
                        <p className="py-0"style={{ marginTop: '0', marginBottom: '0' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>REMARKS</span>
                        </b>
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ width: '477.9pt' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>&nbsp;</span>
                        </b>
                        </p>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered responsive style={{ width: '100%', marginBottom: "0px", borderColor: "black" }}>
                <tbody>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                        <p className="py-0 m-0" style={{ tabStops: '74.4pt' }}>
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Driver’s Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </b>
                        <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                        {data?.firstName} {data?.lastName}
                        </span>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Received by:
                            </span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                        <p className="py-0 m-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Vehicle Plate #:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </b>
                        <b>
                            <span style={{ fontSize: '12pt', fontFamily: 'Calibri, sans-serif' }}>
                            {data?.vehicleNumber && data.vehicleNumber.toUpperCase()}
                            </span>
                        </b>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0 m-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Title:
                            </span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td style={{ width: '49.12%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Signature and Date:
                            </span>
                        </b>
                        </p>
                    </td>
                    <td style={{ width: '50.88%' }}>
                        <p className="py-0">
                        <b>
                            <span style={{ fontSize: '9.0pt', fontFamily: 'Calibri, sans-serif' }}>
                            Signature and Date:
                            </span>
                        </b>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td colSpan="4" style={{ width: '100%' }}>
                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                            {qrcode}
                    </span> 
                    </td>
                    </tr>
                </tbody>
            </Table>
      </Container>
    );
  }
  
  export default WordXMLTable;
  