import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const Activities = React.lazy(() => import("./views/Activities"))
const Alerts = React.lazy(() => import("./views/Alerts"))
const Home = React.lazy(() => import("./views/Home"))
const Items = React.lazy(() => import("./views/Items"))
const Users = React.lazy(() => import("./views/Users"))

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Suspense>
  )
}

export default Routes
