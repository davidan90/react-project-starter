import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18N } from 'react-i18n-hoc';

// Services
import { AppActions, LoginActions } from '../../services/redux/actions';

const lang = 'es';
const i18n = {
    es: {
        btnText1: 'Salir',
    },
    en: {
        btnText1: 'Logout',
    },
};

const mapDispatchToProps = (dispatch) => ({
    onLogoutAction: () => {
        dispatch(AppActions.setSectionSelected('/'));
        dispatch(LoginActions.setLoginUser({}));
        dispatch(LoginActions.setLoginLogged(false));
    },
});

@connect(
    null,
    mapDispatchToProps,
)
@I18N({ i18n })
export class LogoutButton extends Component {

    _onLogout() {
        const { onLogoutAction } = this.props;
        onLogoutAction();
    }

    render() {
        return (
            <button onClick={this._onLogout.bind(this)}>
                <Link to={'/'}>
                    {this.props.i18n.btnText1}
                </Link>
            </button>
        );
    }
}