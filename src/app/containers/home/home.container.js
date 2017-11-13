import { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'

// Services
import { translate } from '../../services/i18n';
import { ExampleActions } from '../../services/redux/actions';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    clickAction: () => dispatch(ExampleActions.clickExample({click: true})),
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export class Home extends Component {
    render() {
        const {clickAction} = this.props;
        
        return (
            <div>
                <h1>
                    {translate('container.home.title')}
                </h1>
                <button 
                    onClick={clickAction}>
                    {translate('container.home.btn-text')}
                </button>
            </div>
        );
    }

}
