import React, { Component } from 'react';

import '../../assets/styles/Menu.scss';

export class Menu extends Component {
	render() {
		return <div className="app__menu_container">
    				<button className="menu__button__pink"></button>
                    <input type="radio" name="app__menu" id="radio__cup" className="radio__dnone" defaultChecked/>
                    <label htmlFor="radio__cup" className="menu__radio radio__cup"></label>
                    <input type="radio" name="app__menu"  id="radio__star" className="radio__dnone"/>
                    <label htmlFor="radio__star" className="menu__radio radio__star"></label>
                    <input type="radio" name="app__menu" id="radio__diamond" className="radio__dnone"/>
                    <label htmlFor="radio__diamond" className="menu__radio radio__diamond"></label>
                    <input type="radio" name="app__menu"  id="radio__anchor" className="radio__dnone"/>
                    <label htmlFor="radio__anchor" className="menu__radio radio__anchor"></label>
        			</div>
        		
	}
}
