import { Component } from 'react';
import { connect } from 'react-redux';

// Services
import { translate } from '../../services/i18n';
import { Api } from '../../services/api';
import { LoginActions } from '../../services/redux/actions';

const mapDispatchToProps = (dispatch) => ({
    onLoginAction: () => {
        dispatch(LoginActions.setLoginLogged(true));
    }
});

@connect(
    null,
    mapDispatchToProps,
)
export default class LoginButton extends Component {

    _onLogin() {
        const { onLoginAction } = this.props;
        Api.GET('https://randomuser.me/api/')
            .then((data) => {
                console.log(data)
                onLoginAction();
            })
            .catch((err) => {console.error(err)});
    }

    render() {
        return (
            <button onClick={this._onLogin.bind(this)}>
                {translate('container.login.btn-text-1')}
            </button>
        );
    }
}