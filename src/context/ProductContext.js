import React, { useContext, useState } from "react";

const ProductContext = React.createContext({
    selectedSize: null,
    onChangeSize: () => {}
});


const ProductContextProvider = ({children}) => {

    const [selectedSize, setSelectedSize] = useState(null);

    const onChangeSize = (size) => {
        setSelectedSize(size);
    }

    return (
        <ProductContext.Provider value={{selectedSize,onChangeSize}}>
            {children}
        </ProductContext.Provider>
    )
}

const useChangeProductSize = () => {
    const context=useContext(ProductContext);

    return {
        onChangeSize:(size) => context.onChangeSize(size),
        selectedSize:context.selectedSize
    }
}

const useGetSelectedProductSize = () => {
    const context=useContext(ProductContext);

    return context?.selectedSize;

}

export {ProductContextProvider,useChangeProductSize,ProductContext,useGetSelectedProductSize}