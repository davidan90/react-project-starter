import { Component } from 'react';
import { connect } from 'react-redux';

// Services
import { translate } from '../../services/i18n';
import { Api } from '../../services/api';
import { LoginActions } from '../../services/redux/actions';

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
export default class LoginButton extends Component {

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
                {translate('container.login.btn-text-1')}
            </button>
        );
    }
}