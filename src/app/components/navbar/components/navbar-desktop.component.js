import SectionLink from './sectionlink.component';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return <SectionLink key={id} path={path} link={link} />
    });

export const NavbarDesktop = (props) => (
    <ul>
        {createLink(props)}
    </ul>
);