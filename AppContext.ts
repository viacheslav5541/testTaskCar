import React from "react";
import { Logic } from "./source/logic/logic";
import { Store } from "./source/store/store";

export interface AppContext {
    store: Store

    logic: Logic
}

export const AppContext = React.createContext<AppContext>('Контекст не предоставлен' as never)