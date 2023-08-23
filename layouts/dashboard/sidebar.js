import Link from "next/link";

const  Sidebar = ()=>{
    

    return(

        <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                <Link className='nav-link' href="/dashboard">       
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
        </Link >
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link href="/dashboard/question">
              <i className="bi bi-circle"></i><span>Question</span>
            </Link >
          </li>
          
        </ul>
      </li>


</ul>
</aside>

    )
}

export default Sidebar;