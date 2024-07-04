import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom';

export default function AlreadySigninRoute({children}) {

    const {token} = useAuth();

  return <>
  {!token ? children  : <Navigate to='/'> </Navigate>}
  </>
}
