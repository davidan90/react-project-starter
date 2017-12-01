import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Constants
import { CONTAINERS } from './constants/containers';

// Container
import { Login } from './containers';

// Components
import { NavbarComponent, AsideComponent, SectionComponent, FooterComponent } from './components';

// Services
import { AppActions } from './services/redux/actions';

// Styles css and scss
import './main.scss';

const mapStateToProps = (state, props) => ({
    isLogged: state.login.logged,
});

const mapDispatchToProps = (dispatch) => ({
    resizeAction: () => dispatch(AppActions.setDevice(window.innerWidth)),
});

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class App extends Component {

    componentWillMount() {
        const { resizeAction } = this.props;
        resizeAction();
    }

    componentDidMount() {
        const { resizeAction } = this.props;
        window.addEventListener('resize', resizeAction.bind(this));
    }

    _getMainContainer() {
        const { isLogged } = this.props;
        return isLogged ?
            (
                <div className="container">
                    <NavbarComponent links={CONTAINERS} />
                    <AsideComponent links={CONTAINERS} />
                    <SectionComponent sections={CONTAINERS} />
                    <FooterComponent />
                </div>
            ) :
            (
                <div className="container">
                    <Route exact path="/" component={Login} />
                </div>
            );
    }

    render() {
        return (
            <div id="my-app">
                <Router>
                    {this._getMainContainer()}
                </Router>
            </div>
        );
    }
}
