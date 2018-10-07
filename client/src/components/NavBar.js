import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='home' active={this.activeItem('/')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='Cyberyne Breweries a Subsidiary of Umbrella Corp' />
            </Link>
          </Menu.Menu>
        </Menu>


        <Menu pointing>
          <Link to='/Beer'>
            <Menu.Item name='beers' active={this.activeItem('/Beer')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/Beer'>
              <Menu.Item name='See Our Suds' />
            </Link>
          </Menu.Menu>
        </Menu>

        <Menu pointing>
          <Link to='/Brewery'>
            <Menu.Item name='breweries' active={this.activeItem('/Brewery')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/Brewery'>
              <Menu.Item name='An Intoxicating Network of Fine Beverages' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
