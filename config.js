/**
 * =========================================================================
 * CẤU HÌNH THIỆP CHÚC MỪNG 3D (THIEP-CHUC-MUNG CONFIG)
 * =========================================================================
 * Chủ đề: Chúc mừng sinh nhật anh Xà Bông Hoàng 🎂
 */

const CARD_CONFIG = {
  // 1. THÔNG TIN NGƯỜI NHẬN & DỊP KỶ NIỆM
  recipientName: "Anh Xà Bông Hoàng",
  occasionTitle: "Chúc Mừng Sinh Nhật",

  // 2. NHẠC NỀN
  musicUrl: "happy-birthday.mp3",

  // 3. ẢNH KỶ NIỆM (Hiển thị dạng khung ảnh Polaroid 3D rơi lơ lửng)
  photos: [],

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

  // 5. DANH SÁCH LỜI CHÚC DÀNH RIÊNG CHO ANH XÀ BÔNG HOÀNG
  messages: [
    "🎂 HAPPY BIRTHDAY ANH XÀ BÔNG HOÀNG 🎂",
    "👑 Chúc Mừng Sinh Nhật Anh Xà Bông Hoàng! 👑",
    "✨ Tuổi Mới Thơm Tho Rực Rỡ - Vạn Sự Hanh Thông ✨",
    "🧼 Xà Bông Hoàng Mãi Đỉnh - Tẩy Sạch Mọi Âu Lo 💎",
    "💰 Tiền Vào Như Nước Sông Đà - Đếm Tiền Gãy Cả Tay 💵",
    "☕ Tiền Ra Nhỏ Giọt Cà Phê Phin ☕",
    "🚀 Sự Nghiệp Thăng Hoa - Đỉnh Cao Bứt Phá 📈",
    "🌟 Phong Độ Ngời Ngời - Đẹp Trai Bất Chấp Thời Gian 😎",
    "💪 Sức Khỏe Vô Biên - Tinh Thần Thép 💪",
    "🏆 Một Năm Rực Rỡ - Bội Thu Thắng Lợi 🏆",
    "⛵ Công Việc Thuận Buồm Xuôi Gió - Trăm Trận Trăm Thắng ⚔️",
    "📝 Ký Hợp Đồng Mỏi Tay - Khách Hàng Tấp Nập 📑",
    "🍀 Vạn Sự Như Ý - Tỷ Sự Như Mơ 🍀",
    "💎 Tài Lộc Bùng Nổ - Số Dư Ting Ting Liên Tục 📲",
    "🚗 Xe Sang Nhà Đẹp - Cuộc Sống Nở Hoa 🏡",
    "👨‍👩‍👧‍👦 Gia Đình Ấm Êm - Tràn Ngập Tiếng Cười ❤️",
    "🥂 Hôm Nay Anh Hoàng Là Ngôi Sao Sáng Nhất 🥂",
    "🎉 Tuổi Mới Bớt Cọc - Thêm Giàu - Cười Nhiều Hơn 🥳",
    "🕊️ Bình An Trong Tâm Hồn - An Nhiên Mỗi Ngày 🍃",
    "🌟 Quý Nhân Phù Trợ - Đi Đâu Cũng Được Yêu Quý 🌟",
    "🎁 Cầu Được Ước Thấy - Vạn Điều Tốt Lành 🎁",
    "✈️ Du Lịch Bốn Phương - Thảnh Thơi Hưởng Thụ 🏖️",
    "🛍️ Shopping Thả Ga - Không Cần Nhìn Giá 💳",
    "🍻 Nhậu Ngàn Chén Không Say - Anh Em Gắn Kết 🍻",
    "🌈 Bọt Xà Bông Lấp Lánh - Đời Tươi Như Cầu Vồng 🌈",
    "🧼 Tắm Trong Tiền Bạc - Thơm Ngát Vinh Quang 💎",
    "👑 Đẳng Cấp Là Mãi Mãi - Anh Hoàng Là Duy Nhất 👑",
    "🔥 Ý Tưởng Bùng Nổ - Dự Án Nào Cũng Thắng Lớn 💡",
    "🪄 Deadline Tự Biến Mất - Task Nào Cũng Xong Xuôi 🪄",
    "🎯 Nhắm Đâu Trúng Đó - Đạt Mọi KPI 🎯",
    "🍰 Ăn Bánh Sinh Nhật Tẹt Ga - Không Sợ Tăng Cân 🎂",
    "💸 Ngồi Không Tiền Cũng Rơi Trúng Đầu 💸",
    "❤️ Tình Cảm Thăng Hoa - Đời Đẹp Như Mơ 💖",
    "⚡ Năng Lượng Đầy Bình - Bứt Phá Mọi Giới Hạn ⚡",
    "🌈 Vạn Dặm Bình An - Triệu Niềm Vui Gõ Cửa 🌈",
    "😄 Nụ Cười Rạng Rỡ - May Mắn Ngập Tràn 😄",
    "🍾 Khui Champagne Ăn Mừng Sinh Nhật Rực Rỡ 🍾",
    "🏔️ Tuổi Mới Đón Vận Hội Mới - Chinh Phục Đỉnh Cao 🏔️",
    "🎈 Tuổi Mới Tự Do - Phóng Khoáng - Yêu Đời 🎈",
    "🥇 Luôn Là Phiên Bản Xuất Sắc Nhất Của Chính Mình 🥇",
    "🌟 Đại Ca Xà Bông Hoàng Sinh Nhật Vui Vẻ! 🌟",
    "💎 Kim Cương Bất Hoại - Vững Vàng Trước Sóng Gió 🌊",
    "☕ Sáng Thong Thả Cafe - Chiều Đếm Tiền Mỏi Tay ☕",
    "🏄‍♂️ Lướt Trên Mọi Sóng Gió Một Cách Điệu Nghệ 🏄‍♂️",
    "🎯 Mục Tiêu Năm Nay X2 - Doanh Số Bứt Phá X10 🚀",
    "🥳 Quẩy Hết Mình Cùng Anh Em Trong Ngày Sinh Nhật 🥳",
    "🍀 Số Đỏ Quanh Năm - Vận May Luôn Bên Cạnh 🍀",
    "🏡 Đất Đai Thẳng Cánh Cò Bay - Sổ Đỏ Xếp Chồng 🏡",
    "👑 Đại Gia Xà Bông Hoàng - Trùm Phong Độ 👑",
    "🎂 Happy Birthday Anh Hoàng - Tuổi Mới Đại Thắng! 🎂"
  ]
};
