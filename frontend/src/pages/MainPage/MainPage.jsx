import { BASE_URL } from "../../constants/api";
import classes from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div className={classes.body}>
            <div className={classes.body__eblan}>
                <button onClick={() => {
                    fetch(`${BASE_URL}/getServers`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("token")}`,
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => console.log(res));
                }}>asdfasdfasf</button>
            </div>
        </div>
    );
};

export default MainPage;
