import './App.css'
import "aos/dist/aos.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Data, ShopData } from './data/data'
import { useEffect, useState } from 'react'
import { categories } from './navigateLink/Categories'
import AOS from 'aos'
import Header from './common/header/Header'
import Pages from './pages/Pages'
import Cart from './common/cart/Cart'
import Footer from './common/footer/Footer'
import Product from './components/product/Product'
import ProductDetail from './components/productDetail/ProductDetail'
import TableItemPay from './common/payOrder/TableItemPay'
import PayOrder from './common/payOrder/PayOrder'
import AllProduct from './components/allProduct/AllProduct'
import SearchItem from './components/searchItem/SearchItem'

function App() {
  const { productItems } = Data
  const { shopItems } = ShopData

  const [cartItem, setCartItem] = useState([])
  const [itemPay, setItemPay] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [modalSearch, setModalSearch] = useState(false)
  const [activeMenu, setActiveMenu] = useState("home")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const handleAddToCart = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map(item => item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const handleDeleteCart = (product) => {
    setCartItem(cartItem.filter(item => item.id !== product.id))
  }

  const handleDeleteQty = (product) => {
    if (product.qty > 1) {
      setCartItem(cartItem.map(item => item.id === product.id ? { ...product, qty: product.qty - 1 } : item))
    } else {
      handleDeleteCart(product)
    }
  }

  return (
    <>
      <Router>
        <Header 
          cartItem={cartItem}
          searchTerm={searchTerm} 
          activeMenu={activeMenu}
          modalSearch={modalSearch}
          setSearchTerm={setSearchTerm}
          setModalSearch={setModalSearch}
          setActiveMenu={setActiveMenu}
          setFilteredProducts={setFilteredProducts}
        />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} shopItems={shopItems} handleAddToCart={handleAddToCart} />} />
          <Route path="/menu" element={<AllProduct handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} handleAddToCart={handleAddToCart} handleDeleteCart={handleDeleteCart} handleDeleteQty={handleDeleteQty} />} />
          <Route path="/track-order" element={<TableItemPay itemPay={itemPay} />} />
          <Route 
            path="/order" 
            element={<PayOrder cartItem={cartItem} setCartItem={setCartItem} 
                        itemPay={itemPay} setItemPay={setItemPay} handleDeleteCart={handleDeleteCart}
                        setActiveMenu={setActiveMenu}
                    />}
          />
          <Route path="/item-search" element={<SearchItem 
            filteredProducts={filteredProducts}
            searchTerm={searchTerm}
            setFilteredProducts={setFilteredProducts}
            handleAddToCart={handleAddToCart}
          />}/>

          {categories.map(({ name, banner }) => (
            <Route key={name} path={`/${name}`} element={<Product category={name} banner={banner} handleAddToCart={handleAddToCart} />} />
          ))}
          {categories.map(({ name }) => (
            <Route key={`${name}-detail`} path={`/${name}/:id`} element={<ProductDetail category={name} handleAddToCart={handleAddToCart} />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App