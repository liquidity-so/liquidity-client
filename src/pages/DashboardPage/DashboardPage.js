
import React from 'react'
import { Route } from 'react-router-dom'
import AccountSettings from '../../components/AccountSettings/AccountSettings'
import AppNavBar from '../../components/AppNavBar/AppNavBar'
import Dashboard from '../../components/Dashboard/Dashboard'


export default function DashboardPage(props) {
    return (
        <>
            <AppNavBar/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/dashboard/account" component={AccountSettings}/>
        </>
    )
}