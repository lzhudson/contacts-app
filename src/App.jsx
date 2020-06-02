import React from 'react';

import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Filters from './components/Filters';
import './App.scss';
import orderArray from './utils/sort.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      nameSearch: '',
      sortActive: "name",
    }
  }

  async componentDidMount() {
    const data = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');
    const response = await data.json();
    this.setState({
      data: response,
    });
  }

  handleInputChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState({
      [targetName]: targetValue
    })
  }
  handleClickSearch = (e) => {
    const inputSearchValue = this.state.nameSearch.toLowerCase();
    const filterByName = this.state.data.filter(data => {
      const name = data.name.toLowerCase();
      if(name.includes(inputSearchValue)) {
        return data;
      }
    })
    this.setState({
      data: filterByName
    });
  }

  handleChangeSort = async (e) => {
    const targetName = e.target.name;
    await this.setState({
      sortActive: targetName
    });
    const sorteredData = this.state.data.sort((a, b) => {
      if(a[this.state.sortActive] > b[this.state.sortActive]) {
        return 1;
      }
      if(a[this.state.sortActive] < b[this.state.sortActive]) {
        return -1;
      }
      return 0;
    });
    this.setState({    
      data: sorteredData
    });
  } 

  render() {
    const { data, nameSearch, sortActive } = this.state;
    const { handleInputChange, handleClickSearch, handleChangeSort } = this;

    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters 
          nameSearch={nameSearch}
          handleInputChange={handleInputChange} 
          handleClickSearch={handleClickSearch}
          sortActive={sortActive}
          handleChangeSort={handleChangeSort}
        />
        <Contacts>
          {data.map(data=> <Contact key={data.id} data={data} />)}
        </Contacts>
      </div>
    )
  }
}

export default App;
