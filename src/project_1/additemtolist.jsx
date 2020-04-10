import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // to handle one item in once
            item: "",
            // to handle all list of items
            items: [],
            selecetedItems: 0
        };
        this.checkAndSaveItem = this.checkAndSaveItem.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.cancelCheck = this.cancelCheck.bind(this);
    }
    // update input value on change event on input field
    updateInput(text) {
        this.setState({
            item: text
        });
    }

    // check and commit new item to list
    checkAndSaveItem() {
        if (this.state.item.length > 0) {
            this.addItem(this.state.item);
            this.setState({ item: '' })
        }
    }

    // commit the item to pre defined list items
    addItem(item) {
        let tempList = this.state.items;
        tempList.push(item);
        this.setState({ items: tempList })
    }


    cancelCheck(index) {
        var item = document.getElementById(index);
        // remove line-through
        if (item.className === 'is-done') {
            // decrease number of selected items
            this.setState({ selecetedItems: this.state.selecetedItems - 1 });

            // remove class from item attache with index
            item.classList.remove("is-done");
        }
        // put line-through
        else {
            // increase number of selected items
            this.setState({ selecetedItems: this.state.selecetedItems + 1 });

            // applay class to item with its index
            item.className = 'is-done';

            // show items selected from all items
            document.getElementById("selectedItems").style.display = 'inline-block';
        }
    }


    render() {
        // note that you can ignore all css and bootstrap classes it for styling only
        return (
            <>
                <div className="container mt-4">
                    <h3>add new item</h3>
                    <div className="col jumbotron">
                        <label for="product">Email address</label>
                        <input id="product" placeholder="Enter product" className="form-control btn-lg col-md-3" onChange={text => this.updateInput(text.target.value)} value={this.state.item} valuetype="text" />
                        <button className="btn btn-success mt-3" onClick={this.checkAndSaveItem} > Save Item</button>
                    </div>

                    <div id="selectedItems" style={{ display: 'none' }}>
                        {this.state.selecetedItems} from {this.state.items.length}
                    </div>
                    <h2> Products</h2>
                    <ul>
                        {
                            // here we publish all items in list as index and value
                            // note that it jsx code so that it between bracets
                            this.state.items.map((item, index) =>
                                <li key={index} id={index} onClick={this.cancelCheck.bind(this, index)}>
                                    {item}
                                </li>

                            )
                        }
                    </ul>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}