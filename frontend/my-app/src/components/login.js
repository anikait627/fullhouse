import React,{Component} from 'react'; 
import './login.css';
import air from "../assessts/air.svg"


class login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
        this.checkLogin = this.checkLogin.bind(this);
    }
    
    checkLogin(e) {
        
    }
    render() {
        return (
            <div id="login-body" style={{height:'100vh'}}>
                <div id="login-div">
                    <h3 style={{color:'#80CED7'}}><b>Welcome to Fullhouse</b></h3>
                    <div id="user-pass">
                        <form action="/">
                            <div id="username">
                                <p>
                                    <label>Email or Username</label><br/>
                                    <input 
                                        type = "text"
                                        id = "myUsername"
                                        value={this.state.username}
                                        onChange={e => {
                                            this.setState({username: e.target.value});
                                        }}
                                    />
                                </p>
                            </div>
                            <div id="password">
                                <p> 
                                    <label>Password</label><br/>
                                    <input 
                                        type = "password"
                                        value={this.state.password}
                                        id = "myPwd"
                                        onChange={e => {
                                            this.setState({password: e.target.value});
                                        }} 
                                    />
                                </p>
                            </div>
                            <input type="submit" value="Sign In" id="login-button"></input><br/>
                            <a href="#login" style={{fontSize:'10px',color:"black"}}>Don't have an account? Sign up today!</a>
                        </form>
                    </div>
                </div>
                <div id="picture">
                    <img src={air} alt="pic-diagram" width="900px" height="100%" style={{objectFit:"cover",objectPosition:"left"}}></img>
                </div>
            </div>
        );
    } 
}

export default login;