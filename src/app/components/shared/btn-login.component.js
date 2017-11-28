import { Component } from 'react';
import { connect } from 'react-redux';

// Services
import { translate } from '../../services/i18n';
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
        onLoginAction();
    }

    render() {
        return (
            <button onClick={this._onLogin.bind(this)}>
                {translate('container.login.btn-text-1')}
            </button>
        );
    }
}