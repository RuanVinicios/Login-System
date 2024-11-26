import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Singin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item/> : <Singin/>;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
            <Routes>
          <div>
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin   
 />} />
          </div>
        </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;