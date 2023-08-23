const ActiveSection =({activetab})=>{
//console.log(activetab);
    return(
        <>
                      <h5 className="card-title">Question </h5>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activetab=='s1'?'active':''}`}  type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activetab=='s2'?'active':''}`}  type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activetab=='s3'?'active':''}`}  type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
              </ul>
              </>
    )

}

export default ActiveSection;