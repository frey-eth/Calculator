# Calculator
Source : Muhammad Adam  
https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f
---
# Giới thiệu
1. Phần mềm chạy đa nền tảng Calculator
2. Ứng dụng sử dụng frameWork React native của Facebook, chạy được trên các nền tảng IOS, Android.
--------------------------------------------------
# Đề mục
1. Cài đặt
2. Các tính năng
3. Hướng dẫn tái sử dụng source code
4. Thành viên thực hiện dự án
*****

#### 1. Cài đặt: 
- Yêu cầu máy có cài đặt môi trường NodeJS, React native, các extension liên quan như npm, expo CLI và phần mềm Expo GO(Android, IOS) để chạy thử
- Tải thư mục này về máy -> chỉ đinh đến thư mục gốc cửa project -> gõ lệnh yarn để cài đặt thêm expo. Sau đó, chạy project bằng lệnh npm start. Cuối cùng tải app lên Expo GO.
#### 2. Các tính năng
Tính toán cơ bản các phép tính +, -, *, /, căn, tính phần trăm cùng với chức năng tìm kiếm lịch sử tính toán, có thể xóa sau khi tính toán xong.
#### 3. Hướng dẫn tái sử dụng source code
##### a. Module có sẵn đã sử dụng: 
- "react" (Lớp liên quan: SafeAreaView, StyleSheet, Text, View)
- "react-native" (Lớp liên quan: StyleSheet, TextInput, View)
##### b. Module tự định nghĩa:
- components/SearchBar, components/Row, components/Button, components/HomeScreen

##### c. Thành phần components/Button:
buttonStyles và textStyles là các tùy chỉnh chung cho hai component TouchableOpacity và Text. Bạn có thể tùy chỉnh các nút khác đi bằng việc thêm các style tương ứng và hai mảng này.
Các tùy chỉnh khác dự án đã sử dụng là: 
- "theme: secondary" (sử dụng style  'buttonSecondary' cho Button và 'textSecondary' cho Text)
- "theme:accent"(sử dụng style buttonAccent cho Button)
- "size:double" (sử dụng style buttonDouble cho Button).

##### d. Thành phần components/MainNavigator
- Sử dụng createStackNavigator để tạo hiệu ứng navigation. Hai screen là "HomeScreen" và "SearchScren" được mô tả bên dưới.

##### e. Thành phần components/Row:
Tạo hàng ngang cho các nút
##### f. Thành phần components/SearchBar
Thanh công cụ tìm kiếm(có sử dụng icon 'search' có sẵn trong module Feather)
##### g. Thành phần components/Homescreen.
Xử lý các thao tác tính toán cơ bản từ các nút bấm.
Xử lý phần chuyển màn hình dùng props.navigation(đối tượng HomeScreen được lồng trong Stack.navigator)

##### h. Thành phần Util/calculator
Các đối tượng định nghĩa trong module: 
- InitialState {currentValue, previousValue, operator}: là trạng thái tính toán ban đầu của phần mềm(Trạng thái chính được định nghĩa trong App.js và được g án Inital state)
- HandleNumber là callback nhận giá trị nhập vào từ nút và trạng thái chính của phần mềm để xử lý tương ứng.
- calculate là hàm callback tính toán chính được định nghĩa trong module calculator

##### i. Thành phần components/SearchScreen:
Phần màn hình hiển thị kết quả tìm kiếm lịch sử.

- Hiển thị nút, text box và danh sách kết quả tìm kiếm. Có sử dụng moodule tự định nghĩa "Seeach_list"
##### k. Thành phần components/SearchList:
- Sử dụng scrollView để tạo hiệu ứng cuộn khi danh sách tìm kiếm dài ra.(Cuộn làm mất hiển thị của textbox và nút).
- View sử dụng style subContainer kiểm tra độ dài của mảng filter. Nếu khác 0, update lịch sử tìm kiếm

#### 4. Thành viên thực hiện dự án:
Phạm Văn Dương  
Minh  
Thái Nguyễn Gia Đức  
Lê Trọng Tín  
