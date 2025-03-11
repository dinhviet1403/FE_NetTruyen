import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";

const stories = [
  { "id": 1, "title": "Thiên Uyên", "image": "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { "id": 2, "title": "Bị Bạn Sang Cao Miên...", "image": "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { "id": 3, "title": "Giải Trí: Mở Vựa Chia Tay...", "image": "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },
  { "id": 4, "title": "Thiên Uyên", "image": "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { "id": 5, "title": "Bị Bạn Sang Cao Miên...", "image": "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { "id": 6, "title": "Giải Trí: Mở Vựa Chia Tay...", "image": "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },
  { "id": 7, "title": "Thiên Uyên", "image": "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { "id": 8, "title": "Bị Bạn Sang Cao Miên...", "image": "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { "id": 9, "title": "Giải Trí: Mở Vựa Chia Tay...", "image": "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },
  { "id": 10, "title": "Thiên Uyên", "image": "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { "id": 11, "title": "Bị Bạn Sang Cao Miên...", "image": "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { "id": 12, "title": "Giải Trí: Mở Vựa Chia Tay...", "image": "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" }
];



const Home = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    return navigate(link); // Điều hướng đến trang mới
  };

  return (
    <section className="container mt-4">
      <div className="border-bottom border-bottom-1 border-secondary mb-2 p-0">
          <h4 className="fw-bold d-inline-block border-bottom border-bottom-2 border-dark mb-0 pb-2">
            TRUYỆN HOT 🔄
          </h4>
        </div>
      <div className="row mt-3">
        {stories.map((story, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 hover-zoom p-2" onClick={() => handleClick(`/story/${story.id}`)}>
            <div className="card border-0">
              <img
                src={story.image}
                className="card-img-top"
                alt={story.title}
                style={{ height: "200px"}}
              />
              <div className="card-body p-2 text-center bg-dark text-white">
                <p className="small">{story.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
