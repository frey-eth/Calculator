# Calculator
Source : Muhammad Adam  
https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f
---
# Giới thiệu
1. Phần mềm chạy đa nền tảng Calculator
2. Ứng dụng sử dụng frameWork React native của Facebook, chạy được trên các nền tảng IOS, Android.
--------------------------------------------------
# Demo

---
# Đề mục
1. Cài đặt
2. Các tính năng
3. Hướng dẫn tái sử dụng source code
4. Thành viên thực hiện dự án
*****

#### 1. Cài đặt: 
Yêu cầu máy có cài đặt môi trường NodeJS, React native, các extension liên quan như npm, expo CLI và phần mềm Expo GO(Android, IOS) để chạy thử.
#### 2. Các tính năng
Tính toán cơ bản các phép tính +, -, *, /, căn, tính phần trăm cùng với chức năng tìm kiếm lịch sử tính toán, có thể xóa sau khi tính toán xong.
#### 3. Hướng dẫn tái sử dụng source code
##### a. Module có sẵn đã sử dụng: 
- "react" (Lớp liên quan: SafeAreaView, StyleSheet, Text, View)
- "react-native" (Lớp liên quan: StyleSheet, TextInput, View)
##### b. Module tự định nghĩa:
- Util/calculator
- components/SearchBar, components/Row, components/Button

##### c. Thành phần components/Button:
buttonStyles và textStyles là các tùy chỉnh chung cho hai component TouchableOpacity và Text. Bạn có thể tùy chỉnh các nút khác đi bằng việc thêm các style tương ứng và hai mảng này.
Các tùy chỉnh khác dự án đã sử dụng là: 
- "theme: secondary" (sử dụng style  'buttonSecondary' cho Button và 'textSecondary' cho Text)
- "theme:accent"(sử dụng style buttonAccent cho Button)
- "size:double" (sử dụng style buttonDouble cho Button).

##### d. Thành phần components/Row:
Tạo hàng ngang cho các nút
##### e. Thành phần components/SearchBar
Thanh công cụ tìm kiếm(có sử dụng icon 'search' có sẵn trong module Feather)
##### f. Thành phần components/Calculator: 
Xử lý các thao tác tính toán cơ bản từ các nút bấm.

Các đối tượng định nghĩa trong module: 
- InitialState {currentValue, previousValue, operator}: là trạng thái tính toán ban đầu của phần mềm(Trạng thái chính được định nghĩa trong App.js và được g án Inital state)
- HandleNumber là callback nhận giá trị nhập vào từ nút và trạng thái chính của phần mềm để xử lý tương ứng.
#### 4. Thành viên thực hiện dự án:
Phạm Văn Dương  
Ngô Thị Hiền Minh  
Thái Nguyễn Gia Đức  
Lê Trọng Tín  
