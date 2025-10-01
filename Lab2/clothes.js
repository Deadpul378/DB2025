db.products.insertOne({
  name: "Футболка Oversize",
  price: 799,
  sizes: ["S", "M", "L", "XL"],
  category: "Футболки",
  inStock: true,
  details: {
    material: "100% cotton",
    color: "чорний",
    country: "Туреччина"
  },
  tags: ["унісекс", "літо"]
})

db.products.insertMany([
  {
    name: "Джинси Slim Fit",
    price: 1499,
    sizes: ["28", "30", "32", "34"],
    category: "Джинси",
    inStock: true,
    details: {
      material: "денім",
      color: "синій",
      stretch: true
    },
    discount: 10
  },
  {
    name: "Худі Classic",
    price: 1199,
    sizes: ["M", "L", "XL"],
    category: "Худі",
    inStock: false,
    details: {
      material: "бавовна 80%, поліестер 20%",
      color: "сірий",
      hood: true
    },
    tags: ["зима", "унісекс"]
  },
  {
    name: "Куртка Bomber",
    price: 2499,
    sizes: ["M", "L"],
    category: "Куртки",
    inStock: true,
    details: {
      material: "нейлон",
      color: "оливковий",
      pockets: 2
    },
    reviews: [
      { user: "Іван", rating: 5, comment: "Дуже стильна!" },
      { user: "Андрій", rating: 4, comment: "Тепла, але трохи важка." }
    ]
  },
  {
    name: "Сорочка Casual",
    price: 999,
    sizes: ["S", "M", "L"],
    category: "Сорочки",
    inStock: true,
    details: {
      material: "бавовна",
      color: "біла",
      slimFit: true
    },
    tags: ["офіс", "літо"]
  },
  {
    name: "Кросівки Sporty",
    price: 2199,
    sizes: [40, 41, 42, 43, 44],
    category: "Взуття",
    inStock: true,
    details: {
      material: "шкіра + сітка",
      color: "білий",
      sole: "гумова"
    },
    tags: ["спорт", "унісекс"]
  },
  {
    name: "Шорти Denim",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    category: "Шорти",
    inStock: true,
    details: {
      material: "денім",
      color: "блакитний"
    }
  },
  {
    name: "Пальто Classic",
    price: 3299,
    sizes: ["M", "L", "XL"],
    category: "Пальто",
    inStock: false,
    details: {
      material: "шерсть",
      color: "чорний",
      lining: "поліестер"
    },
    reviews: [
      { user: "Марія", rating: 5, comment: "Виглядає дорого!" }
    ]
  },
  {
    name: "Шапка Beanie",
    price: 399,
    sizes: ["one size"],
    category: "Аксесуари",
    inStock: true,
    details: {
      material: "акрил",
      color: "темно-сірий"
    },
    tags: ["зима", "унісекс"]
  },
  {
    name: "Рюкзак Urban",
    price: 1599,
    category: "Аксесуари",
    inStock: true,
    details: {
      material: "поліестер",
      capacity: "20L",
      color: "чорний"
    },
    features: ["водовідштовхувальний", "USB-порт"]
  },
  {
    name: "Поясна сумка",
    price: 799,
    category: "Аксесуари",
    inStock: true,
    details: {
      material: "екошкіра",
      color: "коричневий"
    }
  },
  {
    name: "Шкарпетки Basic 5 пар",
    price: 299,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: "Шкарпетки",
    inStock: true,
    details: {
      material: "бавовна",
      color: "білий"
    }
  },
  {
    name: "Жилет утеплений",
    price: 1799,
    sizes: ["M", "L", "XL"],
    category: "Жилети",
    inStock: true,
    details: {
      material: "поліестер",
      color: "синій"
    }
  },
  {
    name: "Сандалі Casual",
    price: 999,
    sizes: [40, 41, 42, 43],
    category: "Взуття",
    inStock: true,
    details: {
      material: "екошкіра",
      color: "коричневий"
    }
  },
  {
    name: "Кепка Trucker",
    price: 499,
    sizes: ["one size"],
    category: "Аксесуари",
    inStock: true,
    details: {
      material: "бавовна",
      color: "червоний"
    }
  },
  {
    name: "Піжама Set",
    price: 1199,
    sizes: ["S", "M", "L"],
    category: "Домашній одяг",
    inStock: true,
    details: {
      material: "бавовна",
      color: "світло-синій"
    }
  },
  {
    name: "Светр в’язаний",
    price: 1399,
    sizes: ["M", "L"],
    category: "Светри",
    inStock: false,
    details: {
      material: "шерсть",
      color: "бежевий"
    }
  },
  {
    name: "Плащ дощовик",
    price: 899,
    sizes: ["M", "L", "XL"],
    category: "Куртки",
    inStock: true,
    details: {
      material: "поліестер",
      color: "прозорий"
    }
  },
  {
    name: "Блуза жіноча",
    price: 1099,
    sizes: ["S", "M", "L"],
    category: "Блузи",
    inStock: true,
    details: {
      material: "віскоза",
      color: "білий"
    }
  },
  {
    name: "Піджак чоловічий",
    price: 2299,
    sizes: ["M", "L", "XL"],
    category: "Піджаки",
    inStock: true,
    details: {
      material: "бавовна",
      color: "синій"
    }
  }
])
