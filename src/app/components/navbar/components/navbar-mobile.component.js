import { Component } from 'react';
import { connect } from 'react-redux';

// Services
import { AppActions } from '../../../services/redux/actions';

let openAside = false;

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    clickAction: () => {
        openAside = !openAside;
        dispatch(AppActions.openAside(openAside));
    },
});

@connect(
    null,
    mapDispatchToProps,
)
export class NavbarMobile extends Component {
    render() {
        const {clickAction} = this.props;
        return (
            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 openAside">
                <span onClick={clickAction}>...</span>
            </div>
        );
    }
}