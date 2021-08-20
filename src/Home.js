import {Route, Link} from 'react-router-dom';
import './App.css';

const Home = () => {

    return (
        <div className = 'home'>
            <Route exact path = '/'>
                <h1>Your favorite food, delivered while coding</h1>
                <Link to = '/pizza'>
                    <button id = 'order-pizza' >Pizza?</button>
                </Link>
            </Route>
        </div>
    )
}

export default Home