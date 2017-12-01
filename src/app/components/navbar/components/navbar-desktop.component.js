import { SectionLink } from '../../shared';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <div key={id}>
                <SectionLink path={path} link={link} />
            </div>
        )
    });

export const NavbarDesktop = (props) => (
    <ul>
        {createLink(props)}
    </ul>
);