import cat1 from '../assets/images/category/cat1.png'
import cat2 from '../assets/images/category/cat2.png'
import cat3 from '../assets/images/category/cat3.png'
import cat4 from '../assets/images/category/cat4.png'
import cat5 from '../assets/images/category/cat5.png'
import cat6 from '../assets/images/category/cat6.png'
import cat7 from '../assets/images/category/cat7.png'
import cat8 from '../assets/images/category/cat8.png'
import cat9 from '../assets/images/category/cat9.png'
import cat10 from '../assets/images/category/cat10.png'
import cat11 from '../assets/images/category/cat11.png'
import slide1 from '../assets/images/SlideCard/slide-1.png'
import slide2 from '../assets/images/SlideCard/slide-2.png'
import slide3 from '../assets/images/SlideCard/slide-3.png'
import slide4 from '../assets/images/SlideCard/slide-4.png'
import flash1 from "../assets/images/flash/flash-1.png"
import flash2 from "../assets/images/flash/flash-2.png"
import flash3 from "../assets/images/flash/flash-3.png"
import flash4 from "../assets/images/flash/flash-4.png"
import cate1 from "../assets/images/top/category-1.png"
import cate2 from "../assets/images/top/category-2.png"
import cate3 from "../assets/images/top/category-3.png"
import arr1 from "../assets/images/arrivals/arrivals1.png"
import arr2 from "../assets/images/arrivals/arrivals2.png"
import arr3 from "../assets/images/arrivals/arrivals3.png"
import arr4 from "../assets/images/arrivals/arrivals4.png"
import arr5 from "../assets/images/arrivals/arrivals5.png"
import arr6 from "../assets/images/arrivals/arrivals6.png"
import dis1 from "../assets/images/discount/discount-1.png"
import dis2 from "../assets/images/discount/discount-2.png"
import dis3 from "../assets/images/discount/discount-3.png"
import dis4 from "../assets/images/discount/discount-4.png"
import dis5 from "../assets/images/discount/discount-5.png"
import dis6 from "../assets/images/discount/discount-6.png"
import dis7 from "../assets/images/discount/discount-7.png"
import dis8 from "../assets/images/discount/discount-8.png"
import dis9 from "../assets/images/discount/discount-9.png"
import Cat1 from "../assets/images/category/cat-1.png"
import Cat2 from "../assets/images/category/cat-2.png"
import shop1 from "../assets/images/shops/shops-1.png"
import shop2 from "../assets/images/shops/shops-2.png"
import shop3 from "../assets/images/shops/shops-3.png"
import shop4 from "../assets/images/shops/shops-4.png"
import shop5 from "../assets/images/shops/shops-5.png"
import shop7 from "../assets/images/shops/shops-7.png"
import shop8 from "../assets/images/shops/shops-8.png"
import shop9 from "../assets/images/shops/shops-9.png"
import shop10 from "../assets/images/shops/shops-10.png"

export const category = [
    {
        cateImg: cat1,
        cateName: 'Fashion'
    },{
        cateImg: cat2,
        cateName: 'Electronic'
    },
    {
        cateImg: cat3,
        cateName: 'Cars'
    },
    {
        cateImg: cat4,
        cateName: 'Home & Garden'
    },
    {
        cateImg: cat5,
        cateName: 'Gifts'
    },
    {
        cateImg: cat6,
        cateName: 'Music'
    },
    {
        cateImg: cat7,
        cateName: 'Heathy & Beauty'
    },
    {
        cateImg: cat8,
        cateName: 'Pets'
    },
    {
        cateImg: cat9,
        cateName: 'Baby Toys'
    },
    {
        cateImg: cat10,
        cateName: 'Groceries'
    },
    {
        cateImg: cat11,
        cateName: 'Books'
    }
]

export const sliderCart = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide1,
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide2,
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide3,
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide4,
  },
]

export const Data = {
  productItems: [
    {
      id: 1,
      discount: 50,
      cover: flash1,
      name: "Shoes",
      price: 100,
      sale: 200,
      like: 0,
      category: "shoes",
      icon: <i class="fa-solid fa-shoe-prints"></i>,
      sold: 78,
      desc: "Step up your style with these comfortable and trendy shoes. Perfect for casual or formal occasions.",
    },
    {
      id: 2,
      discount: 40,
      cover: flash2,
      name: "Watch",
      price: 20,
      sale: 38,
      like: 0,
      category: "watch",
      icon: <i class="fa-brands fa-watchman-monitoring"></i>,
      sold: 182,
      desc: "Stay punctual and stylish with this elegant watch. Durable and suitable for any outfit.",
    },
    {
      id: 3,
      discount: 40,
      cover: flash3,
      name: "Smart Mobile Black",
      price: 200,
      sale: 380,
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 264,
      desc: "A sleek and powerful smartphone designed for seamless performance. Perfect for multitasking and entertainment.",
    },
    {
      id: 4,
      discount: 40,
      cover: flash4,
      name: "Smart Watch Black",
      price: 50,
      sale: 80,
      like: 0,
      category: "watch",
      icon: <i class="fa-brands fa-watchman-monitoring"></i>,
      sold: 254,
      desc: "Keep track of your fitness goals with this smart watch. Stylish design with advanced features.",
    },
    {
      id: 5,
      discount: 50,
      cover: flash1,
      name: "Shoes",
      price: 100,
      sale: 200,
      like: 0,
      category: "shoes",
      icon: <i class="fa-solid fa-shoe-prints"></i>,
      sold: 356,
      desc: "Comfortable and durable shoes for everyday wear. Add a touch of elegance to your steps.",
    },
    {
      id: 6,
      discount: 50,
      cover: flash3,
      name: "Smart Mobile Black",
      price: 100,
      sale: 200,
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 322,
      desc: "Experience smooth functionality with this modern smartphone. Perfect for work and leisure.",
    },
    {
      id: 7,
      discount: 40,
      cover: flash4,
      name: "Smart Watch Black",
      price: 50,
      sale: 86,
      like: 0,
      category: "watch",
      icon: <i class="fa-brands fa-watchman-monitoring"></i>,
      sold: 212,
      desc: "A smart watch designed to complement your lifestyle. Tracks your health and keeps you connected.",
    },
  ]
}

