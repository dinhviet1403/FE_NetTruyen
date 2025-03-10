import "./Footer.css";

function Footers() {
    return (
        <footer class="bg-light py-4 mt-5 border-top">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <strong>Truyện CV</strong> - Đọc truyện online, đọc truyện chữ, truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện đô thị, truyện đồng nhân một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy tính bảng.
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-secondary">Truyện Huyền Huyễn</span>
                <span class="badge bg-secondary">Truyện Võng Du</span>
                <span class="badge bg-secondary">Truyện Khoa Huyễn</span>
                <span class="badge bg-secondary">Truyện Mạt Thế</span>
                <span class="badge bg-secondary">Truyện Trọng Sinh</span>
                <span class="badge bg-secondary">Truyện Xuyên Không</span>
                <span class="badge bg-secondary">Truyện Hệ Thống</span>
                <span class="badge bg-secondary">Truyện Full</span>
                <span class="badge bg-secondary">truyentranh</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-4">
            <div class="mr-3">
              <strong><a href="a" class="text-decoration-none text-black"> Contact </a></strong> 
              - 
              <strong><a href="a" class="text-decoration-none text-black"> Privacy Policy </a></strong> 
            </div>
            <button class="btn btn-light rounded-circle pt-1 pb-1 border border-dark">
                <a href="#header" class="text-decoration-none text-dark">
                    &#x2191;
                </a>
            </button>
          </div>
        </div>
      </footer>      
    );
  }
  
  export default Footers;