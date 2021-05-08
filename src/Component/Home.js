import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">HOME</h1>
                <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, cum fuga sed soluta distinctio quo quis, voluptatibus ipsum id suscipit laborum neque voluptatum ex repellat dicta iusto ea eius.
      </p>
                            <footer className="blockquote-footer">
                                Section <cite title="Source Title">Home</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, cum fuga sed soluta distinctio quo quis, voluptatibus ipsum id suscipit laborum neque voluptatum ex repellat dicta iusto ea eius.
      </p>
      <footer className="blockquote-footer">
                                Section <cite title="Source Title">Home</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home;