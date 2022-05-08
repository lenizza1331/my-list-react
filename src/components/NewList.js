import { useState } from 'react';


function NewList (){

    const [userInput, setUserInput] = useState('');
    const [myList, setMyList] = useState(["Visit the exhibition", "Buy nice flowers", "Cook a pie", "Meet the dawn"]);

    const submitAdd = (e) => {
        e.preventDefault();
    };
    
    const changeInput = (e) => {
        setUserInput(e);
    }



    const addItem = (userInput) => {
        if (userInput === ""){
            alert('Please add an item')
        }
        else {
        setMyList((oldList) => {
            return[...oldList, userInput];
        });      
        setUserInput('');
        }  
        
    };




    const deleteAll = () => {
        setMyList([])
    };




    const crossItem = (event) => {
        const li = event.target;
        li.classList.toggle("crossed");
    }





return (
    <form onSubmit={submitAdd}>
                <div className="container__item__list">
                <input
                    placeholder="Today I want to..."
                    type="text"
                    onChange={(e) => {
                        changeInput(e.target.value);
                    }}
                    value={userInput} />
                </div>

                <div className="container__item__list" >
                    <button className="btn_add" onClick={()=>addItem(userInput)}>
                        Add
                    </button>
                </div>

                <div className="container__item__list">
                    <button className="btn_clear" onClick={deleteAll}>Clear all</button>
                </div>

                <div className="container__item__list">
                    <ul>
                        {myList.map((i, index)=>(
                            <li onClick={crossItem} key={index}>{i}</li>
                        ))}
                    </ul>
                </div>
                </form>
)
                        }



export default NewList;