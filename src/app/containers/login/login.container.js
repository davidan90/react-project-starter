import { Component } from 'react';

// Components
import LoginButton from '../../components/shared/btn-login.component';

// Services
import { translate } from '../../services/i18n';

export class Login extends Component {
    render() {
        return (
            <div>
                <h1>{translate('container.login.title')}</h1>
                <LoginButton />
            </div>
        );
    }
}