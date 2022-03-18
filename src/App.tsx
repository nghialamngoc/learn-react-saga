import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import Admin from 'components/Layout/Admin';
import { logout } from 'features/auth/authSilce';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
