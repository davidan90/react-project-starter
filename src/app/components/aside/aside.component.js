import { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

// Components
import { AsideList } from './components/aside-list.component'

// Styles
import './_aside.component.scss';

const mapStateToProps = (state, props) => ({
    isAsideOpen: state.app.aside.open,
});

@connect(
    mapStateToProps,
)
export class AsideComponent extends Component {
    static propTypes = {
        links: object.isRequired,
    };

    static defaultProps = {
        links: {},
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { links, isAsideOpen} = this.props;
        return isAsideOpen ? (
            <aside className="aside">
                <div>
                    <AsideList links={links} />
                </div>
            </aside>
        ) : null;
    }
}
