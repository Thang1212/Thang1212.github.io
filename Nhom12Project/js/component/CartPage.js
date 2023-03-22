import html from '../core.js';
import Header from './Header.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function CartPage({ shoppingCarts, iphones, samsungs, oppos, googlePixels, totalMoney, vouchers }) {
    let phones = { iphones, samsungs, oppos, googlePixels };

    return html`
        ${Header()}

        <div id="toast"></div>

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
                        ${shoppingCarts.map((product, index) => html`
                            <tr class="product">
                                <td class="image">
                                    <img src=${phones[product.phoneBrand][product.phoneIndex].img} alt="" />
                                    <p>${phones[product.phoneBrand][product.phoneIndex].name}</p>
                                </td>
                                <td class="center">
                                    ${phones[product.phoneBrand][product.phoneIndex].priceTags.actualPrice + '₫'}
                                </td>
                                <td class="center">
                                    <input 
                                        type="number" id="b" name="b" 
                                        min="0" max="10" 
                                        value=${product.amount}
                                        onclick="
                                            dispatch('changeCart', '${product.phoneBrand}', ${product.phoneIndex}, ${index}, this.value);
                                            this.value > ${product.amount} ? showSuccessToast() : showWarningToast();
                                        "
                                    >
                                </td>
                                <td class="center">${product.priceTag + 'đ'}</td>
                                <td>
                                    <i 
                                        class="fas fa-times close"
                                        onclick="
                                            dispatch('deleteCart', ${index});
                                            showWarningToast();
                                        "
                                    >
                                    </i>
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>     

            <div class="sum_price">
                <input 
                    type="text" name="" id="voucher" placeholder="Nhập mã giảm giá"
                    onchange="dispatch('applyVoucher', this.value) ? showSuccessToast() : showErrorToast()"
                >
                <input 
                    type="submit" value="Áp dụng" id="btn_voucher"
                >

                <div class="price">
                    <div class="price1">
                        <h3>Giảm giá:</h3>
                        <h3>Tổng tiền:</h3>
                    </div>

                    <div class="price2">
                        <h3>${totalMoney.discountPriceTag + 'đ'}</h3>
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
