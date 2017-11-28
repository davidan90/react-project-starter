import { Component } from 'react';
import { object } from 'prop-types';

// Components
import { AsideList } from './components/aside-list.component'

// Styles
import './_aside.component.scss';

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
        const {links} = this.props;
        return (
            <aside className="aside">
                <div>
                    <AsideList links={links}/>
                </div>
            </aside>
        );
    }
}
