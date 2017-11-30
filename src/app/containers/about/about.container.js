import { Component } from 'react';
import { I18N } from 'react-i18n-hoc';

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
            <div>
                <h1>
                    {this.props.i18n.title}
                </h1>
            </div>
        );
    }
}