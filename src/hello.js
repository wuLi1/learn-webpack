import React, { Component } from 'react';

let name = 'wwww';
let name1 = 'cs';

export default class Hello extends Component{
    render() {
        return (
            <div>
                {name}{name1}
            </div>
        )
    }
}

// module.exports = function () {
//     let hello = document.createElement('div');
//     hello.innerHTML = "Long time no see";
//     return hello;
// };

