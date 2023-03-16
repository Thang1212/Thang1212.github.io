import html from '../core.js';
import { connect } from '../store.js';

function Footer() {
    return html`
        <div id="footer">
            <div class="col footer1 ">
                <h2>Thông tin Nhóm 12</h2>
                <p>Võ Hoàng Sơn</p>
                <p>Nguyễn Tiến Thành</p>
                <p>Cồ Duy Thắng</p>
                <p>Chu Công Quý</p>
                <p>Hàn Thế Sơn</p>
                <p>Nguyễn Anh Tài</p>
                <br>
                <p class="email">moblieworld.com</p>
                <p class="email">moblieworld@gmail.com</p>
            </div>

            <div class="col  footer2">
                <h2>Hệ thống cửa hàng</h2>
                <p class="adrees"> Khu phố 3, Thị trấn Vân Canh, Vân Canh, Bình Định</p>
                <p class="adrees"> 12 Nguyễn Văn Bảo, F4, Gò Vấp, TPHCM</p>
                <p class="adrees"> 08 Tự Lập, Phường 4, Tân Bình, Hồ Chí Minh</p>
                <p class="adrees"> 10A1, Ngõ 49 Linh Lang, Ba Đình, Hà Nội </p>

            </div>
            <div class="col footer3">
                <h2>Đăng ký nhận bản tin</h2>
                <input type="text" placeholder="Nhập email của bạn">
                <button>Gửi</button>
            </div>
            <div class="col footer4">
                <h2>Liên kết nhanh</h2>
                <p>Sản phẩm</p>
                <p>Tin tức</p>
                <h2>Hướng dẫn mua hàng</h2>
                <span>Cách thức mua hàng</span>
                <span>Chính sách thu hồi hàng hóa</span>
                <span>Chính sách bảo hành</span>
            </div>
        </div>

        <div class="footer-end">
            <div class="rules"> </div>
            <p>Copyright © 2023 MOBILEWORLD | All rights reserved | Trụ sở chính số 20, Nguyễn Văn Bảo, Gò Vấp, TP.HCM.|
                Thực hiện bởi nhóm 12_IUH</p>

            <div class="icons">
                <i class="fab fa-instagram" aria-hidden="true"></i>
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                <i class="fab fa-youtube" aria-hidden="true"></i>
            </div>
        </div>
    `;
}

export default connect()(Footer);
