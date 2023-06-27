import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LocationHistory } from './utils/location'
import Login from './components/Login';
import Logout from './components/Logout';
import WaybillForm from './components/WaybillForm';
import WaybillHistory from './components/WaybillHistory';
import Print from './components/PrintOut';
// import ProtectedRoute from './components/ProtectedRoute';
// import { isAuthenticated } from './auth';

const App = () => {
  console.log("App")
  // const history = useHistory();
  return (
    <BrowserRouter>
      <LocationHistory />
      <Switch>
        <Route key="Logout" path="/logout" component={Logout} />
        <Route key="Login" path="/login" component={Login} />
        <Route key="Print" path="/waybill/view/:code" component={Print} />
        <Route key="Create" path="/waybill-form" component={WaybillForm} />
        {/* <Route key="History" path="/waybill-history" component={WaybillHistory} /> */}
        <Route
          key="Home"
          path="/"
          component={WaybillHistory}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
