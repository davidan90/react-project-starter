import { Component } from 'react';
import { string, object } from 'prop-types';

const devices = {
    desktop: 'desktop',
    tablet: 'tablet',
    mobile: 'mobile',
};

export const ResponsiveComponent = () => (ComposeComponent) => {
        class WrapperComponent extends Component {
            static state = {
                isDesktop: undefined,
                isMobile: undefined,
                isTablet: undefined,
            }

            constructor(props) {
                super(props);
            }

            _getDeviceType() {
                const width = this._getWindowSize();
                switch (true) {
                    case width >= 1025:
                        return devices.desktop;
                    case width < 1025 && width >= 600:
                        return devices.tablet;
                    case width < 600:
                        return devices.mobile;
                    default:
                        return devices.desktop;
                }
            }

            _getWindowSize() {
                return window.innerWidth;
            }

            componentWillMount() {
                this.setState({
                    isDesktop: this._isDesktop(),
                    isTablet: this._isTablet(),
                    isMobile: this._isMobile(),
                });
            }

            _isDesktop() {
                return this._getDeviceType() === devices.desktop;
            }

            _isTablet() {
                return this._getDeviceType() === devices.tablet;
            }

            _isMobile() {
                return this._getDeviceType() === devices.mobile;
            }

            render() {
                return (
                    <ComposeComponent {...this.props} {...this.state} />
                );
            }
        }
        return WrapperComponent;
    }