import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

//import layouts
import {
  ExternalLayouts,
  DashboardLayout,
  StudentLayout,
} from './components/templates'

//import constants
import { ErrPage, Loading, RequireAuth } from './constants'

//import external pages
import Home from './pages/home'
import About from './pages/about'
import Parents from './pages/parents'
import SignIn from './pages/signIn'
import SignUp from './pages/signup'
import Faq from './pages/Faq/Faq'
import User from './pages/user/User'

//import dashboard pages
import Dashboard from './pages/parent/dashboard'
import Results from './pages/parent/results'
import Subjects from './pages/parent/subjects'
import Events from './pages/parent/events'
import NewEvents from './pages/parent/events/NewEvents'
import PastEvents from './pages/parent/events/PastEvents'
import AllEvents from './pages/parent/events/AllEvents'
import Notifications from './pages/parent/Notifications'
import Chats from './pages/parent/chats'

import StudentDashboard from './pages/student/dashboard'
import Library from './pages/student/library'
import LibrarySlugs from './pages/student/library/LibrarySlugs'
import Portal from './pages/student/portal'
import PotalResult from './pages/student/portal/PotalResult'
import PortalMaterials from './pages/student/portal/PortalMaterials'
import Activities from './pages/student/activities'
import StudentCalendar from './pages/student/calendar'

import Settings from './pages/settings'
import Details from './pages/settings/Details'
import ChangePasswords from './pages/settings/ChangePasswords'
import ChangeEmail from './pages/settings/ChangeEmail'
import NotificationsSettingsx from './pages/settings/NotificationsSettingsx'

function App() {
  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Toaster />
      <Routes>
        <Route path='/' element={<ExternalLayouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='parents' element={<Parents />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='faq' element={<Faq />} />
          <Route path='user' element={<User />} />
          <Route exact path='*' element={<ErrPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* student dashboard */}
          <Route path='student/:id' element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path='library' element={<Library />} />
            <Route path='library/:slugs' element={<LibrarySlugs />} />
            <Route path='portal' element={<Portal />} />
            <Route path='portal/results' element={<PotalResult />} />
            <Route path='calendar' element={<StudentCalendar />} />
            <Route path='portal/materials' element={<PortalMaterials />} />
            <Route path='activities' element={<Activities />} />
            <Route path='account/settings' element={<Settings />}>
              <Route index element={<Details />} />
              <Route path='emails' element={<ChangeEmail />} />
              <Route path='passwords' element={<ChangePasswords />} />
              <Route
                path='notifications'
                element={<NotificationsSettingsx />}
              />
            </Route>
            <Route exact path='*' element={<ErrPage />} />
          </Route>

          {/* Parent dashboard */}
          <Route path='guardian/:id' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='results' element={<Results />} />
            <Route path='subjects' element={<Subjects />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='chats' element={<Chats />} />
            <Route path='events' element={<Events />}>
              <Route exact index element={<NewEvents />} />
              <Route exact path='past-events' element={<PastEvents />} />
              <Route exact path='all' element={<AllEvents />} />
            </Route>
            <Route path='account/settings' element={<Settings />}>
              <Route index element={<Details />} />
              <Route path='emails' element={<ChangeEmail />} />
              <Route path='passwords' element={<ChangePasswords />} />
              <Route
                path='notifications'
                element={<NotificationsSettingsx />}
              />
            </Route>
            <Route exact path='*' element={<ErrPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
