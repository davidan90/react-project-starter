import { Component } from 'react';
import { Route } from 'react-router-dom';
import { object } from 'prop-types';

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

export class SectionComponent extends Component {
    state = {};
    
    static propTypes = {
        sections: object,
    };

    static defaultProps = {
        sections: {},
    };

    render() {
        const { sections } = Object.freeze(this.props);
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