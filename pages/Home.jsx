const {Link} = ReactRouterDOM
export default class Home extends React.Component {

    render() {
        return (
            <section className="home flex center-center light-sec-txt">
                <div className="container">
                    <h1 className="dark-prime-txt">Welcome</h1>
                    <h3>To our site</h3>
                    <p>In this gallery you can find all the books that you need</p>
                    <button><Link to={'/gallery'}>Gallery</Link></button>
                    <p>Check out our new service the best mail box you can find for free!</p>
                    <button><Link to={'/mail'}>Mail</Link></button>
                    <p>Dont miss out our spacial service the "Note Section"</p>
                    <button><Link to={'/missKeep'}>Note</Link></button>
                </div>
            </section>
        )
    }
}