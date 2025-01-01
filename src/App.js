import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import TableItemPay from './common/payOrder/TableItemPay'
import PayOrder from './common/payOrder/PayOrder'
import AllProduct from './components/allProduct/AllProduct'

function App() {

  const { productItems } = Data
  const { shopItems } = ShopData

  const [cartItem, setCartItem] = useState([])
  const [itemPay, setItemPay] = useState([])

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
        <Routes>
          <Route path="/" element={<Pages 
              productItems={productItems}
              shopItems={shopItems}
              handleAddToCart={handleAddToCart}
            />}
          />
          <Route  path="/menu" element={<AllProduct 
              handleAddToCart={handleAddToCart}
            />}
          />
          <Route path="/cart" element={<Cart 
              cartItem={cartItem}
              handleAddToCart={handleAddToCart}
              handleDeleteCart={handleDeleteCart}
              handleDeleteQty={handleDeleteQty}
            />}
          />
          <Route path="/track-order" element={<TableItemPay
              itemPay={itemPay}
            />}
          />
          <Route exact path="/order" element={<PayOrder
              cartItem={cartItem}
              setCartItem={setCartItem}
              setItemPay={setItemPay}
              handleDeleteCart={handleDeleteCart}
            />}
          />

          <Route
            path="/earphone"
            element={<Product category="earphone" banner={EarphoneBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/earphone/:id"
            element={<ProductDetail category="earphone" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/mobile"
            element={<Product category="mobile" banner={MobileBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/mobile/:id"
            element={<ProductDetail category="mobile" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/hat"
            element={<Product category="hat" banner={HatBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/hat/:id"
            element={<ProductDetail category="hat" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/watch"
            element={<Product category="watch" banner={WatchBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/watch/:id"
            element={<ProductDetail category="watch" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/shoes"
            element={<Product category="shoes" banner={ShoesBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/shoes/:id"
            element={<ProductDetail category="shoes" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/sunglass"
            element={<Product category="sunglass" banner={SunglassBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/sunglass/:id"
            element={<ProductDetail category="sunglass" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/makeup"
            element={<Product category="makeup" banner={MakeupBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/makeup/:id"
            element={<ProductDetail category="makeup" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/tree"
            element={<Product category="tree" banner={TreeBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/tree/:id"
            element={<ProductDetail category="tree" handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/wifi"
            element={<Product category="wifi" banner={WifiBanner} handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/wifi/:id"
            element={<ProductDetail category="wifi" handleAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
