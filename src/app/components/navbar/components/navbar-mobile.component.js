import { Component } from 'react';
import { connect } from 'react-redux';

// Services
import { AppActions } from '../../../services/redux/actions';

const mapStateToProps = (state, props) => ({
    isAsideOpen: state.app.aside.open,
});

const mapDispatchToProps = (dispatch, props) => ({
    clickAction: (openAside) => {
        openAside = !openAside;
        dispatch(AppActions.openAside(openAside));
    },
});

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class NavbarMobile extends Component {
    render() {
        const { isAsideOpen, clickAction } = this.props;
        return (
            <div className="openAside">
                <span onClick={clickAction.bind(this, isAsideOpen)}>...</span>
            </div>
        );
    }
}