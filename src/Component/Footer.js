import { Col, Row } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
function Footer() {
    return (
        <div className="fixed-bottom bg-dark text-white">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">CUBEDOTS</h3>
                    </div>
                </div>
                <Row className="text-center pb-3">
                    <Col >
                        <span className="pr-3">
                            <FaInstagram />
                        </span >
                        
                        <span className="pr-3">
                            <FaWhatsapp />
                        </span>
                        
                        
                        
                        
                        <span className="pr-3">
                            <FaLinkedinIn />
                        </span>
                    </Col>
                </Row>
            </div>

        </div>
    )

}

export default Footer;
