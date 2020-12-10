// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/stores/new" page={NewStorePage} name="newStore" />
      <Route path="/stores/{id:Int}/edit" page={EditStorePage} name="editStore" />
      <Route path="/stores/{id:Int}" page={StorePage} name="store" />
      <Route path="/stores" page={StoresPage} name="stores" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/alerts" page={AlertsPage} name="alerts" />
      <Route path="/activities" page={ActivitiesPage} name="activities" />
      <Route path="/items" page={ItemsPage} name="items" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
