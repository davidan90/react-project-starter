import { Component } from 'react';
import { object } from 'prop-types'
import { I18N } from 'react-i18n-hoc';

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
            <div>
                <h1>
                    {this.props.i18n.title}
                </h1>
            </div>
        );
    }

}
