import React from "react";
import List from "./List";
import './styles.css'

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskList : [],
            taskname : "",
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }


    handleInput(e){
        this.setState({
            taskname : e.target.value
        });
    }

    onlySpaces(str) {
        return str.trim().length === 0;
    }

    handleClick()
    {
        if(this.onlySpaces(this.state.taskname))
        {
            alert('Cant add blank item');
            this.setState({
                taskname : ""
            });
            return;
        }
        this.setState((prevState) => ({
            taskList : [...prevState.taskList,this.state.taskname],
            taskname : ""
        }));
    }

    handleDelete(e){
        this.setState( (prevState) => ({
            taskList : prevState.taskList.filter((value,index) => index !== e)
        }))
    }

    render(){
        return(
            <div className="main_div">
                <div className="input_div">
                    <input 
                        className="task_input"
                        type="text" 
                        placeholder="Enter a task" 
                        value={this.state.taskname} 
                        onChange={this.handleInput} 
                    />
                    <button 
                        className="add_button"
                        onClick={this.handleClick}> +   
                    </button>
                </div>
                <div className="list_div">
                    <ul style={{padding:"0"}}>
                        {
                            this.state.taskList.map((value,index) => {
                                return <List value={value} index ={index} onClick={this.handleDelete} /> 
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ToDoList;