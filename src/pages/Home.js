import React from "react";

const stories = [
  { title: "Thiên Uyên", image: "link_hinh_1.jpg" },
  { title: "Bị Bạn Sang Cao Miên...", image: "link_hinh_2.jpg" },
  { title: "Giải Trí: Mở Vựa Chia Tay...", image: "link_hinh_3.jpg" },
  // Thêm các truyện khác
];

const Home = () => {
  return (
    <section className="container mt-4">
      <h3 className="fw-bold">TRUYỆN HOT 🔄</h3>
      <div className="row">
        {stories.map((story, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
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
