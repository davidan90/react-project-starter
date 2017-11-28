import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Services
import { translate } from '../../services/i18n';
import { AppActions } from '../../services/redux/actions';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const mapDispatchToProps = (dispatch, props) => ({
    changeSectionAction: (path) => dispatch(AppActions.setSectionSelected(path)),
});

@connect(
    null,
    mapDispatchToProps,
)
export default class SectionLink extends Component {
    
    constructor(props) {
        super(props);
    }

    _clickHandler(path) {
        const {changeSectionAction} = this.props;
        changeSectionAction(path);
    }

    render() {
        const { path, link } = this.props;
        return (
            <li onClick={this._clickHandler.bind(this, path)}>
                <Link to={path}>{translate(`${i18nRef[link]}.title`)}</Link>
            </li>
        );
    }
}
