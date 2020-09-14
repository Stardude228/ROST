import React, { Suspense } from 'react'
import Layout from '../layout/Layout';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {

    //? Auth
    const Login = React.lazy(() => import('../pages/Auth/Login'));
    const Register = React.lazy(() => import('../pages/Auth/Register'));
    const Logout = React.lazy(() => import('../pages/Auth/Logout'));

    //? Pages
    const Home = React.lazy(() => import('../pages/Home'));
    const Products = React.lazy(() => import('../pages/Products'));

    //? Products
    const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
    const Ordering = React.lazy(() => import('../pages/Ordering'));
    const Iphone = React.lazy(() => import('../pages/Smartphones/Iphone'));
    const Samsung = React.lazy(() => import('../pages/Smartphones/Samsung'));
    const Xiaomi = React.lazy(() => import('../pages/Smartphones/Xiaomi'));
    const Soon = React.lazy(() => import('../pages/Smartphones/Soon'));
    
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="m-auto">Loading...</div>}>
                <Switch>

                    <Route exact path = "/auth/login">
                        <Login/>
                    </Route>

                    <Route exact path = "/auth/register">
                        <Register/>
                    </Route>

                    <Route exact path='/'>
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>

                    <Route exact path='/products'>
                        <Layout>
                            <Products />
                        </Layout>
                    </Route>

                    <Route exact path="/products/:id">
                        <Layout>
                            <ProductDetail />
                        </Layout>
                    </Route>

                    <Route exact path="/iphone">
                        <Layout>
                            <Iphone />
                        </Layout>
                    </Route>

                    <Route exact path="/samsung">
                        <Layout>
                            <Samsung />
                        </Layout>
                    </Route>

                    <Route exact path="/xiaomi">
                        <Layout>
                            <Xiaomi />
                        </Layout>
                    </Route>

                    <Route exact path="/soon">
                        <Layout>
                            <Soon />
                        </Layout>
                    </Route>

                    <Route exact path="/ordering">
                        <Layout>
                            <Ordering />
                        </Layout>
                    </Route>

                    <Route exact path="/auth/login">
                        <Layout>
                            <Login />
                        </Layout>
                    </Route>
                    <Route exact path="/auth/register">
                        <Layout>
                            <Register />
                        </Layout>
                    </Route>
                    <Route exact path="/auth/logout">
                        <Layout>
                            <Logout />
                        </Layout>
                    </Route>

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;