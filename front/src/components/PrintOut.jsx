import React, { useState, useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router-dom';
import { getThisWaybill } from '../api';
import WordXMLTable from './Table';
import {Button, Container } from 'react-bootstrap';
import {QRCodeSVG} from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import styled, { css } from 'styled-components';
import '../styles/fonts.css';

const WaybillSerialNumber = ({ serialNumber }) => {
    return (
      <b style={{ fontFamily: 'Crash Numbering Serif, serif', fontSize: '30px' }}>
        {serialNumber}
      </b>
    );
};

class PrintableContent extends React.Component {
    render() {
      const { waybillInfo, qrCodeValue } = this.props;
  
      return (
        <div>
            <WordXMLTable
                data={waybillInfo}
                qrcode={<QRCodeSVG value={qrCodeValue} size={64} />}
                sn={<WaybillSerialNumber serialNumber={waybillInfo.waybillNumber.toString().padStart(6, '0')} />}
            />
        </div>
      );
    }
  }
  
const PrintStyles = styled.div`
  ${props =>
    props.print &&
    css`
      @media print {
        .printable-content {
          page-break-inside: avoid;
        }
      }
    `}
`;

function Print() {
  const [waybillInfo, setWaybillInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const printableContentRef = useRef();
  const { code } = useParams();
  const history = useHistory();

  const handlePrint = useReactToPrint({
    content: () => printableContentRef.current,
  });

  const handleCancel = () => {
    history.push('/');
  };

  useEffect(() => {
    const fetchWaybillInfo = async () => {
      try {
        const response = await getThisWaybill(code);
        console.log(response);
        setWaybillInfo(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWaybillInfo();
  }, [code]);
  const qrCodeValue = `${process.env.REACT_APP_API_QR_URL}/${code}`;

  return (
    <PrintStyles>
      {/* Other components */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <PrintableContent
            ref={printableContentRef}
            waybillInfo={waybillInfo}
            qrCodeValue={qrCodeValue}
        />
        <Container className="pb-5 pt-1" style={{width: "80%"}}>
            <Button variant="primary" style={{width: "160px"}} onClick={handlePrint}>Print</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" style={{width: "160px"}} onClick={handleCancel}>
              Exit
            </Button>
        </Container>
        </>
      )}
      {/* Other components */}
      </PrintStyles>
  );
}

export default Print;
