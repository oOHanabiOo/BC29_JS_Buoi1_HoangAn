//=========//
//==Bài 1==//
//=========//

/** -=MÔ HÌNH 3 KHỐI=-
 * --- Đầu vào:
 *          + Lương 1 ngày: 100.000
 *          + Số ngày làm việc
 * 
 * --- Xử lý:
 *          + Tạo biến luong1Ngay, soNgayLam, tienLuong
 *          + Gán giá trị cho 2 biến luong1Ngay, soNgayLam
 *          + Dùng công thức tính lương: luong1Ngay * soNgayLam
 *          + In ra kết quả tổng vừa tính
 * 
 * --- Đầu ra:
 *          + Tiền lương  nhân viên
 */

//-=CHƯƠNG TRÌNH=-
var luong1Ngay = 100000;
var soNgayLam = 26;
var tienLuong = luong1Ngay * soNgayLam;
console.log("Tiền lương nhân viên: " + tienLuong + " VNĐ");

//========================================================================//

//=========//
//==Bài 2==//
//=========//

/** -=MÔ HÌNH 3 KHỐI=-
 * --- Đầu vào:
 *          + Nhập vào 5 số thực
 * 
 * --- Xử lý:
 *          + Tạo biến và gán giá trị cho 5 số thực
 *          + Tạo biến giaTriTB
 *          + Tính giá trị trung bình: tổng của 5 số thực chia co 5
 *          + In ra kết quả tổng vừa tính
 * 
 * --- Đầu ra:
 *          + Giá trị trung bình của 5 số thực
 */

//-=CHƯƠNG TRÌNH=-
var a = 12;
var b = 34;
var c = 49;
var d = 78;
var e = 26;
var giaTriTB = (a + b + c + d + e) / 5;
console.log("Giá trị trung bình: " + giaTriTB);

//========================================================================//

//=========//
//==Bài 3==//
//=========//

/** -=MÔ HÌNH 3 KHỐI=-
 * --- Đầu vào:
 *          + Giá USD là 23.500 VNĐ
 *          + Nhập vào số tiền USD
 * 
 * --- Xử lý:
 *          + Tạo biến USD, VNĐ, quyDoi
 *          + Gán giá trị cho biến USD, VNĐ
 *          + Số tiền quy đổi = USD * VNĐ
 *          + In ra kết quả tổng vừa tính
 * 
 * --- Đầu ra:
 *          + Số tiền quy đổi từ USD ra VNĐ
 */

//-=CHƯƠNG TRÌNH=-
var VNĐ = 23500;
var USD = 5;
var quyDoi = VNĐ * USD;
console.log("Quy đổi USD sang VNĐ: " + quyDoi + " VNĐ");

//========================================================================//

//=========//
//==Bài 4==//
//=========//

/** -=MÔ HÌNH 3 KHỐI=-
 * --- Đầu vào:
 *          + Nhập vào chiều dài và chiều rộng 
 * 
 * --- Xử lý:
 *          + Tạo biến dai, rong, dienTich, chuVi
 *          + Gán giá trị cho 2 biến dai, rong
 *          + Dùng công thức:
 *              - Diện tích = dài * rộng
 *              - Chu vi = (dài + rộng) * 2
 *          + In ra kết quả tổng vừa tính
 * 
 * --- Đầu ra:
 *          + Diện tích và chu vi của hình chữ nhật
 */

//-=CHƯƠNG TRÌNH=-
var dai = 5;
var rong = 6;
var dienTich = dai * rong;
var chuVi = (dai + rong) * 2;
console.log("Diện tích: " + dienTich + " m2");
console.log("Chu vi: " + chuVi + " m");

//========================================================================//

//=========//
//==Bài 5==//
//=========//

/** -=MÔ HÌNH 3 KHỐI=-
 * --- Đầu vào:
 *          + Nhập vào 1 số có 2 chữ số
 * 
 * --- Xử lý:
 *          + Tạo biến n, hangChuc, hangDonVi, tong
 *          + Gán giá trị cho biến n
 *          + Tách số hàng chục: Math.floor(n%100/10)
 *          + Tách số hàng đơn vị: n%10
 *          + Tính tổng của 2 số vừa tách
 *          + In ra kết quả tổng vừa tính
 * 
 * --- Đầu ra:
 *          + Tổng 2 ký số
 */

//-=CHƯƠNG TRÌNH=-
var n = 99;
var hangChuc = Math.floor(n % 100 / 10);
var hangDonVi = n % 10;
var tong = hangChuc + hangDonVi;
console.log("Tổng 2 ký số: " + tong);