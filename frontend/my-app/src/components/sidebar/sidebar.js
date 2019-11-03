import React, {Component} from 'react'; 

class Sidebar extends Component {
    render() {
        return (
                <div class="bg-light border-right" id="sidebar-wrapper">
                    <div class="sidebar-heading">Fullhouse</div>
                    <div class="list-group list-group-flush">
                        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Messages</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light">Inventory</a>
                    </div>
                    <div class="list-group list-group-flush">
                        <button id="update-button">Update Inventory</button>
                    </div>
                </div>
        );
    }
}

export default Sidebar;