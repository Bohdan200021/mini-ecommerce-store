import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Antique chair',
          img: 'antique-chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '120.30',
        },
        {
          id: 2,
          title: 'Egg chair',
          img: 'egg-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '50.4',
        },
        {
          id: 3,
          title: 'Ergonomic chair',
          img: 'ergonomic.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 4,
          title: 'Gaming chair',
          img: 'gaming-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '80.99',
        },
        {
          id: 5,
          title: 'Office chair',
          img: 'officeChair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 6,
          title: 'A little sofa',
          img: 'sofa-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'sofa',
          price: '85.45',
        },
        {
          id: 6,
          title: 'Cheap chair',
          img: 'cheap-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'chairs',
          price: '25',
        },
        {
          id: 7,
          title: 'Office table',
          img: 'office-table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'tables',
          price: '89.99',
        },
        {
          id: 8,
          title: 'Office table',
          img: 'office-table2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicig',
          category: 'tables',
          price: '99.99',
        },
      ],
      ShowFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
