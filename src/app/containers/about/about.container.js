import { Component } from 'react';
import { I18N } from 'react-i18n-hoc';

// Components
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

@I18N({i18n})
export class About extends Component {
    render() {
        return (
            <div className="about-title">
                <SectionTitle text={this.props.i18n.title} />
            </div>
        );
    }
}