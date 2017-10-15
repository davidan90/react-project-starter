import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './_navbar.component.scss';

const createLink = ( links ) => 
    links.map( (link, index) => {
            const id = `link_${index}`;
            const path = `/${ link.toLowerCase() }`;
            return (
                <li key={ id }>
                    <Link to={ path }> { link } </Link>
                </li>
            );
        }
    );


export class NavbarComponent extends React.Component {

    static propTypes = {
        links: PropTypes.object,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            links: this.props.links,
        };
    }

    render() {
        const links = Object.freeze(this.state.links);

        return (
            <nav className="navbar">
                <ul>
                    { createLink(Object.values(links)) }
                </ul>
            </nav>
        );
    }
}