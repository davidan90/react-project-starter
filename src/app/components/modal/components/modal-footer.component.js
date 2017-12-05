import { Component } from 'react';

export const ModalFooter = (props) => {
    const {text} = props;
    
    return text ?
        (
            <div className="modal-footer">
                <span>
                    {text}
                </span>
            </div>
        ) : null;
}
