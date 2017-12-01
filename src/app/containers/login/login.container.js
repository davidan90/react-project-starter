import { Component } from 'react';
import { I18N } from 'react-i18n-hoc';

// Components
import { LoginButton } from '../../components/shared';

const lang = 'es';
const i18n = {
    es: {
        title: 'Inicio de sesión',
    },
    en: {
        title: "Login",
    },
};

@I18N({i18n})
export class Login extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.i18n.title}</h1>
                <LoginButton />
            </div>
        );
    }
}