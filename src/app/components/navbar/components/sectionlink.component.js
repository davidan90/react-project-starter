import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Services
import { translate } from '../../../services/i18n';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const onClickHandler = (id) => {
    console.log('clicked', id);
}

@connect()
export default class SectionLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path, link } = this.props;
        return (
            <li className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" onClick={onClickHandler.bind(this, path)}>
                <Link to={path}>{translate(`${i18nRef[link]}.title`)}</Link>
            </li>
        );
    }
}
