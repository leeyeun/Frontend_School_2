import { useEffect, useState } from "react";
import { authService } from "../fBase";
import MyRouter from "./Router";

function App() {
    // console.log(authService.currentUser);
    const [isLogin, setIsLogin] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
            setInit(true);
        });
    });
    return init ? <MyRouter isLogin={isLogin}></MyRouter> : "로딩중...";
}

export default App;
