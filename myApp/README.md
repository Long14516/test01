# KeyboardAvoidingComponent – Màn hình Đăng Nhập bằng Số Điện Thoại

## Giới thiệu
`KeyboardAvoidingComponent` là một component React Native dùng để tạo màn hình **Đăng nhập / Đăng ký bằng số điện thoại**, có hỗ trợ **tự động đẩy giao diện khi bàn phím xuất hiện** nhằm tránh che ô nhập liệu.

Component phù hợp sử dụng trong các ứng dụng mobile như:
- Ứng dụng bất động sản
- Ứng dụng đăng nhập bằng OTP
- Ứng dụng yêu cầu nhập số điện thoại

---

## Công nghệ sử dụng
- React Native
- KeyboardAvoidingView
- TextInput
- TouchableWithoutFeedback
- Platform API

---

## Tính năng chính
- ⌨️ Tự động tránh bàn phím khi nhập liệu
- 📱 Nhập số điện thoại với `keyboardType="phone-pad"`
- 👆 Ẩn bàn phím khi chạm ra ngoài
- 🔒 Nút "Tiếp Tục" đang ở trạng thái `disabled` (có thể bật khi validate dữ liệu)

---

## Cấu trúc giao diện
- Tiêu đề: **Đăng Nhập**
- Mô tả hướng dẫn người dùng
- Ô nhập số điện thoại
- Nút **Tiếp Tục**

---
## Thông tin
-Họ tên: Ngô Hoàng Long
-Lớp:D18CNPM4
-Mã Sinh Viên:23810310184
## Kết Quả
<img width="869" height="1884" alt="image" src="https://github.com/user-attachments/assets/abd4791f-3f71-4ee1-bf32-f7507a7acfb7" />

## Cài đặt
Đảm bảo bạn đã cài đặt môi trường React Native hoặc Expo.

```bash
npm install
# hoặc
yarn install
