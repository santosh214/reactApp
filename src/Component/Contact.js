import React,{useState} from 'react';
import { Card } from 'react-bootstrap';

function Contact() {
    const [name, Nname] = useState('santosh')

    function update(){
        Nname('SantoshSingh');
    }



    return (
        <div>
            <h1 className="text-center">Contact</h1>
            <Card >
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <h2>Contact Section</h2>
                            <footer className="blockquote-footer">
                                This is a <cite title="Source Title">Contact Section</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

        <div className="text-center">
            <h1>{name}</h1>
            <button onClick={update}>Update Data</button>
        </div>




        </div>
    )
}

export default Contact;