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
              <Menu.Item name='See Our Spectacular Sensational Selection of Suds' />
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

        <Menu pointing>
          <Link to='/RandomBeer'>
            <Menu.Item name='RandomBrew' active={this.activeItem('/RandomBeer')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/RandomBeer'>
              <Menu.Item name='Roll The Dice of Drunken Destiny' />
            </Link>
          </Menu.Menu>
        </Menu>

        <Menu pointing>
          <Link to='/RandomBrewery'>
            <Menu.Item name='Where do we go Now?' active={this.activeItem('/RandomBrewery')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/RandomBrewery'>
              <Menu.Item name='Take Me to Your Leader' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
