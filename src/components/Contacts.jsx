import React from "react";
import './Contacts.scss';
class Contacts extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div data-testid="contacts" className="container">
          		<section className="contacts">
          		<article data-testid="contact" className="contact">
            		<span className="contact__avatar" />
            		<span className="contact__data">Nome</span>
            		<span className="contact__data">Telefone</span>
            		<span className="contact__data">País</span>
            		<span className="contact__data">Admissão</span>
            		<span className="contact__data">Empresa</span>
            		<span className="contact__data">Departamento</span>
        		</article>
          			{this.props.children}
          		</section>
            </div>
		);
	}
}

export default Contacts;