export const TopCates = [
  {
    cover: cate1,
    para: "headphone",
    desc: "3k orders this week",
  },
  {
    cover: cate2,
    para: "watch",
    desc: "4k orders this week",
  },
  {
    cover: cate3,
    para: "sunglass",
    desc: "6k orders this week",
  },
  {
    cover: cate2,
    para: "watch",
    desc: "4k orders this week",
  },
  {
    cover: cate3,
    para: "sunglass",
    desc: "6k orders this week",
  },
]

export const NewArrivals = [
  {
    id: 17,
    discount: 60,
    cover: arr1,
    name: "Sunglass",
    price: 150,
    sale: 340,
    like: 0,
    category: "sunglass",
    icon: <i class="fa-solid fa-binoculars"></i>,
    sold: 73,
    desc: "Stylish and protective, these sunglasses are perfect for sunny days. Durable and lightweight design.",
  },
  {
    id: 18,
    discount: 35,
    cover: arr2,
    name: "Makeup",
    price: 250,
    sale: 468,
    like: 0,
    category: "makeup",
    icon: <i class="fa-solid fa-palette"></i>,
    sold: 182,
    desc: "Enhance your beauty with this premium makeup kit. Perfect for any occasion with long-lasting results.",
  },
  {
    id: 19,
    discount: 24,
    cover: arr3,
    name: "Smart Watch",
    price: 50,
    sale: 126,
    like: 0,
    category: "watch",
    icon: <i class="fa-brands fa-watchman-monitoring"></i>,
    sold: 217,
    desc: "Stay connected and track your health with this smart watch. Sleek and feature-packed for modern life.",
  },
  {
    id: 20,
    discount: 17,
    cover: arr4,
    name: "Lipstick",
    price: 46,
    sale: 75,
    like: 0,
    category: "makeup",
    icon: <i class="fa-solid fa-palette"></i>,
    sold: 89,
    desc: "Add a pop of color with this vibrant lipstick. Smooth application and long-lasting wear for any event.",
  },
  {
    id: 21,
    discount: 43,
    cover: arr5,
    name: "Green Plant",
    price: 26,
    sale: 34,
    like: 0,
    category: "tree",
    icon: <i class="fa-solid fa-tree"></i>,
    sold: 86,
    desc: "Bring nature into your home with this vibrant green plant. Easy to maintain and perfect for decoration.",
  },
  {
    id: 22,
    discount: 30,
    cover: arr6,
    name: "Bonsai Tree",
    price: 400,
    sale: 724,
    like: 0,
    category: "tree",
    icon: <i class="fa-solid fa-tree"></i>,
    sold: 145,
    desc: "A stunning bonsai tree to add elegance to your space. Perfect for indoor decoration and relaxation.",
  },
]

