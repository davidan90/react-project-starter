import { Component } from 'react';

//Services
import { translate } from '../../services/i18n';

//Style
import './_footer.component.scss';

export class FooterComponent extends Component {
    render() {
        return (
            <div className="container footer">
                <p>{translate('components.footer.text')}</p>
            </div>
        );
    }
}
