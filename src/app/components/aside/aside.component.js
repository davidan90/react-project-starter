import { Component } from 'react';
import { object } from 'prop-types';

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
    
    _selectAside({ links }) {
        return <span>TODO aside</span>
    }

    render() {
        return (
            <aside className="aside">
                <div>
                    {this._selectAside(this.props)}
                </div>
            </aside>
        );
    }
}
