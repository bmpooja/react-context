import React, { Component } from 'react'
import ThemeContext from './ThemeContext';

class Button extends Component{
    render (){
        console.log(this.context)
    return(
        <div className =   {'buttonClass'}>
            <button className={this.context + '-theme'}>Switch Theme </button>
        </div>
    )
    }
}

Button.contextType = ThemeContext
export default Button;