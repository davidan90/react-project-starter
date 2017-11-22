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
    _selectAside({ links }) {
        return <span>TODO aside</span>
    }

    render() {
        return (
            <aside className="container aside">
                <div className="row">
                    {this._selectAside(this.props)}
                </div>
            </aside>
        );
    }
}
