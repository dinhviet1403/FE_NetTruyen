import { useState, useRef } from "react";
import "./Header.css";
import imgLogo from "./favicon.ico";
import { Link, useNavigate } from "react-router-dom";

function Headers() {

   const [value, setValue] = useState("");
   const inputRef = useRef(null);

   const data = [
      { link: "/sreachs/1", text: "Cạnh Kỹ" },
      { link: "/sreachs/2", text: "Dã Sử" },
      { link: "/sreachs/3", text: "Đô Thị" },
      { link: "/sreachs/4", text: "Đồng Nhân" },
      { link: "/sreachs/5", text: "Huyền Huyễn" },
      { link: "/sreachs/6", text: "Huyền Nghi" },
      { link: "/sreachs/", text: "Khoa Huyễn" },
      { link: "/sreachs/8", text: "Kiếm Hiệp" },
      { link: "/sreachs/9", text: "Kỳ Ảo" },
      { link: "/sreachs/10", text: "Light Novel" },
      { link: "/sreachs/11", text: "Tiên Hiệp" },
      { link: "/sreachs/12", text: "Võng Du" },
   ];

   const DropdownMenu = (data) => {
      return (
         <ul className="dropdown-menu">
            {data.map((item, index) => (
               <li key={index}>
                  <Link to={item.link} className="dropdown-item">{item.text}</Link>
               </li>
            ))}
         </ul>
      );
   };

   const Navigate = useNavigate();

    return (
        <header className="bg-header p-2" id="header">
        <div className="container">
           <div className="row">
              <nav className="col-lg-6 navbar navbar-expand-lg navbar-dark">
                 <div className="container-fluid">
                    <a className="navbar-brand" href="/FE_NetTruyen">
                       <img src={imgLogo} alt="NetTruyen" width="30" height="30" className="d-inline-block align-text-top" />
                       NetTruyen</a>
                    <button className="navbar-toggler tg-bd-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                          <li className="nav-item">
                             <Link className="nav-link active" aria-current="page" to="/new">Mới nhất</Link>
                          </li>
                          
                          <li className="nav-item dropdown">
                             <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                 &#9776; Thể Loại
                             </a>
                             {DropdownMenu(data)}
                         </li>

                         <li className="nav-item">
                             <a className="nav-link active" href="https://nettruyenx.com/">Truyện Tranh</a>
                          </li>                    
                       </ul>
                    </div>
                 </div>
              </nav>
              <div className="col-lg-3 ms-auto">
                 <div className="input-group m-2">
                     <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} className="form-control custom-input" placeholder="Tìm kiếm..." />
                     <button 
                        className="btn bg-white" 
                        type="button" 
                        onClick={
                           () => (
                              value ? Navigate(`/sreach/name=${value}`) : inputRef.current.focus()
                           )
                        }
                     >🔍</button>
                 </div>
              </div>
           </div>
        </div>
     </header>
    );
  }
  
  export default Headers;