import React from "react";
import './styles.css'

class List extends React.Component{
    render(){
        return(
            <div className="task_main_div">
                <li
                    className="li_item" 
                    id={this.props.index}> 
                    {this.props.value}
                </li>
                <button 
                    className="remove_button" 
                    onClick={ () => {
                        this.props.onClick(this.props.index);
                    }}> 
                    x
                </button>
            </div>
        );
    }
}

export default List;