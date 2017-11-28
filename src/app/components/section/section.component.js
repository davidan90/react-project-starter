import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
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
                <Route key={id} path={path} component={CONTAINERS_ELEMENTS[section]} />
            );
        }
    );

const getDefaultComponent = (path, sections) => {
    const pathSplit = path.split('/')[1];
    const pathComponent = pathSplit !== '' ? sections[pathSplit] : sections.home;
    return CONTAINERS_ELEMENTS[pathComponent];
}

const mapStateToProps = (state, props) => ({
    sectionSelected: state.app.section.selected,
});

@connect(
    mapStateToProps
)
export class SectionComponent extends Component {
    state = {};
    
    static propTypes = {
        sections: object,
    };

    static defaultProps = {
        sections: {},
    };

    render() {
        const { sections, sectionSelected } = this.props;
        const defaultComponent = getDefaultComponent(sectionSelected ? sectionSelected : '/', sections);

        return (
            <section className="container section">
                <div>
                    <Route exact path="/" component={defaultComponent} />
                    {createSection(Object.values(sections))}
                </div>
            </section>
        );
    }
}
