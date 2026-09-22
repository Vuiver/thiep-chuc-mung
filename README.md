# 🎉 Thiệp Chúc Mừng 3D (3D Celebration Waterfall)

Một trang web thiệp chúc mừng 3D tương tác không gian tuyệt đẹp, với thác nước lời chúc rực rỡ, quà cáp phong phú (gấu bông 🧸, bó hoa tươi 💐, bánh sinh nhật 🎂, hộp quà 🎁, trái tim ❤️, bóng bay 🎈, ảnh kỷ niệm polaroid 📷) và âm nhạc du dương.

🌐 **Demo trực tiếp:** [https://vuiver.github.io/thiep-chuc-mung/](https://vuiver.github.io/thiep-chuc-mung/)

---

## 🛠️ Hướng Dẫn Tùy Biến (Dễ Dàng 100%)

Bạn có thể tùy biến thiệp theo **2 cách**:

### Cách 1: Tùy biến nhanh qua đường link (Không cần sửa code!)
Chỉ cần thêm các tham số vào sau đường link là thiệp sẽ tự động biến hóa:

- **Đổi tên người nhận:** `?to=Tên_Người_Nhận`
  - Ví dụ: `https://vuiver.github.io/thiep-chuc-mung/?to=Quỳnh+Anh`
- **Đổi dịp kỷ niệm:** `?title=Dịp_Kỷ_Niệm`
  - Ví dụ: `https://vuiver.github.io/thiep-chuc-mung/?to=Em+Yêu&title=Happy+Anniversary`
- **Thêm ảnh kỷ niệm (khung Polaroid 3D):** `?img=Link_Ảnh`
  - Ví dụ: `https://vuiver.github.io/thiep-chuc-mung/?to=Bạn+Thân&img=https://i.imgur.com/example.jpg`
- **Đổi bài hát:** `?music=Link_Nhạc_MP3`
  - Ví dụ: `https://vuiver.github.io/thiep-chuc-mung/?music=https://example.com/nhac-tinh-yeu.mp3`

---

### Cách 2: Tùy biến toàn diện trong file `config.js`
Mở file `config.js` để chỉnh sửa mọi chi tiết:

```javascript
const CARD_CONFIG = {
  // 1. Tên người nhận & Dịp kỷ niệm
  recipientName: "Sếp Việt",
  occasionTitle: "Chúc Mừng Sinh Nhật", // hoặc "Happy Anniversary", "Valentine"...

  // 2. Nhạc nền (Thay file mp3 hoặc dán link mp3)
  musicUrl: "happy-birthday.mp3",

  // 3. Danh sách ảnh kỷ niệm (khung ảnh Polaroid 3D rơi lơ lửng)
  photos: [
    "https://example.com/anh1.jpg",
    "https://example.com/anh2.jpg"
  ],

  // 4. Bật/tắt các loại quà 3D
  giftSettings: {
    enableTeddyBear: true,     // 🧸 Gấu bông 3D
    enableFlowerBouquet: true, // 💐 Bó hoa tươi
    enableBirthdayCake: true,  // 🎂 Bánh kem cắm nến
    enableGiftBox: true,       // 🎁 Hộp quà nơ vàng
    enableHeart: true,         // ❤️ Trái tim đỏ thắm
    enableBalloon: true        // 🎈 Bóng bay đủ màu
  },

  // 5. Danh sách lời chúc (50 câu chúc tùy biến)
  messages: [
    "🎂 HAPPY BIRTHDAY 🎂",
    "Chúc Sếp Luôn Vui Vẻ & Vững Vàng 💎",
    "Tiền Vào Như Nước Sông Đà 💰",
    // ... thêm các câu chúc riêng của bạn
  ]
};
```

---

## ✨ Tính Năng Nổi Bật
- **Không gian 3D tràn viền 100% (Pure 3D):** Không nút bấm hay thanh bar thừa thãi, trải nghiệm đắm chìm điện ảnh.
- **Vuốt xoay 360 độ:** Ngắm nhìn không gian tiệc từ mọi góc độ.
- **Chạm tương tác:** Chạm vào bất kỳ lời chúc hay hộp quà nào để bắn pháo hoa Confetti và nghe tiếng pop vui tai.
- **Âm thanh thông minh:** Tự động phát hoặc chạm nhẹ màn hình để bật nhạc Happy Birthday.
- **Hiển thị hoàn hảo:** Chữ to rõ nét, viền Neon lộng lẫy, tương thích 100% trên iPhone, Android và Desktop.
