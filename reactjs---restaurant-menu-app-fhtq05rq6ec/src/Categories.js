import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            ss: []
        }
    }

    componentDidMount() {
        fetch(`https://stream-restaurant-menu-svc.herokuapp.com/category/`)
        .then(response => response.json())
        .then(response => {
            for(let obj of response) {
                this.setState({
                  list: [...this.state.list, obj.name],
                  ss: [...this.state.ss, obj.short_name]
                })
            }
        })   
    }

    handleClick = () => {
        fetch(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=C`)
        .then(response => response.json())
        .then(response => {
            for(let obj of response) {
                console.log(obj)
            }
        })
    }


    render() {
        return (
            <div>
                <h3>Menu Categories</h3>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={item} onClick={this.handleClick}>{item} - {this.state.ss[index]}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

export default Categories;