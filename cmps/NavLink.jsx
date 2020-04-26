const {Link} = ReactRouterDOM

export default function NavLink (){

    return (
        <nav className="flex">
            <ul className="flex clean-list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/mail'>Mail</Link></li>
            </ul>
        </nav>
    )

}