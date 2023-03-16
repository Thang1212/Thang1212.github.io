import html from '../core.js';
import Header from './Header.js' 
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function GooglePixelPage({ googlePixels, sortingType }) {
    return html`
        ${Header()}
        ${HeaderPanel()}

        <div id="toast"></div>
        <div id="pruduct">
            <h2>Google Pixel</h2>
            <div class="sort">
                <select name="" id="product__sorting" onchange="dispatch('sortingPrice', this.value)">
                    <option value="default" ${sortingType === 'default' && 'selected'}>Mặc định</option>
                    <option value="increase" ${sortingType === 'increase' && 'selected'}>Sắp xếp: giá thấp đến cao</option>
                    <option value="decrease" ${sortingType === 'decrease' && 'selected'}>Sắp xếp: giá cao đến thấp</option>
                </select>
            </div>

            <div class="list">
                ${sortingType === 'decrease'  ? 
                    googlePixels.slice(0).reverse().map((ggp, index) => html`
                        <div class="list_products">
                            <img src=${ggp.img} alt="" >
                            <h5>${ggp.name}</h5>
                            <div class="by">
                                <input type="submit" value=${ggp.priceTags.actualPrice + 'đ'} >
                                <p>${ggp.priceTags.initPrice + 'đ'}</p>
                                <i 
                                    class="fa-solid fa-cart-shopping cart"
                                    onclick="dispatch('increaseCart', 'googlePixels', ${index}); showSuccessToast();"
                                >
                                </i>
                            </div>

                            <div class="parameters">
                                ${Object.keys(ggp.details).map(detail => html`
                                    <p><b>${detail}: </b>${ggp.details[detail]}</p>
                                `)}
                            </div>
                        </div>
                    `)
                    :
                    googlePixels.map((ggp, index) => html`
                        <div class="list_products">
                            <img src=${ggp.img} alt="" >
                            <h5>${ggp.name}</h5>
                            <div class="by">
                                <input type="submit" value=${ggp.priceTags.actualPrice + 'đ'} >
                                <p>${ggp.priceTags.initPrice + 'đ'}</p>
                                <i 
                                    class="fa-solid fa-cart-shopping cart"
                                    onclick="dispatch('increaseCart', 'googlePixels', ${index}); showSuccessToast();"
                                >
                                </i>
                            </div>

                            <div class="parameters">
                                ${Object.keys(ggp.details).map(detail => html`
                                    <p><b>${detail}: </b>${ggp.details[detail]}</p>
                                `)}
                            </div>
                        </div>
                    `)
                }
            </div>
        </div>

        ${Footer()}
    `;
}

export default connect()(GooglePixelPage)
