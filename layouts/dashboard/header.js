import Navbar from "./navbar";
import Link from "next/link";
const Header = () => {

    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
<div className="d-flex align-items-center justify-content-between">
<Link href="/" className="logo d-flex align-items-center">
        <img src="/img/logo.png" alt="" />
        <span className="d-none d-lg-block">Survey</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>

<Navbar/>
</header>

    )

}
export default Header;