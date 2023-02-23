import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';

import { PrivateRoute } from '../components/AuthRouts/PrivateRoute';
import { PublicRoute } from '../components/AuthRouts/PublicRoute';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="" element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contact />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
