/* Al proceso de convertir un array en objeto para mapear,
se llama normalization.
No se normalizo el array de los items porque estos no seran mapeados */

const DATA = {
    hats: {
        id: 1,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        linkUrl: 'shop/hats'
    },
    sneakers: {
        id: 2,
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        linkUrl: 'shop/sneakers'
    },
    jackets: {
        id: 3,
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        linkUrl: 'shop/jackets'
    },
    womens: {
        id: 4,
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        linkUrl: 'shop/womens',
        size: 'large'
    },
    mens: {
        id: 5,
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl: 'shop/mens',
        size: 'large'
    }
}
  
export default DATA;