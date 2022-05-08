import React, { useState } from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';

function NewList (){
    const [userInput, setUserInput] = useState('');
    const [myList, setMyList] = useState(["Visit the exhibition", "Buy nice flowers", "Cook a pie", "Meet the dawn"]);
    const variants = {
        initial: {opacity:0 , height:0},
        animate: {opacity:1 , height:'auto'},
        exit: {opacity:0 , height:0},
        transition: {duration:.5 }
    }

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

    const removeTodo = index => {
        const newList = [...myList];
        newList.splice(index, 1);
        setMyList(newList);
    };


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
                    <Reorder.Group 
                        className='ul'
                        axis='y'
                        values={myList}
                        onReorder={setMyList}
                    >
                        <AnimatePresence>
                        {myList.map((i, index)=>(
                            <Reorder.Item 
                                className='li' 
                                onClick={crossItem} 
                                onDoubleClick={()=>removeTodo(index)}
                                key={i}
                                value={i}
                                whileDrag={{
                                    scale: 1.3 ,
                                    boxShadow: "rgba(0, 0, 0, 0.25) 1px 2px 4px"
                                }}
                                {...variants}
                            >
                                {i}
                            </Reorder.Item>
                        ))}
                        </AnimatePresence>
                    </Reorder.Group>
                </div>
                </form>
)
                        }



export default NewList;