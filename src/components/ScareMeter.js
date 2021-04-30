import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/navbar"
import "./ScareMeter.css"
import "./home/homepage.css"

export const ScareMeter = () => (
    <>
        <Route
            render={() => {
                if (sessionStorage.getItem("app_user_id")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    )
                } else {
                    return <Redirect to="/Login" />;
                }
            }}
        />
    </>
)