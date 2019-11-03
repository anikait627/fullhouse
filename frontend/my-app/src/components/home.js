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
            sidebar: true,
            shelters: null,
            currShelter: null,
            lookingForStuff: false, 
            selectedCategory: null,
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch("/backend/shelters");
            let json = await res.json();
            if (!json["success"]){
                console.error("Server Error!!!", json["error"]);
                alert("An error occurrend fetching statistics: " + json["error"]);
                return;
            }
    
            this.setState({shelters: json["data"], currShelter: json["data"][0]});
        } catch (e) {
            console.error(e);
            alert("An error occurrend fetching statistics");
        }

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
                        <th scope="col">Category</th>
                        <th scope="col">Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["Shoes", "Shirts", "Pants", "Baby"].map(category => (                   
                            <tr className={this.state.selectedCategory == category ? "bg-light" : ""}>
                                <td scope="row"><a href="#" onClick={e => {
                                    e.preventDefault();
                                    this.setState({selectedCategory: category, lookingForStuff: this.state.currShelter[category.toLowerCase()+"PercentOutOfMet"] < 1})
                                }}>{category}</a></td>
                                <td className={this.state.currShelter && this.state.currShelter[category.toLowerCase()+"PercentOutOfMet"] > 1 ? 'text-success' : this.state.currShelter && this.state.currShelter[category.toLowerCase()+"PercentOutOfMet"] > 0.5 ? 'text-warning' : 'text-danger'}>{this.state.currShelter && (this.state.currShelter[category.toLowerCase()+"PercentOutOfMet"] * 100).toFixed(2) + "%"}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div class="rec-card col-lg-4">
                    <div class="rec-title">Recommended Shelters To Contact</div>
                    {this.state.shelters && this.state.selectedCategory && this.state.shelters.map(shelter => {
                        if((this.state.lookingForStuff && !shelter[this.state.selectedCategory.toLowerCase()+"MetThreshold"]) || (!this.state.lookingForStuff && shelter[this.state.selectedCategory.toLowerCase()+"MetThreshold"]))
                            return null;
                        return (
                            <div class="rec-card-item">
                                <div class="rec-card-left">
                                    <h5>{shelter.name}</h5>
                                    <p>{this.state.lookingForStuff ? "Has excess inventory": "Looking for more inventory"} <br/> <span className={(shelter[this.state.selectedCategory.toLowerCase()+"PercentOutOfMet"]) > 1 ? 'text-success' : (shelter[this.state.selectedCategory.toLowerCase()+"PercentOutOfMet"]) > 0.5 ? 'text-warning' : 'text-danger'}>{((shelter[this.state.selectedCategory.toLowerCase()+"PercentOutOfMet"]) * 100).toFixed(2) + "% " + this.state.selectedCategory + " Capacity"}</span></p>
                                </div>
                                <div class="rec-card-right"><a href="/messages"><img src={message} style={{width: 24, color: "blue"}}></img></a></div>
                            </div>
                        )
                    })}

                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default home;
