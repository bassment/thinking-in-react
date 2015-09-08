import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value,
      this.refs.isStockOnly.getDOMNode().checked
    );
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          ref="filterTextInput"
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            ref="isStockOnly"
            checked={this.props.inStockOnly}
            onChange={this.handleChange}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}
