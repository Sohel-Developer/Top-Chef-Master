import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Navbar
            className='container '
            fluid={true}
            rounded={true}
        >
            <div>
                <img
                    src={logo}
                    className="mr-3 h-12 sm:h-12"
                    alt="Chef Logo"
                />
            </div>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User Picture" size="md" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link
                    className='hover:text-blue-500'
                    to="/"
                >
                    Home
                </Link>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/blog">
                    Blog
                </NavLink>
                <NavLink to="/signup">
                    Sign Up
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                >
                    Blog
                </NavLink>;
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;