import {useSelector} from "react-redux";
import {store} from "../redux/stores/store.ts";

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
