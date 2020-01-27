import React, { Component } from 'react';


class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name,
                occupation = this.props.data.occupation,
                description = this.props.data.description,
                city = this.props.data.address.city,
                networks = this.props.data.social.map((network) => {
                return <li key={network.name} ><a  href={network.url} target="_blank"><i className={network.className}></i></a></li>
            });
        }
        return (
            <div>
                <header id="home">

                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">The report</a></li>
                            <li><a className="smoothscroll" href="#resume">Countries by region</a></li>
                            <li><a className="smoothscroll" href="#portfolio">About</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Resources</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>

                    </nav>

                <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm {name}.</h1>
                            <h3>I'm a {city} based <span>{occupation}</span> {description}.</h3>
                            <hr />
                            <ul className="social">
                            {networks}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;
