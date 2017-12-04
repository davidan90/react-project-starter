import { Component } from 'react';
import { object } from 'prop-types'
import { I18N } from 'react-i18n-hoc';

// Components
import { SectionTitle } from '../../components/shared';

// Styles css and scss
import './_home.scss';

const lang = 'es';
const i18n = {
    es: {
        title: 'Inicio',
    },
    en: {
        title: "Home",
    },
};

@I18N({i18n})
export class Home extends Component {
    render() {
        return (
            <div className="home-title">
                <SectionTitle text={this.props.i18n.title} />
            </div>
        );
    }

}
