import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./component/Counter";

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default App;
