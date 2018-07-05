import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">Indy Soccer</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/home/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/games/creategame/">My Games</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/team/">My Team</NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink href="/about/">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                  <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            
          </div>

        );
      }
    }
export default Header;