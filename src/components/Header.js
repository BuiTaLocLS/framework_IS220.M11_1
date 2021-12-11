import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
class Header extends Component {
    searchToggle = (obj, evt) => {
        var container = document.querySelector(obj).closest('.search-wrapper');
        if (!container.classList.contains('active')) {
            container.classList.add('active');
            evt.preventDefault();
        }
        else if (container.classList.contains('active') && document.querySelector(obj).closest('.input-holder').length == 0) {
            container.removeClass('active');
            // clear input
            container.querySelector('.search-input').val('');
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* "  */}
                    <Link to="/about" className="navbar-brand logo">Shopthethao</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-outline-primary">search</button>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Header;