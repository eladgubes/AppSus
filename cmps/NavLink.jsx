const {Link} = ReactRouterDOM

export default class NavLink extends React.Component {

    // var menuOpen = 'menu-open';

    state = {
        menuOpen: 'menu-open'
    }

    onToggleMenu = () => {
        // (this.state.menuOpen === 'menu-open') ? this.setState({ menuOpen: '' }) : this.setState({ menuOpen: 'menu-open' })
    }

    render(){

        return (
            <nav className="flex">
                <ul className={`main-nav ${this.state.menuOpen} clean-list`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/missKeep'>Note</Link></li>
                    <li><Link to='/mail'>Mail</Link></li>
                </ul>
                <a onClick={this.onToggleMenu} className="menu hide"><img src="assets/icons/menu.png" alt=""/></a>
            </nav>
        )
    }


}