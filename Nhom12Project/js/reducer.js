import storage, { iphones, samsungs, googlePixels, oppos } from './util/storage.js';

const init = {
    logo: 'https://drive.google.com/uc?export=view&id=1_O4pphVrCS0SsWBpELRjfd8KxpDL87mS',

    sortingType: 'default',

    iphones,

    samsungs,

    googlePixels,

    oppos,

    panelImgs: [
        'https://drive.google.com/uc?export=view&id=1XSeI31Jzcd3nDJp2mB-Lw-7cxnBQoEFt',
        'https://drive.google.com/uc?export=view&id=1yE8h8AOOQwoPYZynDc_qw-DEozcAcI1a',
        'https://drive.google.com/uc?export=view&id=1UEdrvEB_FHv_jfgWNbvAvbFd211yUQ6a',
        'https://drive.google.com/uc?export=view&id=1pj0zQm2eX-XJDmVOt0zeWjxRcmlcA98A',
        'https://drive.google.com/uc?export=view&id=1bVtfptfhmGI1Gf0K2stUtv49kgol8A_2',
        'https://drive.google.com/uc?export=view&id=1xq5bAKJdQdZ_BTnkUx0MNfPCB9GKDf9p',
        'https://drive.google.com/uc?export=view&id=1t-loQXKkBtrJZg6j91AeK8dJgmnWm7Qg',
        'https://drive.google.com/uc?export=view&id=1MWyY33BqlWa3iiqBGViFykpOH_t5gKxq',
    ],

    shoppingCarts: storage.getCarts(), 
    
    totalMoney: storage.getTotalMoney(),
}

const actions = {
    sortingPrice(state, type) {
        state.sortingType = type;
    },

    addCart(state, phoneBrand, index) {
        let MoneyFormat = new Intl.NumberFormat().format;
        let currentProductPrice = state[phoneBrand][index].price;

        state.totalMoney.price += currentProductPrice;
        state.totalMoney.priceTag = MoneyFormat(state.totalMoney.price);
        storage.setTotalMoney(state.totalMoney);

        if (state.shoppingCarts.length) {
            for (let x of state.shoppingCarts) {
                if (x.phoneBrand === phoneBrand && x.index === index) {
                    x.amount += 1;
                    x.price += currentProductPrice;
                    x.priceTag = MoneyFormat(x.price);

                    storage.setCarts(state.shoppingCarts)
                    return;
                }
            }
        } 

        state.shoppingCarts.push({ 
            amount: 1, phoneBrand, index, 
            price: currentProductPrice,
            priceTag: MoneyFormat(currentProductPrice)
        })

        storage.setCarts(state.shoppingCarts)
    }, 
    
    // removeCart(state, phoneBrand, index) {
        
    // }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);

    return state;
}
