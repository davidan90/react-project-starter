import { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'

// Services
import { translate } from '../../services/i18n';

@connect()
export class Home extends Component {
    render() {
        const {clickAction} = this.props;
        
        return (
            <div>
                <h1>
                    {translate('container.home.title')}
                </h1>
            </div>
        );
    }

}
