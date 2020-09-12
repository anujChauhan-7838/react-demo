import React from 'react';
import CardList from './components/card-list/Card-list.component'
import SearchInput from './components/search/search.component';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   constructor(){
     super();
     this.state = {
       'monsters':[],
       'searchField':''
     }
     this.searchInputChange = this.searchInputChange.bind(this);
   }
  searchInputChange(event){
    this.setState({
      'searchField':event.target.value
    })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({'monsters':users}));
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchInput handleSearch={this.searchInputChange}></SearchInput>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
 
}

export default App;
