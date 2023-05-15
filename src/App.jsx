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
import { ErrPage, Loading } from './constants'

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
        <Route element={<ExternalLayouts />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/parents' element={<Parents />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/user' element={<User />} />
          <Route exact path='*' element={<ErrPage />} />
        </Route>

        {/* student dashboard */}
        <Route element={<StudentLayout />}>
          <Route path='/student/dashboard' element={<StudentDashboard />} />
          <Route path='/student/library' element={<Library />} />
          <Route path='/student/library/:slugs' element={<LibrarySlugs />} />
          <Route path='/student/portal' element={<Portal />} />
          <Route path='/student/portal/results' element={<PotalResult />} />
          <Route path='/student/calendar' element={<StudentCalendar />} />
          <Route
            path='/student/portal/materials'
            element={<PortalMaterials />}
          />
          <Route path='/student/activities' element={<Activities />} />
          <Route path='/account/settings' element={<Settings />}>
            <Route index element={<Details />} />
            <Route path='emails' element={<ChangeEmail />} />
            <Route path='passwords' element={<ChangePasswords />} />
            <Route path='notifications' element={<NotificationsSettingsx />} />
          </Route>
          <Route exact path='*' element={<ErrPage />} />
        </Route>

        {/* Parent dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path='/username/dashboard' element={<Dashboard />} />
          <Route path='/username/results' element={<Results />} />
          <Route path='/username/subjects' element={<Subjects />} />
          <Route path='/username/notifications' element={<Notifications />} />
          <Route path='/username/chats' element={<Chats />} />
          <Route path='/username/events' element={<Events />}>
            <Route exact index element={<NewEvents />} />
            <Route exact path='past-events' element={<PastEvents />} />
            <Route exact path='all' element={<AllEvents />} />
          </Route>
          <Route path='/account/settings' element={<Settings />}>
            <Route index element={<Details />} />
            <Route path='emails' element={<ChangeEmail />} />
            <Route path='passwords' element={<ChangePasswords />} />
            <Route path='notifications' element={<NotificationsSettingsx />} />
          </Route>
          <Route exact path='*' element={<ErrPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
