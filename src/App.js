import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      orders:[],
      currentItems:[],
      items:[
        {
          id:1,
        title: 'Nissan Skyline',
        img:'NissanSkyline.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Nissan',
        price: '67000.99'
        },
        {
          id:2,
        title: 'Honda Civic',
        img:'hondaCivic.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Honda',
        price: '7999.99'
        },
        {
          id:3,
        title: 'Honda NSX',
        img:'hondaNsx.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Honda',
        price: '45125.5'
        },
        {
          id:4,
        title: 'Mazda RX-7',
        img:'MazdaRx7.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Mazda',
        price: '60500.50'
        },
        {
          id:5,
        title: 'Nissan GTR',
        img:'R35.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Nissan',
        price: '87320.30'
        },
        {
          id:6,
        title: 'Mazda Miata',
        img:'mazdaMiata.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'Honda',
        price: '25530.80'
        }
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd = {this.addToOrder} onShowItem={this.onShowItem}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) isInArray = true
    })
    if(!isInArray) this.setState({orders: [...this.state.orders, item]})
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
}

export default App;
