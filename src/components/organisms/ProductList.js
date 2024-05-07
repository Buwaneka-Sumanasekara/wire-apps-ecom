import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "../molecules/ProductCard";
import theme from "../../theme/theme.json";
import Spacer from "../atoms/Spacer";

const ProductList = (props) => {
    const { items } = props;
    return (<FlatList
        data={items}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.sizes.small }}
        ListHeaderComponent={<Spacer size={1} />}
        ListFooterComponent={<Spacer size={3} />}
    />);

}

export default ProductList;