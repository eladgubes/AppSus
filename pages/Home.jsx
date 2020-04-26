const {Link} = ReactRouterDOM
export default class Home extends React.Component {

    render() {
        return (
            <section className="home flex center-center light-sec-txt">
                <div className="container">
                    <h1 className="dark-prime-txt">Welcome</h1>
                    <h3>coming to our site</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias</p>
                    <button><Link to={'/gallery'}>Enter here</Link></button>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias</p>
                    <button><Link to={'/yakov'}>Enter here</Link></button>
                </div>
            </section>
        )
    }
}