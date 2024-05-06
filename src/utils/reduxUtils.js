

export const formatItemToCart = (product) => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        productInfo: product,
    }
}