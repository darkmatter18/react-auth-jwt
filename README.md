# react-auth-jwt

> Authenticate users in React app with JWT based authentication

![NPM Deploy](https://github.com/darkmatter18/react-auth-jwt/workflows/NPM%20Deploy/badge.svg)
![Test Suites](https://github.com/darkmatter18/react-auth-jwt/workflows/Test%20Suites/badge.svg)
[![NPM](https://img.shields.io/npm/v/react-auth-jwt.svg)](https://www.npmjs.com/package/react-auth-jwt)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/darkmatter18/react-auth-jwt.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/darkmatter18/react-auth-jwt/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/darkmatter18/react-auth-jwt.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/darkmatter18/react-auth-jwt/context:javascript)

React [Context](https://reactjs.org/docs/context.html) and [Hooks](https://reactjs.org/docs/hooks-intro.html)
based `Authentication` Package for [React](https://reactjs.org/) Apps

## Install

```bash
npm install --save react-auth-jwt
```

## Usage

#### 1. AuthProvider

`AuthProvider` relies on the [context feature of React](https://reactjs.org/docs/context.html) to pass the `Auth` down
to the components, so you need to make sure that `AuthProvider` is a parent of the `Routing components`.
You can learn more about this in the API section.

```jsx
import {AuthProvider} from "react-auth-jwt"

...

<AuthProvider authCookieName={"cookie"}
              authTimeCookieName={"timecookie"}
              stateCookieName={"statecookie"}
              cookieDomain={window.location.hostname}
              cookieSecure={window.location.protocol === "https:"}>
    <RouteComponent />
</AuthProvider>
```

#### 2. PrivateRoute
`PrivateRoute` relies on [react-router-dom](https://reacttraining.com/react-router) same as the
[`Route` component of React Router](https://reacttraining.com/react-router/web/api/Route).
It creates a Route to an `Authentication` based component.
If the user is not authenticated, it will redirect to `login` Page.
You can learn more about this in the API section.

```jsx
import {BrowserRouter, Route} from "react-router-dom"
import {PrivateRoute} from "react-auth-jwt"

...

<BrowserRouter>
    <Route component={LoginComponent} path={LOGIN_URL} exact/>
    ...
    <PrivateRoute Component={DashboardComponent} path={DASHBOARD_URL} loginPath={LOGIN_URL} exact/>
</BrowserRouter>
```

#### 3. useSignIn
`useSignIn` is a function api, relies on [React Hooks](https://reactjs.org/docs/hooks-intro.html).
It logs in the user and stores the `JWT token` and `expiresIn` time `in minutes`.
Implement the `useSignIn` function on login pipeline i.e in `login api response`.
You can learn more about this in the API section.

Example with `fetch`:
```jsx
import React from 'react'
import {useSignIn} from "react-auth-jwt"

const AnyComponent = () => {
    const signIn = useSignIn()

    const do_login = async () => {
        const res = await fetch("https://api.abc.xyz/login")
        if (res.status === 200){
            const res_json = res.json()
            const jit_token = res_json.jit
            const expiresIn = res_json.expiresIn
            signIn(jit_token, expiresIn, {})
        }
    }
    return (
        <React.Fragment>
            ...
        </React.Fragment>
    )
}

```

Example with `axios`:
```jsx
import React from 'react'
import axios from 'axios'
import {useSignIn} from "react-auth-jwt"

const AnyComponent = () => {
    const signIn = useSignIn()

    const do_login = async () => {
        const res = await axios.post("https://api.abc.xyz/login");
        if (res.status === 200){
            const res_json = res.data;
            const jit_token = res_json.jit;
            const expiresIn = res_json.expiresIn;
            signIn(jit_token, expiresIn, {});
        }
    }
    return (
        <React.Fragment>
            ...
        </React.Fragment>
    )
}
```

#### 4. useSignOut

`useSignOut` is a function api, relies on [React Hooks](https://reactjs.org/docs/hooks-intro.html).
It logouts the current user and clear all token.
Implement the `useSignOut` function on logout pipeline ex. *on Logout Button Click*.
You can learn more about this in the API section.

```jsx
import React from 'react';
import {useSignOut} from "react-auth-jwt";

const LogoutComponent = () => {
    const signOut = useSignOut()
    const logoutPipeline = () => {
        signOut()
    }

    return (
        <React.Fragment>
            <button onClick={logoutPipeline}>Logout</button>
        </React.Fragment>
    )
}
```
#### 5. authHeader
`logoutAuth` is a function api. It produces the `authentication header` string for logged in user.

It returns `Bearer: xxxxxx` string

Example with `fetch`:
```jsx
import React from "react";
import {useAuthHeader} from "react-auth-jwt";

const AnyComponent = async () => {
    const authHeader = useAuthHeader()
    const myInit = {
        method: 'GET',
        headers: {
            'Authentication': authHeader()
        }
    }
    const res = await fetch("https://api.abc.xyz/something", myInit);

    if (res.status === 200){
        const res_json = res.json()
        ...
    }
    return (
        <React.Fragment>
            ...
        </React.Fragment>
    )
}
```

Example with `axios`:
```jsx
import React from "react";
import axios from "axios";
import {useAuthHeader} from "react-auth-jwt";

const AnyComponent = async () => {
    const authHeader = useAuthHeader()

const do_something = async () => {
        const res = await axios.get("https://api.abc.xyz/something",
            headers: {
                'Authentication': authHeader()
            });
        if (res.status === 200){
            const res_json = res.json()
            ...
        }
    }
    return (
        <React.Fragment>
            ...
        </React.Fragment>
    )
}
```

## License

Apache-2.0 © [darkmatter18](https://github.com/darkmatter18)
