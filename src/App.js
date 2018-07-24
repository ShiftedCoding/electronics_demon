import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from "./components/home/home"
import Projects from "./components/projects/projects"
import Portfolio from "./components/portfolio/portfolio"

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  copyRight: {
    position: 'fixed',
    color: 'wheat',
    bottom: 0,
    width: '100%',
    right: 0,
    textAlign: 'right',
  }
};

function ButtonAppBar(props) {
  console.log(props);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Navbar dark light expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/portfolio" component={Portfolio} />
      <div className={classes.copyRight}>&copy; Copyright 2018</div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
