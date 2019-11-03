import React, {Component} from 'react'; 
import message from "./message.svg"
import dashboard from "./dashboard.svg"
import store from "./store.svg"

class Sidebar extends Component {
    render() {
        return (
                <div class={"bg-light border-right " + (this.props.sidebar === true ? "toggled" : "")} id="sidebar-wrapper">
                    <div class="sidebar-heading"><b>Fullhouse</b></div>
                    <div class="list-group list-group-flush">
                        <a href="/" class={"list-group-item list-group-item-action bg-light" + (this.props.page == "dashboard" ? " active" : "")}><img src={dashboard} class="menu-icon"></img>Dashboard</a>
                        <a href="/messages" class={"list-group-item list-group-item-action bg-light" + (this.props.page == "messages" ? " active" : "")}><img src={message} class="menu-icon"></img>Messages</a>
                        <a href="/inventory" class={"list-group-item list-group-item-action bg-light" + (this.props.page == "inventory" ? " active" : "")}><img src={store} class="menu-icon"></img>Inventory</a>
                    </div>
                    <div class="list-group list-group-flush">
                        <a class="add-link" href="/update"><button id="update-button" onClick="window.location.href='/update'">+ Add Item</button></a>
                    </div>
                </div>
        );
    }
}

export default Sidebar;