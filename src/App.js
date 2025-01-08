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
import SearchItem from './components/searchItem/SearchItem'

function App() {
  const { productItems } = Data
  const { shopItems } = ShopData

  const [cartItem, setCartItem] = useState([])
  const [itemPay, setItemPay] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFrom, setSelectedFrom] = useState([])
  const [modalSearch, setModalSearch] = useState(false)
  const [activeMenu, setActiveMenu] = useState("home")
  const [searchTerm, setSearchTerm] = useState("")
  const [modalRemove, setModalRemove] = useState(false)
  const [productToRemove, setProductToRemove] = useState(null)

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
      setModalRemove(!modalRemove)
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
          <Route path="/" element={<Pages productItems={productItems} shopItems={shopItems} setSearchTerm={setSearchTerm}
                handleAddToCart={handleAddToCart} />} 
          />
          <Route path="/cart" element={<Cart cartItem={cartItem} modalRemove={modalRemove} productToRemove={productToRemove}
                setProductToRemove={setProductToRemove} setModalRemove={setModalRemove}
                handleAddToCart={handleAddToCart} handleDeleteCart={handleDeleteCart} handleDeleteQty={handleDeleteQty} />} 
          />
          <Route path="/track-order" element={<TableItemPay itemPay={itemPay} />} />
          <Route 
            path="/order" 
            element={<PayOrder cartItem={cartItem} itemPay={itemPay} productToRemove={productToRemove} 
                        modalRemove={modalRemove}
                        setProductToRemove={setProductToRemove} setItemPay={setItemPay} 
                        setCartItem={setCartItem} handleDeleteCart={handleDeleteCart}
                        setActiveMenu={setActiveMenu} setModalRemove={setModalRemove}
                    />}
          />
          <Route path="/item-search" element={<SearchItem 
            filteredProducts={filteredProducts}
            searchTerm={searchTerm}
            selectedPrices={selectedPrices}
            selectedBrands={selectedBrands}
            selectedFrom={selectedFrom}
            setSelectedFrom={setSelectedFrom}
            setSelectedBrands={setSelectedBrands}
            setSelectedPrices={setSelectedPrices}
            setFilteredProducts={setFilteredProducts}
            handleAddToCart={handleAddToCart}
          />}/>

          {categories.map(({ name, banner }) => (
            <Route key={name} path={`/${name}`} element={<Product category={name} banner={banner} 
                handleAddToCart={handleAddToCart} 
                selectedPrices={selectedPrices} selectedBrands={selectedBrands} selectedFrom={selectedFrom}
                setSelectedFrom={setSelectedFrom} setSelectedBrands={setSelectedBrands} setSelectedPrices={setSelectedPrices}
              />} />
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