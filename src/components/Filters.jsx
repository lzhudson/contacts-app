import React from 'react';
import './Filters.scss';

import Button from './Button';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
    const { nameSearch, handleInputChange, handleClickSearch, sortActive, handleChangeSort } = this.props;
		return (
			<div data-testid="filters" className="container">
        		<section className="filters">
            		<div className="filters__search">
              			<input 
                      value={nameSearch} 
                      type="text" 
                      className="filters__search__input" 
                      placeholder="Pesquisar" 
                      onChange={handleInputChange}
                      name="nameSearch"
                    />
		                <button onClick={handleClickSearch} className="filters__search__icon">
          			      <i className="fa fa-search"/>
              			</button>
            		</div>
                <Button title="Nome" nameButton="name" active={sortActive} handleChangeSort={handleChangeSort} />
                <Button title="País" nameButton="country" active={sortActive} handleChangeSort={handleChangeSort} />
                <Button title="Empresa" nameButton="company" active={sortActive}  handleChangeSort={handleChangeSort} />
                <Button title="Departamento" nameButton="department" active={sortActive} handleChangeSort={handleChangeSort} />
                <Button title="Data de admissão" nameButton="admissionDate" active={sortActive} handleChangeSort={handleChangeSort} />
          		</section>
        	</div>
		);
	}
}

export default Filters;
