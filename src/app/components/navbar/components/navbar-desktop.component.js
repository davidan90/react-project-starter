import SectionLink from '../../shared/link-section.component';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <div key={id} className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <SectionLink path={path} link={link} />
            </div>
        )
    });

export const NavbarDesktop = (props) => (
    <ul>
        {createLink(props)}
    </ul>
);