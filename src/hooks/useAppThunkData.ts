import {useEffect} from 'react';
import type {AsyncThunkAction} from '@reduxjs/toolkit';
import {useAppDispatch} from './useAppDispatch';
import {useAppSelector} from './useAppSelector';
import type {RootStateType} from "../models/RootStateType.ts";

export const useAppThunkData = <T = unknown, Arg = any>(
    thunk: () => AsyncThunkAction<any, Arg, object>,
    selector?: (state: RootStateType) => T
): T | null => {

    const state = useAppSelector((state) => (selector ? selector(state) : null));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(thunk());
    }, [thunk, dispatch]);

    return state;
};
