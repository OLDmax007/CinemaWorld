import {useDispatch} from "react-redux";
import {store} from "../redux/stores/store.ts";


export const useAppDispatch = () => useDispatch<typeof store.dispatch>();