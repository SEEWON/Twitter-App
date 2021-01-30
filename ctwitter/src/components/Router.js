import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";


const AppRouter = () => {
	
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	return(
		<Router>
			<Switch>
				{isLoggedIn ? (
				<>
					<Route exact path ="/">
						<Home />
					</Route>
				</>
				) : (
					<Route exact path ="/">
						<Auth /> 
					</Route>
				)}
			</Switch>
		</Router>
	);
};

export default AppRouter;