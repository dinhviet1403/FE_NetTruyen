import "./Header.css";
import imgLogo from "./favicon.ico";

function Headers() {
    return (
        <header class="bg-header p-2" id="header">
        <div class="container">
           <div class="row">
              <nav class="col-md-6 navbar navbar-expand-md navbar-dark">
                 <div class="container-fluid">
                    <a class="navbar-brand" href="/FE_NetTruyen">
                       <img src={imgLogo} alt="NetTruyen" width="30" height="30" class="d-inline-block align-text-top" />
                       NetTruyen</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                       <ul class="navbar-nav">
                          <li class="nav-item">
                             <a class="nav-link active" aria-current="page" href="https://example.com">Mới nhất</a>
                          </li>
                          
                          <li class="nav-item dropdown">
                             <a class="nav-link dropdown-toggle active" href="https://example.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                 &#9776; Thể Loại
                             </a>
                             <ul class="dropdown-menu">
                                 <li><a class="dropdown-item" href="https://example.com">Cạnh Kỹ</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Dã Sử</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Đô Thị</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Đồng Nhân</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Huyền Huyễn</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Huyền Nghi</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Khoa Huyễn</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Kiếm Hiệp</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Kỳ Ảo</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Light Novel</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Tiên Hiệp</a></li>
                                 <li><a class="dropdown-item" href="https://example.com">Võng Du</a></li>
                             </ul>
                         </li>                    
                       </ul>
                    </div>
                 </div>
              </nav>
              <div class="col-md-3 ms-auto">
                 <div class="input-group m-2">
                    <input type="text" class="form-control" placeholder="Tìm kiếm..." />
                    <button class="btn bg-white" type="button">🔍</button>
                 </div>
              </div>
           </div>
        </div>
     </header>
    );
  }
  
  export default Headers;