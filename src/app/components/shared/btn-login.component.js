import { Component } from 'react';
import { connect } from 'react-redux';
import { I18N } from 'react-i18n-hoc';

// Services
import { Api } from '../../services/api';
import { LoginActions } from '../../services/redux/actions';

const lang = 'es';
const i18n = {
    es: {
        'btnText1': 'Inicio',
    },
    en: {
        'btnText1': 'Go',
    },
};

const mapDispatchToProps = (dispatch) => ({
    onLoginSuccesAction: (user) => {
        if (user) {
            dispatch(LoginActions.setLoginUser(user));
            dispatch(LoginActions.setLoginLogged(true));
        }
    },
    onLoginFailureAction: () => {
        dispatch(LoginActions.setLoginLogged(false));
    }
});

@connect(
    null,
    mapDispatchToProps,
)
@I18N({i18n})
export class LoginButton extends Component {

    _onLogin() {
        const { onLoginSuccesAction, onLoginFailureAction } = this.props;
        //Example with randomuser
        Api.GET('https://randomuser.me/api/')
            .then((data) => {
                const user = data.results[0];
                onLoginSuccesAction(user);
            })
            .catch((err) => {
                onLoginFailureAction();
                console.error(err);
            });
    }

    render() {
        return (
            <button onClick={this._onLogin.bind(this)}>
                {this.props.i18n.btnText1}
            </button>
        );
    }
}