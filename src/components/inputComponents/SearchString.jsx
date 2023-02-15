import React, {useState} from 'react';

const SearchString = (props) => {

    const { execute } = props

    const [state, setState] = useState('')


    return (
        <form className={`find`} action="" onSubmit={(e)=>{e.preventDefault(); execute(state)}}>
            <input type="text" placeholder="Search" onChange={(e)=>{setState(e.target.value)}}  />
        </form>
    );
};

export default SearchString;