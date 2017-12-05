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
    },
    en: {
        title: "About",
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

    _showModal() {
        this.setState({ isModalShow: !this.state.isModalShow });
    }

    render() {
        return (
            <div>
                <div className="about-title">
                    <SectionTitle text={this.props.i18n.title} />
                </div>
                <div>
                    <span onClick={this._showModal.bind(this)}>open modal</span>
                </div>
                <ModalComponent show={this.state.isModalShow}>
                    <span>TODO</span>
                </ModalComponent>
            </div>
        );
    }
}