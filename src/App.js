import React from "react";

const stories = [
  { title: "Thiên Uyên", image: "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { title: "Bị Bạn Sang Cao Miên...", image: "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { title: "Giải Trí: Mở Vựa Chia Tay...", image: "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },
  { title: "Thiên Uyên", image: "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { title: "Bị Bạn Sang Cao Miên...", image: "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { title: "Giải Trí: Mở Vựa Chia Tay...", image: "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },{ title: "Thiên Uyên", image: "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { title: "Bị Bạn Sang Cao Miên...", image: "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { title: "Giải Trí: Mở Vựa Chia Tay...", image: "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },{ title: "Thiên Uyên", image: "https://static2.truyencv.com.vn/images/thien-uyen.jpg" },
  { title: "Bị Bạn Sang Cao Miên...", image: "https://static2.truyencv.com.vn/images/bi-ban-sang-cao-mien-ta-trieu-hoi-to-chuc-ao-den.jpg" },
  { title: "Giải Trí: Mở Vựa Chia Tay...", image: "https://static2.truyencv.com.vn/images/giai-tri-moi-vua-chia-tay-lien-cung-nu-minh-tinh-vao-khach-san.jpg" },
];

const Home = () => {
  return (
    <section className="container mt-4">
      <div className="border-bottom border-bottom-1 border-secondary mb-2 p-0">
          <h4 className="fw-bold d-inline-block border-bottom border-bottom-2 border-dark mb-0 pb-2">
            TRUYỆN HOT 🔄
          </h4>
        </div>
      <div className="row">
        {stories.map((story, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" onClick={() => alert(story.title)}>
            <div className="card border-0">
              <img
                src={story.image}
                className="card-img-top"
                alt={story.title}
                style={{ height: "200px", objectFit: "cover" }}
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
