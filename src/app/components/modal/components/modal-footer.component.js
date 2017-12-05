import { Component } from 'react';

export const ModalFooter = (props) => {
    const { text } = props;
    
    return (
        <div className="modal-footer">
            <div>
                <span>{text}</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}
