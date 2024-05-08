import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "../molecules/ProductCard";
import theme from "../../theme/theme.json";
import Spacer from "../atoms/Spacer";
import ListEmptyComponent from "../atoms/ListEmptyComponent";

const ProductList = (props) => {
    const { items, isLoading, onPressItem, onAddToCart } = props;
    return (<FlatList
        data={items}
        renderItem={({ item }) => <ProductCard
            item={item}
            onPressItem={() => onPressItem(item)}
            onAddToCart={() => onAddToCart(item, item.sizes[0], 1)}
        />}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.sizes.small }}
        ListHeaderComponent={<Spacer size={1} />}
        ListFooterComponent={<Spacer size={3} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<ListEmptyComponent isLoading={isLoading} text={"No Items found"} />}
    />);

}

export default ProductList;