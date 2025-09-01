import {store} from "@/redux/stores/store.ts";

export type RootStateType = ReturnType<typeof store.getState>;