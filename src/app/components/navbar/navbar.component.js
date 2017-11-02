import { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

// Services
import { translate } from '../../services/i18n';

// Decorators
import { ResponsiveComponent } from '../../decorators/responsive-component.decorator';

// Styles
import './_navbar.component.scss';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const navbarDesktop = (links) => (
    <ul>
        {createLink(Object.values(links))}
    </ul>
);

const mobileDesktop = () => (
    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 openAside">
        <span>...</span>
    </div>
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
    });

@ResponsiveComponent()
export class NavbarComponent extends Component {
    static propTypes = {
        links: object.isRequired,
    };

    static defaultProps = {
        links: {},
    }

    _selectNavbar({ isDesktop, isTablet, isMobile }, links) {
        if (isDesktop || isTablet) {
            return navbarDesktop(links);
        }
    
        if(isMobile){
            return mobileDesktop();
        }
    }

    render() {
        const { links } = Object.freeze(this.props);
        console.log(this.props)
        return (
            <nav className="container navbar">
                <div className="row">
                    {this._selectNavbar(this.props, links)}
                </div>
            </nav>
        );
    }
}