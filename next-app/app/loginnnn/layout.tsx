
import {ReactNode} from 'react'
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer'


interface Parent{
  children : ReactNode;
}

const Layout: React.FC<Parent>= ({children}) => {
  
  return (
  <div>
    <Navbar />
  {children}
  <Footer />
 </div>
  )
}

export default Layout
