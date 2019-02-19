import React, {Component} from 'react';
import axios from 'axios';
import './MovesModal.css'
import {ModalHeader,Modal,ModalBody} from 'reactstrap'
class MovesModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        move: this.props.move,
        moveInfo: ''
      };
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }),()=>{
          axios.get(this.state.move.url)
          .then((res)=>{
              let move  = res.data
              this.setState({
                  moveInfo:move
              })
          })
        
      })
    }
  
    render() {
      return (
        <div className='moves-modal-label'>
          <button className='moves-button btn' onClick={this.toggle}>{(this.props.move.name)}</button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.props.move.name}</ModalHeader>
            {!this.state.moveInfo?<ModalBody></ModalBody>
              :<ModalBody>
              <p className='modal-body-label'>Type: {this.state.moveInfo.type.name}</p>
              <p className='modal-body-label'>Power: {this.state.moveInfo.power}</p>
              <p className='modal-body-label'>PP: {this.state.moveInfo.pp}</p>
            </ModalBody>
          }
          </Modal>
        </div>
      );
    }
  }

  export default MovesModal