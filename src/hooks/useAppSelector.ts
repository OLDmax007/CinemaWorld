import {useSelector} from "react-redux";
import type {RootStateType} from "@models/RootStateType.ts";

export const useAppSelector = useSelector.withTypes<RootStateType>();
