import ReactDOM  from "react-dom/client";

import Seven from "./Seven";
import CardUI from "./Card";
import CardListUI from "./CardList";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Login from "./Login";
import Onboard from "./Onboard";
import Register from "./Register";
import DataFetching from "./DataFetching";

const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<DataFetching/>
)