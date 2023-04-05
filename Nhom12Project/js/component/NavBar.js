import html from '../core.js';
import { connect } from '../store.js';

function NavBar() {
    return html`
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="nav__list navbar-nav gap-lg-5">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="./iphone.html">Iphone</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="#">Samsung</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="#">Google Pixel</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="#">Oppo</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Phụ kiện
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Sạc dự phòng</a></li>
                            <li><a class="dropdown-item" href="#">Sạc cáp</a></li>
                            <li><a class="dropdown-item" href="#">Ốp lưng điện thoại</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    `
}

export default connect()(NavBar);
