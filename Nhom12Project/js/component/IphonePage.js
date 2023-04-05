import html from '../core.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function IphonePage({ iphones }) {
    return html`
        ${Header()}
        ${NavBar()}
        ${HeaderPanel()}

        <main>
            <section class="product__list album bg-light p-5">
                <div class="container">
                    <div class="row g-md-5">
                        ${iphones.map((iphone, index) => html`
                            <div class="col-md-3 mb-2">
                                <div class="card shadow-sm">
                                    <a href="#">
                                        <img src=${iphone.img} alt="" class="bd-placeholder-img card-img-top p-3">
                                    </a>

                                    <div class="card-body">
                                        <h4 class="card-text">${iphone.name}</h4>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <p class="border border-danger text-sm-danger rounded p-1">${iphone.priceTags.actualPrice}đ</p>
                                                <p class="border border-secondary text-sm-muted rounded p-1 text-decoration-line-through">${iphone.priceTags.initPrice}đ</p>
                                            </div>
                                            <button class="btn btn-sm btn-outline-secondary mb-lg-3">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `)}
                    </div>
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(IphonePage);
