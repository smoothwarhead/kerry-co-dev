import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BusinessDataProvider from "./context/BusinessDataContext";
import ViewProvider from "./context/ViewContext";
import { NavProvider } from "./context/NavContext";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavProvider>
			<ViewProvider>
				<BusinessDataProvider>
					<App />
				</BusinessDataProvider>
			</ViewProvider>
		</NavProvider>
	</React.StrictMode>
);
