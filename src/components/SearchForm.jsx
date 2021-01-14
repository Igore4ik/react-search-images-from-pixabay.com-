import React from 'react';
import '../styles/App.css';

function SearchForm(props) {
    const [input,setInput] = React.useState('');
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        if(input.trim() !== ''){
            props.search(input);
        }
        setInput('');
    }

  return (
      <form onSubmit={submitForm}>
          <input value={input} onChange={(e)=>inputChange(e)} type="text"/>
          <input type="submit" value="search"/>
      </form>
  );
}

export default SearchForm;
