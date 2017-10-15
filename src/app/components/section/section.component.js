import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Constants
import { CONTAINERS_ELEMENTS } from './constants';

// Styles
import './_section.component.scss';

const createSection = ( sections ) => 
    sections.map( (section, index) => {
            const id = `section_${index}`;
            const path = `/${ section.toLowerCase() }`;
            return (
                <Route key={ id } path={ path } component={ CONTAINERS_ELEMENTS[section] } />
            );
        }
    );

export class SectionComponent extends React.Component {
    
    static propTypes = {
        sections: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            sections: props.sections,
        };
    }

    render() {
        const sections = Object.freeze(this.state.sections);
        const defaultPath = '/';
        const defaultComponent = CONTAINERS_ELEMENTS[sections.home];

        return (
            <section className="section">
                <div>
                    <Route exact path={ defaultPath } component={ defaultComponent } />
                    { createSection(Object.values(sections)) }
                </div>
            </section>
        );
    }
}