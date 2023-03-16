import html from '../core.js';
import Header from './Header.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function CartPage({ shoppingCarts, iphones, samsungs, oppos, googlePixels, totalMoney }) {
    let phones = { iphones, samsungs, oppos, googlePixels };

    return html`
        ${Header()}

        <div id="cart">
            <div class="money">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 444.4px">SẢN PHẨM</th>
                            <th style="width: 109px">ĐƠN GIÁ</th>
                            <th style="width: 174.4px">SỐ LƯỢNG</th>
                            <th style="width: 141px">THÀNH TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${shoppingCarts.map(product => html`
                            <tr class="product">
                                <td class="image">
                                    <img src=${phones[product.phoneBrand][product.index].img} alt="" />
                                    <p>${phones[product.phoneBrand][product.index].name}</p>
                                </td>
                                <td class="center">
                                    ${phones[product.phoneBrand][product.index].priceTags.actualPrice + '₫'}
                                </td>
                                <td class="center">
                                    <input 
                                        type="number" id="b" name="b" 
                                        min="0" max="10" 
                                        value=${product.amount}
                                    >
                                </td>
                                <td class="center">${product.priceTag + 'đ'}</td>
                                <td>
                                    <i 
                                        class="fas fa-times close"
                                    >
                                    </i>
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>     

            <div class="sum_price">
                <input type="text" name="" id="voucher" placeholder="Nhập mã giảm giá">
                <input type="submit" value="Áp dụng" id="btn_voucher">

                <div class="price">
                    <div class="price1">
                        <h3>Giảm giá:</h3>
                        <h3>Tổng tiền:</h3>
                    </div>

                    <div class="price2">
                        <h3>0đ</h3>
                        <h3>${totalMoney.priceTag + 'đ'}</h3>
                    </div>
                </div>

                <input type="submit" name="" value="ĐẶT HÀNG" id="order">
            </div>
             
        </div>          

        ${Footer()}
    `;
}

export default connect()(CartPage);

                                        // onclick="dispatch('removeCart', ${product.phoneBrand}, ${product.index})"