import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/stores/store.ts";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export default App
