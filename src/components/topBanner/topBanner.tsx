import logo from "./logo_white.png"
import "./topBanner.css"
import { Timer } from "../time/time";
const TopBanner = () => {
    return (
        <>
            <div className="top-banner">
                <div className="banner-img"><img src={logo} alt="" /></div>
                <h1>Carers</h1>
                <h2>Here you'll be able to scheadule your carers visit</h2>
                <Timer />
            </div>
        </>
    );
};
export default TopBanner;