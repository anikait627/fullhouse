import React, {Component} from 'react'; 
import './pages.css';
import Sidebar from './sidebar/sidebar.js'
import menuIcon from "../assessts/menu.svg"
import person from "../assessts/person.svg"
import message from "../assessts/message.svg"


class inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            sidebar: true
        };
    }
    componentDidMount() {
        fetch("/backend/items?shelterID=1").then(res => res.json()).then(json => {this.setState({items: json.data})}
        )
    }
    render() {
        return (
        <div class="d-flex " id='wrapper '>
            <Sidebar sidebar={this.state.sidebar}/>
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
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
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <h1 class="mt-4">Inventory</h1>
                <p class="blurb">The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <div class="table-card col-lg-10">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map((item)=> {
                        return (
                            <tr>
                            <td scope="row">{item.name}</td>
                            <td>{item.tags.join(", ")}</td>
                            <td>{item.count}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default inventory;