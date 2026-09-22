/**
 * =========================================================================
 * CẤU HÌNH THIỆP CHÚC MỪNG 3D (THIEP-CHUC-MUNG CONFIG)
 * =========================================================================
 * Bạn có thể dễ dàng tùy biến thiệp cho bất kỳ dịp nào:
 * - Sinh nhật, Kỷ niệm ngày yêu / ngày cưới (Anniversary), Valentine, 8/3, 20/10, Tết...
 * - Thêm tên người nhận, ảnh kỷ niệm, đổi bài hát, đổi lời chúc...
 */

const CARD_CONFIG = {
  // 1. THÔNG TIN NGƯỜI NHẬN & DỊP KỶ NIỆM
  recipientName: "Sếp Việt", // Tên người nhận (ví dụ: "Việt Nguyễn", "Quỳnh Anh", "Bố Mẹ"...)
  occasionTitle: "Chúc Mừng Sinh Nhật", // Dịp kỷ niệm (ví dụ: "Happy Birthday", "Happy Anniversary", "Valentine Day"...)

  // 2. NHẠC NỀN (File MP3 cục bộ hoặc link trực tuyến)
  musicUrl: "happy-birthday.mp3", // Thay file mp3 hoặc dán link nhạc mp3 bất kỳ

  // 3. ẢNH KỶ NIỆM (Hiển thị dạng khung ảnh Polaroid 3D rơi lơ lửng)
  // Bạn có thể dán link ảnh trực tuyến (imgur, cdn, github) hoặc đường dẫn tương đối
  photos: [
    // Ví dụ:
    // "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400",
    // "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400"
  ],

  // 4. BẬT / TẮT CÁC LOẠI QUÀ 3D
  giftSettings: {
    enableTeddyBear: true,     // 🧸 Gấu bông 3D dễ thương
    enableFlowerBouquet: true, // 💐 Bó hoa tươi rực rỡ
    enableBirthdayCake: true,  // 🎂 Bánh kem cắm nến
    enableGiftBox: true,       // 🎁 Hộp quà buộc nơ vàng
    enableHeart: true,         // ❤️ Trái tim 3D đỏ thắm
    enableBalloon: true,       // 🎈 Bóng bay đủ màu
    giftDensity: 28            // Số lượng quà cáp rơi đồng thời
  },

  // 5. DANH SÁCH LỜI CHÚC (50 câu chúc chọn lọc, có thể sửa tự do)
  messages: [
    "🎂 HAPPY BIRTHDAY 🎂",
    "Chúc Mừng Sinh Nhật Sếp! 👑",
    "Tuổi Mới Rực Rỡ & Thăng Hoa ✨",
    "Tiền Vào Như Nước Sông Đà 💰",
    "Tiền Ra Nhỏ Giọt Cà Phê Phin ☕",
    "Thành Công Bứt Phá Mọi Giới Hạn 🚀",
    "Vạn Sự Như Ý - Tỷ Sự Như Mơ 🍀",
    "Công Việc Thuận Buồm Xuôi Gió ⛵",
    "Ký Hợp Đồng Mỏi Tay 📝",
    "Doanh Thu Đột Phá X10 📈",
    "Sếp Mãi Đỉnh - Đỉnh Của Chóp 🏔️",
    "Sự Nghiệp Lên Như Diều Gặp Gió 🪁",
    "Một Năm Đầy Ắp Cơ Hội Vàng 🏆",
    "Bản Lĩnh Vững Vàng Trước Sóng Gió 🌊",
    "Tài Lộc Dồi Dào Quanh Năm 💎",
    "Sức Khỏe Vô Biên - Tinh Thần Thép 💪",
    "Trẻ Khỏe Năng Động Mỗi Ngày 🏃‍♂️",
    "Nụ Cười Luôn Nở Trên Môi 😄",
    "Tràn Đầy Năng Lượng Tích Cực ⚡",
    "Trẻ Mãi Không Già - Đẹp Trai Bất Chấp 😎",
    "Tâm Hồn Luôn Thanh Thản An Nhiên 🍃",
    "Bình An Trong Từng Giây Phút 🕊️",
    "Cuộc Sống An Lạc & Hạnh Phúc 🌸",
    "Trái Tim Luôn Tràn Ngập Tình Yêu ❤️",
    "Gia Đình Ấm Êm Hạnh Phúc Viên Mãn 👨‍👩‍👧‍👦",
    "Tình Yêu Thăng Hoa Ngọt Ngào 💖",
    "Đi Đâu Cũng Gặp Quý Nhân 🌟",
    "Ước Gì Được Nấy - Cầu Được Ước Thấy 🎁",
    "Shopping Không Cần Nhìn Giá 🛍️",
    "Du Lịch Khắp Năm Châu Bốn Bể ✈️",
    "Ăn Chơi Hết Mình - Làm Hết Sức 🥂",
    "Xe Sang - Nhà Đẹp - Đời Nở Hoa 🚗",
    "Phong Độ Là Nhất Thời - Đẳng Cấp Là Mãi Mãi 👑",
    "Ví Luôn Dày Cộm Tiền Mặt & Thẻ 💳",
    "Số Đỏ Quanh Năm - Vận May Gõ Cửa 🎰",
    "Tự Do Tài Chính - Thảnh Thơi Hưởng Thụ 🍹",
    "Mỗi Ngày Là Một Bữa Tiệc Rực Rỡ 🎉",
    "Tuổi Mới Bớt Cọc - Thêm Giàu 😆",
    "Deadline Tự Biến Mất - Task Tự Xong 🪄",
    "Tài Khoản Ting Ting Liên Hồi 📲",
    "Luôn Là Ngôi Sao Sáng Nhất Buổi Tiệc 🌠",
    "Ngồi Không Tiền Cũng Rơi Trúng Đầu 💸",
    "Tỏa Sáng Rực Rỡ Theo Phong Cách Riêng 💫",
    "Vượt Qua Mọi Thách Thức Thần Kỳ ⚡",
    "Đón Nhận Cơn Mưa Tài Lộc & May Mắn 🌧️",
    "Hôm Nay Bạn Là Nhân Vật Chính 🎉",
    "Mọi Ước Nguyện Đều Thành Hiện Thực 🕯️",
    "Happy Birthday To An Amazing Soul 🎂",
    "Tuổi Mới - Vận Hội Mới - Thắng Lợi Mới 🏆",
    "Happy Birthday - Vạn Dặm Bình An! 🌈"
  ]
};
