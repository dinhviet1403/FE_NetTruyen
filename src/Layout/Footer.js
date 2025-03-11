import "./Footer.css";
import BadgeItems from "./../Items/BadgeItems";

function Footers() {

  const data = [
    {link: "/", text: "Truyện Tiên Hiệp"},
    {link: "/", text: "Truyện Huyền Huyễn"},
    {link: "/", text: "Truyện Võng Du"},
    {link: "/", text: "Truyện Khoa Huyễn"},
    {link: "/", text: "Truyện Mạt Thế"},
    {link: "/", text: "Truyện Trọng Sinh"},
    {link: "/", text: "Truyện Xuyên Không"},
    {link: "/", text: "Truyện Hệ Thống"},
    {link: "/", text: "Truyện Full"},
    {link: "/", text: "truyentranh"},
  ];

  const scrollToHeader = () => {
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <strong>Truyện CV</strong> - Đọc truyện online, đọc truyện chữ, truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện đô thị, truyện đồng nhân một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy tính bảng.
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <div className="d-flex flex-wrap gap-2">
              {data.map((item, index) => (
                <BadgeItems key={index} link={item.link} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="mr-3">
            <strong><a href="/" className="text-decoration-none text-black"> Contact </a></strong> 
            - 
            <strong><a href="/" className="text-decoration-none text-black"> Privacy Policy </a></strong> 
          </div>
          <button className="btn btn-light rounded-circle pt-1 pb-1 border border-dark" onClick={scrollToHeader}>
                  &#x2191;
          </button>
        </div>
      </div>
    </footer>      
  );
}

export default Footers;