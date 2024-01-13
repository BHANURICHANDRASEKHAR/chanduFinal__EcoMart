import { FaShopify } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import {FcDeleteDatabase} from'react-icons/fc'
import { IoWallet } from "react-icons/io5";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import mc from './assets/imgs/mastercard.png'
import sc from './assets/imgs/skrill.png'
import pp from './assets/imgs/phonepe.png'
import payp from './assets/imgs/paypal.png'
import logo  from './assets/imgs/logo1.png'
const reacticons={
    shop:FaShopify,
    login:RiLoginCircleFill,
    home:FaHome,
    account:RiAccountCircleFill,
    logout:RiLogoutCircleFill,
    shopingcart:FaShoppingCart,
    delete:FcDeleteDatabase,
    wallet:IoWallet,
    contact:MdContactMail,
    coupons:IoTicketSharp,
    usersetting:FaUserAlt,
    facebook:BsFacebook,
    github:FaGithub,
    linkedin:BiLogoLinkedin,
}
export const images={
  mc:mc,
  pp:pp,
  sc:sc,
  payp:payp,
  logo:logo
}
export default  reacticons;