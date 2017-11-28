import SectionLink from '../../shared/sectionlink.component';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <SectionLink key={id} path={path} link={link} />
            </div>
        );
    });

export const AsideList = (props) => (
    <ul className="aside-list">
        {createLink(props)}
    </ul>
);