import { Component } from 'react';

// Services
import { translate } from '../../services/i18n';

export class About extends Component {
    
    render() {
        return (
            <div>
                <h1>{translate('container.about.title')}</h1>
            </div>
        );
    }
}