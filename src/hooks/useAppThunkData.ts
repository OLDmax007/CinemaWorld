import {useEffect} from 'react';
import type {AsyncThunkAction} from '@reduxjs/toolkit';
import {useAppDispatch} from './useAppDispatch';
import {useAppSelector} from './useAppSelector';
import type {RootStateType} from "../models/RootStateType.ts";

export const useAppThunkData = <T = unknown, Arg = void>(
    thunk: () => AsyncThunkAction<any, Arg, object>,
    selector: (state: RootStateType) => T
): T => {
    const state = useAppSelector(selector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(thunk());
    }, [thunk, dispatch]);

    return state;
};
