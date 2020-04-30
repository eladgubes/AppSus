const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MissKeep from './pages/NotePages/MissKeep.jsx'
import Mail from './pages/MailPages/Mail.jsx'
import Gallery from './pages/Gallery.jsx'
import NavLink from './cmps/NavLink.jsx'
import BookDetails from './pages/BookDetails.jsx'
export class App extends React.Component {

    render() {
        return (
            <Router>
                <header className="flex space-between dark-prime-bgc center-center">
                        <h1>AppSus</h1>
                        <NavLink />
                </header>
                <main className="dark-sec-bgc">
                    <Switch>
                        <Route exact component={Home} path="/" />
                        <Route exact component={About} path="/about" />
                        <Route exact component={Gallery} path="/gallery" />
                        <Route exact component={MissKeep} path="/missKeep" />
                        <Route exact component={MissKeep} path="/missKeep/:title/:text" />
                        <Route exact component={Mail} path="/mail" />
                        <Route exact component={Mail} path="/mail/:title/:text" />
                        <Route exact component={BookDetails} path="/gallery/:bookId" />
                    </Switch>
                </main>
                <footer className="flex center-center ">
                        <h1>Logo</h1>
                        <p>&copy; logo akdnskjd advjksbjsd lhs jsb fj bfdj</p>
                </footer>
            </Router>
        )
    }
}






