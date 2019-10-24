import React, { Component } from 'react'

class BurgerMenu extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // myFunction = () => {
    //     var x = document.querySelector(".links");
    //     if (x.className === "my-toggle-menu") {
    //       x.className += " responsive";
    //     } else {
    //       x.className = "my-toggle-menu";
    //     }
    //   }

    render() {
        return (
            <div className="menu-toggle" onClick="myFunction()">
                menu
            </div>
        )
    }
}

export default BurgerMenu