import React, {Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './Trigger.css';

class Trigger extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.clickBuyOk = this.clickBuyOk.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });

    }
    clickBuyOk() {
        this.props.click();
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="modal-container" id={'modal_button'} style={{ height: 200 }}>
                <Button

                    bsStyle="primary"
                    bsSize="small"
                    onClick={()=>this.setState({show:true})}

                >
                   Buy
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Basket
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you really want to buy?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.clickBuyOk}>Yes</Button>
                        <Button onClick={this.handleHide}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Trigger;