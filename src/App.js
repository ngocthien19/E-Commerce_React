import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Data, ShopData } from './data/data'
import { useState } from 'react'
import Header from './common/header/Header'
import Pages from './pages/Pages'
import Cart from './common/cart/Cart'
import Footer from './common/footer/Footer'
import Product from './components/product/Product'
import EarphoneBanner from './assets/images/banner-earphone.jpg'
import HatBanner from './assets/images/banner-hat.jpg'
import MobileBanner from './assets/images/banner-mobile.jpg'
import ShoesBanner from './assets/images/banner-shoes.jpg'
import WatchBanner from './assets/images/banner-watch.jpg'
import TreeBanner from './assets/images/banner-tree.jpg'
import MakeupBanner from './assets/images/banner-makeup.jpg'
import SunglassBanner from './assets/images/banner-sunglass.jpg'
import WifiBanner from './assets/images/banner-wifi.jpg'
import ProductDetail from './components/productDetail/ProductDetail'

function App() {

  const { productItems } = Data
  const { shopItems } = ShopData

  const [cartItem, setCartItem] = useState([])

  const handleAddToCart = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map(item => item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item))
    } else {
      setCartItem([...cartItem, {...product, qty:1}])
    }
  }

  const handleDeleteCart = (product) => {
    setCartItem(cartItem.filter(item => item.id!== product.id))
  }

  const handleDeleteQty = (product) => {
    if (product.qty > 1) {
      setCartItem(cartItem.map(item => item.id === product.id ? {...product, qty: product.qty - 1} : item))
    } else {
      handleDeleteCart(product)
    }
  }

  return (
    <>
      <Router>
        <Header 
          cartItem={cartItem}
        />
        <Switch>
          <Route exact path="/">
            <Pages 
              productItems={productItems}
              shopItems={shopItems}
              handleAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/cart">
            <Cart 
              cartItem={cartItem}
              handleAddToCart={handleAddToCart}
              handleDeleteCart={handleDeleteCart}
              handleDeleteQty={handleDeleteQty}
            />
          </Route>

          <Route exact path="/earphone">
            <Product category="earphone" banner={EarphoneBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="/earphone/:id">
            <ProductDetail category="earphone" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/mobile">
            <Product category="mobile" banner={MobileBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/mobile/:id">
            <ProductDetail category="mobile" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/hat">
            <Product category="hat" banner={HatBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/hat/:id">
            <ProductDetail category="hat" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/watch">
            <Product category="watch" banner={WatchBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/watch/:id">
            <ProductDetail category="watch" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/shoes">
            <Product category="shoes" banner={ShoesBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/shoes/:id">
            <ProductDetail category="shoes" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/sunglass">
            <Product category="sunglass" banner={SunglassBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/sunglass/:id">
            <ProductDetail category="sunglass" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/makeup">
            <Product category="makeup" banner={MakeupBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/makeup/:id">
            <ProductDetail category="makeup" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/tree">
            <Product category="tree" banner={TreeBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/tree/:id">
            <ProductDetail category="tree" handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/wifi">
            <Product category="wifi" banner={WifiBanner} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/wifi/:id">
            <ProductDetail category="wifi" handleAddToCart={handleAddToCart} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
