// import React from 'react';
import { useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  //useState gives us the ability to encapsulate local state in a functional component
  const [searchField, setSearchField] = useState(''); //value we want to store, setter function
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='search-box'
        placeholder='place'
        handleChange={onSearchChange}
      />
    </div>
  );
};

//   constructor() {
//     //extending functionality from Component
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//       newName: {
//         firstName: 'firstname',
//         lastName: 'lastName',
//       },
//       company: 'ZTM',
//     };

//     // //.bind() returns a new function
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   //arrow funcs automatically binds arrow function to app component
//   //automatically get lexical scoping
//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value });
//   };

//   render() {
//     const { monsters, searchField, title, newName, company } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           className='search-box'
//           placeholder='search monsters'
//           handleChange={this.handleChange}
//         />
//         <CardList monsters={filteredMonsters} />

//         {this.state.monsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
export default App;
