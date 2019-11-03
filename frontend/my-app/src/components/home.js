import React,{Component} from 'react'; 
import './pages.css';
import Sidebar from './sidebar/sidebar.js'
import menuIcon from "../assessts/menu.svg"
import person from "../assessts/person.svg"
import message from "../assessts/message.svg"

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        };
    }
    render() {
        return (
        <div class="d-flex " id='wrapper '>
            <Sidebar sidebar={this.state.sidebar} page="dashboard"/>
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom topnav">
                <button class="blank-button" id="menu-toggle" onClick={() => this.setState({sidebar: !this.state.sidebar})}><img src={menuIcon}></img></button>

                <button class="navbar-toggler blank-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={person}></img>
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
                        <a class="nav-link dropdown-toggle" href="/inventory" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Edit Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/login">Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>

                <div class="container-fluid page-content-div">
                <h1 class="mt-4">Dashboard</h1>
                <p class="blurb"></p>
                <div class="table-card col-lg-7">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Scarcity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">T-shirts</td>
                        <td>men, women, clothing, shirts</td>
                        <td>55/100</td>
                        </tr>
                        <tr>
                        <td scope="row">Canned Food</td>
                        <td>food, canned</td>
                        <td>52395/10000</td>
                        </tr>
                        <tr>
                        <td scope="row">Socks</td>
                        <td>men, women, clothing, socks</td>
                        <td>55/100</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="rec-card col-lg-4">
                    <div class="rec-title">Recommended Shelters</div>
                    <div class="rec-card-item">
                        <div class="rec-card-left">
                            <h5>Shelter Alpha</h5>
                            <p>~25 miles | 15,000+ surplus</p>
                        </div>
                        <div class="rec-card-right"><a href="/messages"><img src={message}></img></a></div>
                    </div>
                    <div class="rec-card-item">
                        <div class="rec-card-left">
                            <h5>Shelter Alpha</h5>
                            <p>~25 miles | 15,000+ surplus</p>
                        </div>
                        <div class="rec-card-right"><a href="/messages"><img src={message}></img></a></div>
                    </div>                    <div class="rec-card-item">
                        <div class="rec-card-left">
                            <h5>Shelter Alpha</h5>
                            <p>~25 miles | 15,000+ surplus</p>
                        </div>
                        <div class="rec-card-right"><a href="/messages"><img src={message}></img></a></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default home;
