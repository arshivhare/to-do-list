import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";



function ListItems(props){
    const listItems = props.items.map(item => {
        return (
            <div key={item.timeStamp} className="toDoRow">
                <div className="toDoText">
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => props.selectMultiple(item.timeStamp)}
                        />
                        <p className="toDoMessage">{item.text}</p>
                </div>
                <button
                    className="deleteToDoButton"
                    onClick={() => props.deleteItem(item.timeStamp)}>
                        <FontAwesomeIcon icon={faTrash}/>
                        {/* X */}
                    </button>
            </div>
        );
    });


    return (
        <nav className= "itemPanel">

            {props.items.length === 0 ? <p>You don't have anything in your To-Do List!</p>: listItems}

            {props.items.length !== 0 && (
                <div className="panel-block">
                    <button
                        className="deleteAllButton" 
                        onClick={props.deleteMultiple}>
                            <FontAwesomeIcon icon={faTrash}/> &nbsp; Delete All Selected!
                            {/* Delete All Selected! */}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default ListItems