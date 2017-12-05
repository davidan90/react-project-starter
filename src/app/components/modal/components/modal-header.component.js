import { Component } from 'react';

export const ModalHeader = (props) => {
    const { title } = props;
    
    return title ?
        (
            <div className="modal-header">
                <h2>
                    {title}
                </h2>
            </div>
        ) : null;
}
