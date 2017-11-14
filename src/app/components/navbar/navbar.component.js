import { Component } from 'react';
import { object } from 'prop-types';

// Decorators
import { ResponsiveComponent } from '../../decorators/responsive-component.decorator';

// Components
import { NavbarDesktop } from './components/navbar-desktop.component';
import { NavbarMobile } from './components/navbar-mobile.component';

// Styles
import './_navbar.component.scss';

@ResponsiveComponent()
export class NavbarComponent extends Component {
    static propTypes = {
        links: object.isRequired,
    };

    static defaultProps = {
        links: {},
    }

    _selectNavbar({ isDesktop, isTablet, isMobile, links }) {
        return (isDesktop || isTablet) ? <NavbarDesktop links={links} /> : <NavbarMobile />;
    }

    render() {
        return (
            <nav className="container navbar">
                <div className="row">
                    {this._selectNavbar(this.props)}
                </div>
            </nav>
        );
    }
}