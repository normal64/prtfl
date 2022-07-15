import React from "react";
import {createRoot} from "react-dom/client"
import ReactDOM from "react-dom";
import App from "./App"
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
// import reducers from "./reducers";
import reduxThunk from "redux-thunk";




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    // reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)
document.body.style.backgroundColor="black"
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
)