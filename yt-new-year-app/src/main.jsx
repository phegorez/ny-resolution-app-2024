import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./GlobalStyles.js";
import { Provider } from "react-redux";
import store from "./configureStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>
);