export const DiscountData = [
  {
    id: 23,
    discount: 45,
    cover: dis1,
    name: "BenuX 2022",
    price: 250,
    sale: 500,
    like: 0,
    category: "earphone",
    icon: <i class="fa-solid fa-headphones"></i>,
    sold: 647,
    desc: "Enjoy premium sound quality with BenuX 2022. Built for durability and long-lasting comfort.",
  },
  {
    id: 24,
    discount: 50,
    cover: dis2,
    name: "Sony TV 1080p",
    price: 450,
    sale: 900,
    like: 0,
    category: "watch",
    icon: <i class="fa-brands fa-watchman-monitoring"></i>,
    sold: 274,
    desc: "Experience stunning visuals with Sony TV 1080p. Perfect for movies and gaming enthusiasts.",
  },
  {
    id: 25,
    discount: 67,
    cover: dis3,
    name: "Sony PS4",
    price: 50,
    sale: 78,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 58,
    desc: "Game in style with Sony PS4. Compact and reliable for your entertainment needs.",
  },
  {
    id: 26,
    discount: 36,
    cover: dis4,
    name: "Setgearr 2022",
    price: 100,
    sale: 189,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 428,
    desc: "Setgearr 2022 delivers high-speed connectivity. Perfect for work or play in any environment.",
  },
  {
    id: 27,
    discount: 23,
    cover: dis5,
    name: "Tony BGB",
    price: 58,
    sale: 93,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 250,
    desc: "Tony BGB offers reliable and fast internet. Designed for seamless connectivity at home or office.",
  },
  {
    id: 28,
    discount: 18,
    cover: dis6,
    name: "RG products",
    price: 200,
    sale: 326,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 89,
    desc: "Upgrade to RG Products for top-tier performance. Built for speed and efficiency in all networks.",
  },
  {
    id: 29,
    discount: 32,
    cover: dis7,
    name: "Ranasonic 2022",
    price: 300,
    sale: 456,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 78,
    desc: "Ranasonic 2022 provides exceptional coverage and speed. Designed for reliable internet access.",
  },
  {
    id: 30,
    discount: 25,
    cover: dis8,
    name: "Pune HD",
    price: 30,
    sale: 75,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 56,
    desc: "Pune HD is the ideal choice for affordable and efficient connectivity. Compact and easy to use.",
  },
  {
    id: 31,
    discount: 28,
    cover: dis9,
    name: "Sony CCTV",
    price: 80,
    sale: 189,
    like: 0,
    category: "wifi",
    icon: <i class="fa-solid fa-wifi"></i>,
    sold: 122,
    desc: "Secure your space with Sony CCTV. High-resolution recording for maximum safety and peace of mind.",
  },
]

export const BrandData = [
    {
      cateImg: Cat1,
      cateName: "Apple",
    },
    {
      cateImg: Cat2,
      cateName: "Samasung",
    },
    {
      cateImg: Cat1,
      cateName: "Oppo",
    },
    {
      cateImg: Cat2,
      cateName: "Vivo",
    },
    {
      cateImg: Cat1,
      cateName: "Redimi",
    },
    {
      cateImg: Cat2,
      cateName: "Sony",
    },
  ]

export const ShopData = {
  shopItems: [
    {
      id: 8,
      cover: shop1,
      name: "Mapple Earphones",
      price: 180,
      discount: 25,
      sale: 250,
      like: 0,
      category: "earphone",
      icon: <i class="fa-solid fa-headphones"></i>,
      sold: 783,
      desc: "Experience high-quality sound with Mapple Earphones. Designed for comfort and durability, perfect for music lovers.",
    },
    {
      id: 9,
      cover: shop2,
      name: "Vivo Android One",
      price: 120,
      discount: 10,
      sale: 150,
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 63,
      desc: "Stay connected with Vivo Android One, offering smooth performance and a sleek design for everyday use.",
    },
    {
      id: 10,
      cover: shop3,
      name: "Sony Light",
      price: 20,
      discount: 50,
      sale: 40,
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 432,
      desc: "Sony Light provides excellent portability with its lightweight design. A perfect companion for on-the-go usage.",
    },
    {
      id: 11,
      cover: shop4,
      name: "Iphone",
      price: 999,
      discount: 10,
      sale: "1.299",
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 59,
      desc: "Discover the power of iPhone with its cutting-edge technology. Enjoy a premium experience like never before.",
    },
    {
      id: 12,
      cover: shop5,
      name: "Ceats Wireless Earphone",
      price: 80,
      discount: 20,
      sale: 100,
      like: 0,
      category: "earphone",
      icon: <i class="fa-solid fa-headphones"></i>,
      sold: 384,
      desc: "Ceats Wireless Earphones deliver crystal-clear sound and long-lasting battery life. Perfect for workouts and travel.",
    },
    {
      id: 13,
      cover: shop7,
      name: "Redimi Phone",
      price: 400,
      discount: 20,
      sale: 480,
      like: 0,
      category: "mobile",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
      sold: 653,
      desc: "Redimi Phone combines powerful performance with an elegant design. Ideal for multitasking and entertainment.",
    },
    {
      id: 14,
      cover: shop8,
      name: "Xeats Bluetooth Earphones",
      price: 60,
      discount: 50,
      sale: 180,
      like: 0,
      category: "earphone",
      icon: <i class="fa-solid fa-headphones"></i>,
      sold: 446,
      desc: "Enjoy immersive sound with Xeats Bluetooth Earphones. Wireless convenience and high performance in one package.",
    },
    {
      id: 15,
      cover: shop9,
      name: "Airpod",
      price: 120,
      discount: 10,
      sale: 146,
      like: 0,
      category: "earphone",
      icon: <i class="fa-solid fa-headphones"></i>,
      sold: 127,
      desc: "Apple Airpods provide unmatched sound quality and seamless connectivity. A must-have for Apple enthusiasts.",
    },
    {
      id: 16,
      cover: shop10,
      name: "Silver Cap",
      price: 5,
      discount: 2,
      sale: 16,
      like: 0,
      category: "hat",
      icon: <i class="fa-duotone fa-solid fa-hat-cowboy"></i>,
      sold: 122,
      desc: "Silver Cap offers a stylish addition to your outfit. Lightweight and comfortable for daily wear.",
    },
  ]
}

export const WrapperData = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]