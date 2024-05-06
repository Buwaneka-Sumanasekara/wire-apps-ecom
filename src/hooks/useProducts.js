import { getAxiosInstance } from "../utils/ApiUtils";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCache} from '../store/modules/productsSlice';



/*=================Get item from Cache====================*/
export const useGetProductFromCache = (id) => {
    const cachedItems = useSelector(state => state.products.cachedItems)
    
    const product=(cachedItems || []).some(item => item.id === id)
    return product;
}

/*=================Add item to Cache====================*/
export const useAddProductToCache = (onSuccess=()=>{}) => {
    const dispatch = useDispatch();
    const addItem = (product) => {
        dispatch(addItemToCache(product));
        onSuccess();
    }
    return { addItem };
}

