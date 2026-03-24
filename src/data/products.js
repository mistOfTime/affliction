const CDN = 'https://cdn.shopify.com/s/files/1/1268/8989/files'

export const products = [
  // ── T-Shirts ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Deceptive Karma Tee',
    category: 'T-Shirts',
    price: 3525.41,
    image: `${CDN}/A29642_1.jpg?v=1768932840`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Bold graphic tee with signature Affliction skull artwork. Black lava wash with flocking on front and back.'
  },
  {
    id: 2,
    name: 'Hm Slaughter Tee',
    category: 'T-Shirts',
    price: 2917.58,
    image: `${CDN}/Hm_Slaughter_-_Affliction_Clothing-6523169.jpg?v=1762391548`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Affliction x Sematary short sleeve tee. Black reactive with enzyme silicone wash after print.'
  },
  {
    id: 3,
    name: 'Frozen Sacrifice Tee',
    category: 'T-Shirts',
    price: 2917.58,
    image: `${CDN}/A29733_1.jpg?v=1768936620`,
    tags: ['new'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Affliction red reactive tee with chrome foil on front and back.'
  },
  {
    id: 4,
    name: 'Poison Heathen Tee',
    category: 'T-Shirts',
    price: 5346.89,
    image: `${CDN}/A31344_1.jpg?v=1772062750`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium black label tee with multicolor rhinestones over front and back art.'
  },
  {
    id: 5,
    name: 'Environment Tee',
    category: 'T-Shirts',
    price: 2917.58,
    image: `${CDN}/A31341_1.jpg?v=1772061600`,
    tags: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Black brush wash tee with silver metallic ink graphic.'
  },
  {
    id: 6,
    name: 'Endless Faith Shirt',
    category: 'T-Shirts',
    price: 4900.44,
    image: `${CDN}/Endless_Faith_-_Affliction_Clothing-7025331.jpg?v=1762390814`,
    tags: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Mens short sleeve woven in white hydrocore fabric with black detailing.'
  },
  {
    id: 7,
    name: 'Live Fast Tee',
    category: 'T-Shirts',
    price: 2917.58,
    image: `${CDN}/AW29069_1.jpg?v=1762390830`,
    tags: ['sale'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Enzyme silicone wash tee with multicolor stones over front and back art.'
  },

  // ── Hoodies ───────────────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Skeleton Zip-Up Hood',
    category: 'Hoodies',
    price: 10211.52,
    image: `${CDN}/A32390_SKELETON-RL-F1.jpg?v=1773254301`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Limited edition full zip hoodie with all-over skeleton print. Black lava wash.'
  },
  {
    id: 9,
    name: 'Harold Hoodie',
    category: 'Hoodies',
    price: 8745.00,
    image: `${CDN}/Harold_-_Affliction_Clothing-6523146.jpg?v=1762391544`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Affliction x Sematary long sleeve zip-up hood. 100% cotton, black lava wash with enzyme silicone wash after print.'
  },
  {
    id: 10,
    name: 'Catharsis Hood',
    category: 'Hoodies',
    price: 9215.44,
    image: `${CDN}/A29490Catharsis_F1.jpg?v=1770682611`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Red label limited edition hoodie. Heavy cotton, charcoal lava wash, jacquard cross pattern in fabric. Each piece uniquely numbered.'
  },
  {
    id: 11,
    name: 'Wrath Hoodie',
    category: 'Hoodies',
    price: 8500.00,
    image: `${CDN}/A32390_1.jpg?v=1773448547`,
    tags: ['sale'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Pullover hoodie with wrath angel graphic and distressed print.'
  },

  // ── Jackets ───────────────────────────────────────────────────────────────
  {
    id: 12,
    name: 'Fast And Loud Jacket',
    category: 'Jackets',
    price: 34700.55,
    image: `${CDN}/Fast_And_Loud_Jacket_-_Affliction_Clothing-5603801.jpg?v=1762389705`,
    tags: ['new'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: '100% genuine leather jacket. Black with dual zipper on front and embossed art on back.'
  },
  {
    id: 13,
    name: 'Black Denim Jacket',
    category: 'Jackets',
    price: 9034.55,
    image: `${CDN}/Black_Denim_Jacket_-_Affliction_Clothing-361593.jpg?v=1762386333`,
    tags: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: '89% cotton / 10% polyester / 1% spandex. Black with oversized stitching detail.'
  },
  {
    id: 14,
    name: 'Sabrina Jacket',
    category: 'Jackets',
    price: 34700.55,
    image: `${CDN}/Sabrina_Jacket_-_Affliction_Clothing-401908.jpg?v=1762382167`,
    tags: ['new'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: '100% genuine leather jacket with embroidered cross on back.'
  },

  // ── Bottoms ───────────────────────────────────────────────────────────────
  {
    id: 15,
    name: 'Iron Fist Jeans',
    category: 'Bottoms',
    price: 6200.00,
    image: `${CDN}/A29642_4.jpg?v=1768932840`,
    tags: [],
    sizes: ['30', '32', '34', '36'],
    description: 'Slim fit denim with embroidered back pocket and distressed finish.'
  },
  {
    id: 16,
    name: 'Ace Ivan Jeans',
    category: 'Bottoms',
    price: 7873.65,
    image: `${CDN}/Ace_Ivan_-_Affliction_Clothing-1544115.jpg?v=1762389241`,
    tags: ['new'],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Distressed denim with rips, ace wash, and Affliction stitch print on pocket. Inseam 34".'
  },
  {
    id: 17,
    name: 'Cooper Devin Jeans',
    category: 'Bottoms',
    price: 7873.65,
    image: `${CDN}/Cooper_Devin_-_Affliction_Clothing-370554.jpg?v=1762380028`,
    tags: [],
    sizes: ['30', '32', '34', '36', '38'],
    description: '94% cotton / 6% polyester. Devin wash with ripped patches on front and back. Inseam 34".'
  },
  {
    id: 18,
    name: 'Flameful Faith Pants',
    category: 'Bottoms',
    price: 7522.81,
    image: `${CDN}/110XW109_1.jpg?v=1754522809`,
    tags: [],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Extra wide leg pants in black denim. Embroidery on back pocket, yolk, and front pocket. Stone wash.'
  },

  // ── Hats ──────────────────────────────────────────────────────────────────
  {
    id: 19,
    name: 'Seismic Empire Hat',
    category: 'Hats',
    price: 2329.08,
    image: `${CDN}/A29679_1.jpg?v=1762393934`,
    tags: ['new'],
    sizes: ['One Size'],
    description: '5 panel trucker hat. Black twill front panels, black mesh back, potassium spray wash with heavy stitching on front.'
  },
  {
    id: 20,
    name: 'Crows Hat',
    category: 'Hats',
    price: 2332.00,
    image: `${CDN}/Crows_Hat_-_Affliction_Clothing-5117431.jpg?v=1762390362`,
    tags: [],
    sizes: ['One Size'],
    description: 'Black 5 panel trucker hat with dirty red potassium spray, black mesh, and screenprinted underbrim.'
  },
  {
    id: 21,
    name: 'Harold Beanie',
    category: 'Hats',
    price: 1981.80,
    image: `${CDN}/A29837_1A.jpg?v=1762393414`,
    tags: ['new'],
    sizes: ['One Size'],
    description: 'Affliction x Sematary beanie. 100% cotton, black lava wash with woven label and logo print on inside front.'
  },
]

export const categories = ['All', 'T-Shirts', 'Hoodies', 'Jackets', 'Bottoms', 'Hats']
