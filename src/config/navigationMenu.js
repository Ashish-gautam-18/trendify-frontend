// Static metadata configuration for the main navigation bar links and menus
export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: '/images/banner/navigationw.webp', 
          imageAlt: 'Trendyfy premier streetwear collection display for women.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: '/images/banner/navigation.webp', 
          imageAlt: 'Trendyfy basic multi-color custom premium apparel bundle.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: "top", href: `{women/clothing/tops}` },
            { name: 'Dresses', id: "women_dress", href: '#' },
            { name: 'Women Jeans', id: 'women_jeans' },
            { name: 'Lengha Choli', id: 'lengha_choli' },
            { name: 'Sweaters', id: 'sweater' },
            { name: 'T-Shirts', id: 't-shirt' },
            { name: 'Jackets', id: 'jacket' },
            { name: 'Gouns', id: 'gouns' },
            { name: 'Sarees', id: 'saree' },
            { name: 'Kurtas', id: 'kurtas' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch' },
            { name: 'Wallets', id: 'wallet' },
            { name: 'Bags', id: 'bag' },
            { name: 'Sunglasses', id: 'sunglasse' },
            { name: 'Hats', id: 'hat' },
            { name: 'Belts', id: 'belt' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: '/images/banner/navigation2.jpg',
          imageAlt: 'Trendyfy catalog lifestyle sports models photography.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: '/images/banner/navigation3.webp', 
          imageAlt: 'Trendyfy luxury designer custom apparel layout view.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta' },
            { name: 'Shirt', id: 'shirt' },
            { name: 'Men Jeans', id: 'men_jeans' },
            { name: 'Sweaters', id: '#' },
            { name: 'T-Shirts', id: 't-shirt' },
            { name: 'Jackets', id: '#' },
            { name: 'Activewear', id: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#' },
            { name: 'Wallets', id: '#' },
            { name: 'Bags', id: '#' },
            { name: 'Sunglasses', id: '#' },
            { name: 'Hats', id: '#' },
            { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/' },
    { name: 'Stores', id: '/' },
  ],
};
