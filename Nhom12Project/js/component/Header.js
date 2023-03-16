import html from '../core.js';
import { connect } from '../store.js';

function Header({ logo, shoppingCarts }) {
    return html`
        <div id="head">
            <div id="header">
                <img src=${logo} alt="">

                <div class="form">
                    <input type="text" placeholder="Tìm kiếm sản phẩm">
                    <i class="fa-solid fa-magnifying-glass search"></i>
                </div>

                <button>Kiểm tra đơn hàng</button>

                <div class="icon">
                    <a class="fa-solid fa-cart-shopping cart" href="../../html/cart.html"></a>
                    <p>${shoppingCarts.reduce((acc, product) => acc += product.amount, 0)}</p>
                    <i class="far fa-user user" aria-hidden="true"></i>
                    <span><a href="Signup.html">Tài khoản</a></span>
                </div>
            </div>

            <div id="sub-header">
                <ul class="nav">
                    <li><a href="../../index.html">Trang chủ</a></li>

                    <li><a href="../../html/iphoneproduct.html">Iphone</a>
                    </li>

                    <li><a href="../html/samsungproduct.html">Samsung</a>
                    </li>

                    <li><a href="../html/googlepixelproduct.html">Google Pixel</a>
                    </li>

                    <li><a href="../html/oppoproduct.html">Oppo</a>
                    </li>

                    <li><a href="">Phụ kiện </a>
                        <i class="fa-solid fa-angle-down icon"></i>
                        <ul class="sub-nav Accessory ">
                            <li><a href="">Balo - Túi đeo</a></li>
                            <li><a href="">Thiết bị mạng</a></li>
                            <li><a href="">Đế tảng nhiệt</a></li>
                            <li><a href="">Phụ kiên Razer</a></li>
                            <li><a href="">Phụ kiên HyperX</a></li>
                            <li><a href="">Phụ kiện PC</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

export default connect()(Header);
