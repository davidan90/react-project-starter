import { Component } from 'react';
import { I18N } from 'react-i18n-hoc';

//Style
import './_footer.component.scss';

const lang = 'es';
const i18n = {
    es: {
        text: 'Texto de prueba',
    },
    en: {
        "text": "Foo footer",
    },
};

@I18N({i18n})
export class FooterComponent extends Component {
    render() {
        return (
            <div className="container footer">
                <p>
                    {this.props.i18n.text}
                </p>
            </div>
        );
    }
}
