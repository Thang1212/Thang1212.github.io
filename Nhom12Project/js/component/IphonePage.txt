import html from '../core.js';
import Header from './Header.js' 
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function IphonePage({ iphones, sortingType }) {
    return html`
        ${Header()}
        ${HeaderPanel()}

        <div id="toast"></div>
        <div id="pruduct">
            <h2>Iphone</h2>
            <div class="sort">
                <select name="" id="product__sorting" onchange="dispatch('sortingPrice', this.value)">
                    <option value="default" ${sortingType === 'default' && 'selected'}>Mặc định</option>
                    <option value="increase" ${sortingType === 'increase' && 'selected'}>Sắp xếp: giá thấp đến cao</option>
                    <option value="decrease" ${sortingType === 'decrease' && 'selected'}>Sắp xếp: giá cao đến thấp</option>
                </select>
            </div>

            <div class="list">
                ${sortingType === 'decrease' ? 
                    iphones.slice(0).reverse().map((iphone, index) => html`
                        <div class="list_products">
                            <img src=${iphone.img} alt="" >
                            <h5>${iphone.name}</h5>
                            <div class="by">
                                <input type="submit" value=${iphone.priceTags.actualPrice + 'đ'} >
                                <p>${iphone.priceTags.initPrice + 'đ'}</p>
                                <i 
                                    class="fa-solid fa-cart-shopping cart"
                                    onclick="dispatch('increaseCart', 'iphones', ${index}); showSuccessToast();"
                                >
                                </i>
                            </div>

                            <div class="parameters">
                                ${Object.keys(iphone.details).map(detail => html`
                                    <p><b>${detail}: </b>${iphone.details[detail]}</p>
                                `)}
                            </div>
                        </div>
                    `)
                    :
                    iphones.map((iphone, index) => html`
                        <div class="list_products">
                            <img src=${iphone.img} alt="" >
                            <h5>${iphone.name}</h5>
                            <div class="by">
                                <input type="submit" value=${iphone.priceTags.actualPrice + 'đ'} >
                                <p>${iphone.priceTags.initPrice + 'đ'}</p>
                                <i 
                                    class="fa-solid fa-cart-shopping cart"
                                    onclick="dispatch('increaseCart', 'iphones', ${index}); showSuccessToast();"
                                >
                                </i>
                            </div>

                            <div class="parameters">
                                ${Object.keys(iphone.details).map(detail => html`
                                    <p><b>${detail}: </b>${iphone.details[detail]}</p>
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

export default connect()(IphonePage)
