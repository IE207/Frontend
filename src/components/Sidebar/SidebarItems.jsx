import Create from './Create'
import Home from './Home'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <Create />
      <ProfileLink />
    </>
  )
}

export default SidebarItems