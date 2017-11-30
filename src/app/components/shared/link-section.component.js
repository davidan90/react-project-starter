import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18N } from 'react-i18n-hoc';

// Services
import { AppActions } from '../../services/redux/actions';

const lang = 'es';
const i18n = {
    es: {
        homeTitle: 'Inicio',
        aboutTitle: 'Nosotros',
    },
    en: {
        homeTitle: 'Home',
        aboutTitle: 'About',
    },
};

const i18nRef = {
    Home: 'homeTitle',
    About: 'aboutTitle',
};

const mapDispatchToProps = (dispatch, props) => ({
    changeSectionAction: (path) => dispatch(AppActions.setSectionSelected(path)),
});

@connect(
    null,
    mapDispatchToProps,
)
@I18N({i18n})
export default class SectionLink extends Component {

    constructor(props) {
        super(props);
    }

    _clickHandler(path) {
        const { changeSectionAction } = this.props;
        changeSectionAction(path);
    }

    render() {
        const { path, link } = this.props;
        return (
            <li className="col-2 col-sm-2" onClick={this._clickHandler.bind(this, path)}>
                <Link to={path}>
                    {this.props.i18n[`${i18nRef[link]}`]}
                </Link>
            </li>
        );
    }
}
