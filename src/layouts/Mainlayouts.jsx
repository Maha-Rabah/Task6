import React from 'react'
import GlobalNavbar from '@/components/Navs/GlobalNavbar'
import HomeNavbar from '@/components/Navs/HomeNavbar'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
import {AiFillLock} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import Footer from '@/components/Footer/Footer'
import { Provider } from 'react-redux'
import store from '@/store'

export default function MainLayouts({ children }) {
  return (
    <Provider store={store}>
    <GlobalNavbar list={[{icons:<AiOutlineQuestionCircle/>,name:"Have a question?",},
        {icons:<BiPhone/>,name:"10 20 123 456",},
        {icons:<BiLogoGmail/>,name:"info@gmail.com"},
        {icons:<AiFillLock/>,name:"Log Out"},
        {icons:<BsFillPersonFill/>,name:""}]}/>
    <HomeNavbar logo="Learner" button="Enroll Now" /> 
    <div>
        {children}
    </div>
    <Footer/>
    </Provider>
  );
}
