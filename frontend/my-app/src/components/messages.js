import React, {Component} from 'react'; 
import './pages.css';
import './messages.css'
import Sidebar from './sidebar/sidebar.js'
import menuIcon from "../assessts/menu.svg"
import person from "../assessts/person.svg"
import message from "../assessts/message.svg"


class messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        };
    }
    render() {
        return (
            <div class="d-flex " id='wrapper '>
            <Sidebar sidebar={this.state.sidebar} page="messages"/>
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

                <div class="content-wrapper message-wrapper table-card col-lg-10">
<div class="row gutters">

    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

        <div class="card m-0 chat-bg">
            <div class="row no-gutters">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div class="users-container">
                        <div class="chat-search-box">
                            <div class="input-group">
                                <input class="form-control" placeholder="Search"/>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-info">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul class="users">
                            <li class="person" data-chat="person1">
                                <div class="user">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                    <span class="status busy"></span>
                                </div>
                                <p class="name-time">
                                    <span class="name">Steve Bangalter</span>
                                    <span class="time">15/02/2019</span>
                                </p>
                            </li>
                            <li class="person" data-chat="person1">
                                <div class="user">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin"/>
                                    <span class="status offline"></span>
                                </div>
                                <p class="name-time">
                                    <span class="name">Steve Bangalter</span>
                                    <span class="time">15/02/2019</span>
                                </p>
                            </li>
                            <li class="person active-user" data-chat="person2">
                                <div class="user">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Retail Admin"/>
                                    <span class="status away"></span>
                                </div>
                                <p class="name-time">
                                    <span class="name">Peter Gregor</span>
                                    <span class="time">12/02/2019</span>
                                </p>
                            </li>
                            <li class="person" data-chat="person1">
                                <div class="user">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin"/>
                                    <span class="status offline"></span>
                                </div>
                                <p class="name-time">
                                    <span class="name">Steve Bangalter</span>
                                    <span class="time">15/02/2019</span>
                                </p>
                            </li>
                            <li class="person" data-chat="person1">
                                <div class="user">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin"/>
                                    <span class="status offline"></span>
                                </div>
                                <p class="name-time">
                                    <span class="name">Steve Bangalter</span>
                                    <span class="time">15/02/2019</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <div class="selected-user">
                        <span>To: <span class="name">Emily Russell</span></span>
                    </div>
                    <div class="chat-container">
                        <ul class="chat-box chatContainerScroll">
                            <li class="chat-right">
                                <div class="chat-hour">08:56 <span class="fa fa-check-circle"></span></div>
                                <div class="chat-text">Hi, Russell
                                    <br/> I need more socks at Shelter Alpha and was wondering if we could trade?</div>
                                <div class="chat-avatar">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                    <div class="chat-name">Sam</div>
                                </div>
                            </li>
                            <li class="chat-left">
                                <div class="chat-avatar">
                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                    <div class="chat-name">Russell</div>
                                </div>
                                <div class="chat-text">Hello, of course! Let me know when you would like to pick them up</div>
                                <div class="chat-hour">11:55 <span class="fa fa-check-circle"></span></div>
                            </li>
                        </ul>
                        <div class="form-group mt-3 mb-0">
                            <textarea class="form-control" rows="3" placeholder="Type your message here..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>



                
                </div>


            </div>
        )
    }


}

export default messages;