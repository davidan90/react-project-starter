import { Component } from 'react';
import { Link } from 'react-router-dom';
import { MediaQuery } from 'react-responsive';
import { object } from 'prop-types';

// Services
import { translate } from '../../services/i18n';

// Styles
import './_navbar.component.scss';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const navbarDesktop = (links) => (
    <MediaQuery minDeviceWidth={1224}>
        <ul>
            {createLink(Object.values(links))}
        </ul>
    </MediaQuery>
);

const mobileDesktop = () => (
    <MediaQuery maxDeviceWidth={1223}>
        <div>
            <span>...</span>
        </div>
    </MediaQuery>
);

const createLink = (links) =>
    links.map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <li key={id} className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <Link to={path}>{translate(`${i18nRef[link]}.title`)}</Link>
            </li>
        );
    }
    );

export class NavbarComponent extends Component {
    state = {};

    static propTypes = {
        links: object,
    };

    static defaultProps = {
        links: {},
    }

    render() {
        const { links } = Object.freeze(this.props);

        return (
            <nav className="container navbar">
                <div className="row">
                    {navbarDesktop(links)}
                    {mobileDesktop()}
                </div>
            </nav>
        );
    }
}
