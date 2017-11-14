import { Link } from 'react-router-dom';

// Services
import { translate } from '../../../services/i18n';

const i18nRef = {
    Home: 'container.home',
    About: 'container.about',
};

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <li key={id} className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <Link to={path}>{translate(`${i18nRef[link]}.title`)}</Link>
            </li>
        );
    });

export const NavbarDesktop = (props) => (
    <ul>
        {createLink(props)}
    </ul>
);