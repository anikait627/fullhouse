import React,{Component} from 'react'; 
import './pages.css';
import Sidebar from './sidebar/sidebar.js'

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        };
    }
    render() {
        return (
        <div class={"d-flex " + (this.state.sidebar === true ? "" : "toggled")} id='wrapper '>
            <Sidebar/>
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle" onClick={() => this.setState({sidebar: !this.state.sidebar})}>Toggle Menu</button>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Messages <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>

                <div class="container-fluid page-content-div">
                <h1 class="mt-4">Inventory</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <div class="table-card col-lg-7">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Stock/Demand</th>
                        <th scope="col">Situation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">T-shirts</td>
                        <td>men, women, clothing, shirts</td>
                        <td>55/100</td>
                        <td>-45</td>
                        </tr>
                        <tr>
                        <td scope="row">Canned Food</td>
                        <td>food, canned</td>
                        <td>52395/10000</td>
                        <td>+5000</td>
                        </tr>
                        <tr>
                        <td scope="row">Socks</td>
                        <td>men, women, clothing, socks</td>
                        <td>55/100</td>
                        <td>-45</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="rec-card col-lg-4">
                    <div class="rec-title">Recommended Shelters</div>
                    <div class="rec-card-item">Item</div>
                    <div class="rec-card-item">Item</div>
                    <div class="rec-card-item">Item</div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default home;