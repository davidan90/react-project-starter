import { Component } from 'react';

// Services
import { translate } from '../../services/i18n';

export class Home extends Component {

    render() {
        return (
            <div>
                <h1>{ translate('container.home.title') }</h1>
            </div>
        );
    }

}
