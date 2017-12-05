import { Component } from 'react';
import { string, bool } from 'prop-types';

import { ModalHeader } from './components/modal-header.component';
import { ModalFooter } from './components/modal-footer.component';

//Style
import './_modal.component.scss';

export class ModalComponent extends Component {
    static propTypes = {
        show: bool.isRequired,
        header: string,
        footer: string,
    };

    static defaultProps = {
        show: false,
        header: undefined,
        footer: undefined,
    }

    constructor(props) {
        super(props);
        this.state = {
            closeModalEvent: new Event(`onModalClose_${props.id}`),
        }
    }

    _closeModal() {
        const { closeModalEvent } = this.state;
        document.dispatchEvent(closeModalEvent);
    }

    _displayModal() {
        const { show, header, footer } = this.props;
        return show ?
            (
                <div className="modal">
                    <div className="modal-container">
                        <ModalHeader title={header} />
                        <div className="modal-section">
                            {this.props.children}
                        </div>
                        <ModalFooter text={footer}>
                            <button onClick={this._closeModal.bind(this)}>X</button>
                        </ModalFooter>
                    </div>
                </div>
            ) : null;
    }

    render() {
        return this._displayModal();
    }
}
