import React, {Component} from 'react'; 
import './pages.css';
import Sidebar from './sidebar/sidebar.js'
import menuIcon from "../assessts/menu.svg"
import person from "../assessts/person.svg"
import message from "../assessts/message.svg"
import shopping from "../assessts/shopping.svg"


class update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            sidebar: true
        };
    }
    formSubmit() {

    }
    render() {
        return (
        <div class="d-flex " id='wrapper '>
            <Sidebar sidebar={this.state.sidebar}/>
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
                <h1 class="mt-4">Update Inventory</h1>
                <div id="lupdate-row">
                <div class="col-lg-5 display-img"><img src={shopping}></img></div>
                <div class="col-lg-5">
                <form>
                    <div class="form-group">
                        <label for="itemNameInput">Item Name</label>
                        <input type="name" class="form-control" id="itemNameInput" aria-describedby="itemHelp" placeholder="Enter the name of the item.."/>
                    </div>
                    <div class="form-group">
                        <label for="itemTagInput">Tags</label>
                        <input type="tags" class="form-control" id="itemTagInput" placeholder="Enter tags that describe the item..."/>
                    </div>
                    <div class="form-group">
                        <label for="itemAmountInput">Amount</label>
                        <input type="amount" class="form-control" id="itemAmountInput" placeholder="Number of items..."/>
                    </div>
                    <button type="submit" id="add-button" onSubmit={this.formSubmit}>Add Item</button>
                    </form>
                </div>
                </div>
                </div>

            </div>
        </div>
        );
    }
}

export default update;