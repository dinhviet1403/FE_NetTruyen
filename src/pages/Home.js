import React from "react";
import ListCard from "../Items/ListCard";
import ListNew from "../Items/ListNew";
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

const storiesNew = [
  { id: 1, genre: "Huyền Huyễn", title: "Ta Lại Là Thiên Mệnh Nhân Vật Phản Diện" },
  { id: 2, genre: "Huyền Huyễn", title: "Người Cùng Ta Đàm Luận Tu Tiên, Ta Hàn Huyên Với Người Khoa Học Kỹ Thuật" },
  { id: 3, genre: "Huyền Huyễn", title: "Hồng Hoang Chi Công Đức Thành Thánh" },
  { id: 4, genre: "Huyền Huyễn", title: "Hướng Về Tương Lai Nữ Ma Đầu Huy Kiếm" },
  { id: 5, genre: "Tiên Hiệp", title: "Gia Tộc Tu Tiên: Ta Có Thể Thăng Cấp Pháp Khí" },
  { id: 6, genre: "Đô Thị", title: "1976 Dạo Chơi Săn Bắn Bắc Cảnh" },
  { id: 7, genre: "Huyền Huyễn", title: "Bị Lục Nhĩ Mi Hầu Đánh Chết Sau, Ta Thành Tôn Ngộ Không" },
  { id: 8, genre: "Đô Thị", title: "Tôi Chỉ Muốn Sống Yên Ổn!" },
  { id: 9, genre: "Kỳ Ảo", title: "Xuyên Qua Ác Long: Bắt Đầu Quốc Vương Hiến Tế Công Chúa" },
  { id: 10, genre: "Huyền Huyễn", title: "Tu Tiên: Từ Thu Hoạch Được Không Gian Bất Đầu" }
];



const Home = () => {
  return (
    <>
      <ListCard stories={stories} Title="Truyện Hot" />
      <ListNew stories={storiesNew} Title="📖 TRUYỆN MỚI CẬP NHẬT" />
      <ListCard stories={stories} Title="Truyện Hay" />
    </>
  );
};

export default Home;
