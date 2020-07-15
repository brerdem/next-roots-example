import Link from 'next/link';
import Navigation from '../header/navigation';


function Header () {
    return <header>
        <div className="uk-container">
            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" uk-navbar="">
                <div className="uk-navbar-left uk-width-1">

                    <div className="uk-navbar-item uk-padding-remove-left uk-hidden@l">
                        <a href="#">
                            <img src="/icons/icn-menu.svg" uk-svg="" />
                        </a>
                    </div>

                    <Link href="/">
                        <a className="uk-navbar-item uk-logo uk-padding-remove">
                            <img src="/images/logos/logo.svg" alt="" />
                        </a>
                    </Link>

                    <Navigation />

                    <div className="uk-navbar-item uk-visible@l">
                        <a href="" className="uk-button uk-button-default" target="_blank" rel="noopener noreferrer">Online Alışveriş</a>
                    </div>

                    <div className="uk-navbar-item uk-padding-remove language">
                        <a href="#" className="uk-link-reset">TR<img src="/icons/icn-chevron-down.svg" uk-svg="" /></a> 
                    </div>

                </div>
            </nav>
        </div>
    </header>
}

export default Header