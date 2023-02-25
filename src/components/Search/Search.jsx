import React, { useState } from 'react';
import {ReactComponent as Icon} from '../../image/ic-search.svg'
import './style.css';


const Search = ({ handleInput }) => {
  const [text, setText] = useState('');

  return (
    <div className="search">
      <input value={text} onChange={(e) => setText(e.target.value)} className='search__input' placeholder='Поиск'></input>
      <Icon className='search__icon' onClick={() => handleInput(text)} />
    </div>
  );
};


/* const Search = ({ handleInput }) => {
  const [text, setText] = useState('');

  return (
    <div className="search">
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      
      <span onClick={() => handleInput(text)}>Поиск</span>
    </div>
  );
}; */

export default Search;
