import React from 'react';
import './Button.scss';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { title, active, handleChangeSort, nameButton } = this.props;
		let className = 'filters__item';
		if(active === nameButton) {
			className += ' is-selected';
		}
		return(
			<button onClick={handleChangeSort} name={nameButton} className={className}>
              	{ title } <i className="fas fa-sort-down" />
            </button>
		);
	}
}