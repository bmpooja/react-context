import React, {Component} from "react"
import ThemeContext from "./ThemeContext"

class Header extends Component {
    render() {
        return (
            <header className= {this.context + '-theme app'}>
                <h2>{this.context} Theme</h2>
            </header>
        )    
    }
}

Header.contextType = ThemeContext;
export default Header