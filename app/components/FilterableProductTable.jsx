import React, {Component} from 'react';
import Rebase from 're-base';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

var base = Rebase.createClass('https://thinking-in-react.firebaseio.com/products');

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      filterText: '',
      inStockOnly: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  componentDidMount(){
    this.ref = base.syncState('productList', {
      context: this,
      state: 'products',
      asArray: true
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
