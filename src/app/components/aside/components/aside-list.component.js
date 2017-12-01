import React from 'react';
import { SectionLink } from '../../shared';

const createLink = ({ links }) =>
    Object.values(links).map((link, index) => {
        const id = `link_aside_${index}`;
        const path = `/${link.toLowerCase()}`;
        return (
            <div key={id}>
                <SectionLink path={path} link={link} />
            </div>
        );
    });

export const AsideList = (props) => (
    <ul className="aside-list">
        {createLink(props)}
    </ul>
);