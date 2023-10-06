
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SidebarTitle } from './SidebarTitle';
import { IconLink } from './IconLink';


const SecundarySidebar = () => {
    return (
<aside className="sticky top-0 w-28 flex flex-col gap-4 items-center py-20 h-screen overflow-hidden">
        <SidebarTitle text='Links' />
        <IconLink url='https://www.facebook.com/juan.urrego.50' Icon={FaFacebookF} />
        <IconLink url='https://www.instagram.com/juan.urrego12/' Icon={AiFillInstagram} />
        <IconLink url='https://www.linkedin.com/in/juan-jos%C3%A9-urrego-rios-7b1263210/' Icon={FaLinkedinIn} />
        <IconLink url='https://github.com/juan-urrego' Icon={BsGithub} />
      </aside>
    )
  };
  
  export default SecundarySidebar ;