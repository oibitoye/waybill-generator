import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { isAuthenticated } from '../auth';
import WaybillForm from './WaybillForm';
import WaybillHistory from './WaybillHistory';

function Admin() {
  console.log("Admin")
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/waybill-form">Generate Waybill</Link>
          </li>
          <li>
            <Link to="/admin/waybill-history">Waybill History</Link>
          </li>
        </ul>
      </nav>
      {/* <Switch>
        <ProtectedRoute key="Create" path="/admin/waybill-form" component={WaybillForm} isAuthenticated={isAuthenticated()} />
        <ProtectedRoute key="History" path="/admin/waybill-history" component={WaybillHistory} isAuthenticated={isAuthenticated()} />
    </Switch> */}
    </div>
  );
}

export default Admin;
