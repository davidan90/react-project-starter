import { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

// Services
import { AppActions } from '../../services/redux/actions';

// Components
import { NavbarDesktop } from './components/navbar-desktop.component';
import { NavbarMobile } from './components/navbar-mobile.component';

// Styles
import './_navbar.component.scss';

const mapStateToProps = (state, props) => ({
    isMobile: state.app.device.type === 'mobile',
});

const mapDispatchToProps = (dispatch) => ({
    closeAsideAction: () => {
        dispatch(AppActions.openAside(false));
    },
});

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class NavbarComponent extends Component {
    static propTypes = {
        links: object.isRequired,
    };

    static defaultProps = {
        links: {},
    }

    _selectNavbar({ isMobile, links }) {
        if (!isMobile) {
            const { closeAsideAction } = this.props;
            closeAsideAction();
            return <NavbarDesktop links={links} />
        }
        return <NavbarMobile />
    }

    render() {
        return (
            <nav className="container navbar">
                <div className="row">
                    {this._selectNavbar(this.props)}
                </div>
            </nav>
        );
    }
}