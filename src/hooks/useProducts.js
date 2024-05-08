import { addItemToCache} from '../store/modules/productsSlice';
import { useAppDispatch, useAppSelector } from './useReduxHooks';


/*=================Get item from Cache====================*/
export const useGetProductFromCache = (id) => {
    const cachedItems = useAppSelector(state => state.products.cachedItems)
    
    const product=(cachedItems || []).find(item => item.id === id)
    return product;
}

/*=================Add item to Cache====================*/
export const useAddProductToCache = (onSuccess=()=>{}) => {
    const dispatch = useAppDispatch();
    const showItem = (product) => {
        dispatch(addItemToCache(product));
        onSuccess(product);
    }
    return { showItem };
}

