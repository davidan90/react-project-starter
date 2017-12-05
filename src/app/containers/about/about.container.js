import ReactDOM from 'react-dom';
import { Component } from 'react';
import { I18N } from 'react-i18n-hoc';

// Components
import { ModalComponent } from '../../components/modal';
import { SectionTitle } from '../../components/shared';

// Styles css and scss
import './_about.scss';

const lang = 'es';
const i18n = {
    es: {
        title: 'Nosotros',
        modalText: 'Aqui va el contenido del modal',
    },
    en: {
        title: "About",
        modalText: 'Here modal content',
    },
};

@I18N({ i18n })
export class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false,
        };
    }

    componentDidMount() {
        document.addEventListener('onModalClose_aboutModal', this._closeModal.bind(this));
    }

    _closeModal() {
        this.setState({ isModalShow: false });
    }

    _showModal() {
        this.setState({ isModalShow: true });
    }

    render() {
        return (
            <div>
                <div className="about-title">
                    <SectionTitle text={this.props.i18n.title} />
                </div>
                <div>
                    <button onClick={this._showModal.bind(this)}>Modal</button>
                </div>
                <ModalComponent
                    id="aboutModal"
                    show={this.state.isModalShow}
                    header={`Modal ${this.props.i18n.title}`}>
                    <span>{this.props.i18n.modalText}</span>
                </ModalComponent>
            </div>
        );
    }
}