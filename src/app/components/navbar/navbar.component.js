import { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

// Services
import { translate } from '../../services/i18n';

// Styles
import './_navbar.component.scss';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const createLink = ( links ) => 
    links.map( (link, index) => {
            const id = `link_${index}`;
            const path = `/${ link.toLowerCase() }`;
            return (
                <li key={ id }>
                    <Link to={ path }> { translate( `${i18nRef[link]}.title`) } </Link>
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
            <nav className="navbar">
                <ul>
                    { createLink(Object.values(links)) }
                </ul>
            </nav>
        );
    }
}