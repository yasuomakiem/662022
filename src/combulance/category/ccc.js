import React from "react";
import ItemCategory from "./Components/ItemsCategory";

class Categorys extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            category: [
                {
                    id: 1,
                    name: 'menu 1',
                    status: false,
                },
                {
                    id: 2,
                    name: 'menu 2',
                    status: false,
                },
                {
                    id: 3,
                    name: 'menu 3',
                    status: false,
                },
                {
                    id: 4,
                    name: 'menu 4',
                    status: false,
                },
            ]
        }
    }
    
    handleClick = (key) => {
        let _state = this.state.category;
        // eslint-disable-next-line
        _state.map((items) => {
            items.status = false;
        });

        _state[key].status = !_state[key].status;

        this.setState({
            category: _state,
        });
    }
    
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.category.map((items, key) => {
                            return (
                                <ItemCategory key={key} data={items} HandleClick={ (e) => this.handleClick(key, e) }/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Categorys;