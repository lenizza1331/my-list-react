import { Component } from "react";

export class MyList extends Component {
    state = {
        userInput: '',
        myList: ["Visit the exhibition", "Buy nice flowers", "Cook a pie", "Meet the dawn"]
    }
    
    changeInput(e){
        this.setState({userInput: e})
    }

    addItem(input){
        if (input === ""){
            alert('Please add an item')
        }
        else {
        let fullList = this.state.myList;
        fullList.push(input);
        this.setState({myList: fullList, userInput: ''})  
        }  
    }

    crossItem(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteAll(){
        this.setState({myList:[]})
    }

    submitAdd(e){
        e.preventDefault();
    }


    render () {
        return (
            
                <form onSubmit={this.submitAdd}>
                <div className="container__item__list">
                <input
                    placeholder="Today I want to..."
                    type="text"
                    onChange={(e) => {
                        this.changeInput(e.target.value);
                    }}
                    value={this.state.userInput} />
                </div>

                <div className="container__item__list" >
                    <button className="btn_add" onClick={()=>this.addItem(this.state.userInput)}>
                        Add
                    </button>
                </div>

                <div className="container__item__list">
                    <button className="btn_clear" onClick={()=>this.deleteAll()}>Clear all</button>
                </div>

                <div className="container__item__list">
                    <ul>
                        {this.state.myList.map((i, index)=>(
                            <li onClick={this.crossItem} key={index}>{i}</li>
                        ))}
                    </ul>
                </div>
                </form>
            
        )
    }
}