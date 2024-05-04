import Create from './Create'
import Home from './Home'
import Messages from './Messages'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <Messages />
      <Create />
      <ProfileLink />
    </>
  )
}

export default SidebarItems