import { Component } from 'react';
import { object } from 'prop-types'

// Services
import { translate } from '../../services/i18n';
import { ExampleActions } from '../../services/redux/actions';

export class Home extends Component {

    static contextTypes = {
        store: object
    };

    handleOnClick() {
        const {store} = this.context;
        store.dispatch(ExampleActions.clickExample({click: true}));
    }

    render() {
        return (
            <div>
                <h1>
                    {translate('container.home.title')}
                </h1>
                <button 
                    onClick={this.handleOnClick.bind(this)}>
                    {translate('container.home.btn-text')}
                </button>
            </div>
        );
    }

}
