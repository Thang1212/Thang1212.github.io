// Store data in local storage

const SHOPPINGCARTS_STORAGE_KEYS = 'SHOPPINGCARTS';
const TOTALMONEY_STORAGE_KEYS = 'TOTALMONEY';

export default {
    getCarts() {
        return JSON.parse(localStorage.getItem(SHOPPINGCARTS_STORAGE_KEYS)) || [];
    },

    setCarts(shoppingCarts) {
        localStorage.setItem(SHOPPINGCARTS_STORAGE_KEYS, JSON.stringify(shoppingCarts));
    },

    getTotalMoney() {
        return JSON.parse(localStorage.getItem(TOTALMONEY_STORAGE_KEYS)) || { price: 0, priceTag: '' };
    },

    setTotalMoney(totalMoney) {
        localStorage.setItem(TOTALMONEY_STORAGE_KEYS, JSON.stringify(totalMoney));
    },
}
        
export const iphones = [
    {
        name: 'Iphone 13 Pro Max',
        price: 31490000,
        priceTags: {
            initPrice: '35.490.000',
            actualPrice: '31.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung lượng': '1 TB',
            'Camera sau': '12 MP',
            'Camera trước': '12 MP',
            Pin: '4323 mAh',
            'Màn hình': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1Kpu3hYiWlt--lAQi_1UEMs0aMudIMfDC'
    }, 

    {
        name: 'Iphone 14 Pro Max',
        price: 29490000,
        priceTags: {
            initPrice: '34.490.000',
            actualPrice: '29.490.000'
        },
        details: {
            Chip: 'Apple A16 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            'Camera sau': '48 MP',
            'Camera truoc': '12 MP',
            Pin: '4323 mAh',
            'Man hinh': '6.7", Super Retina Display 120HZ'
        },
        img: 'https://drive.google.com/uc?export=view&id=1q_8Y8QmumO4Z2dOG-J_2MVQ4bvJ_UFmR'
    }, 

    {
        name: 'Iphone 14 Pro',
        price: 27190000,
        priceTags: {
            initPrice: '30.990.000',
            actualPrice: '27.190.000'
        },
        details: {
            Chip: 'Apple A16 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            'Camera sau': '48 MP',
            'Camera truoc': '12 MP',
            Pin: '3200 mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1B9Krl0sUur7_li3zGNbj-aZnIlS_HcCX'
    }, 

    {
        name: 'Iphone 13 Pro',
        price: 25990000, 
        priceTags: {
            initPrice: '28.990.000',
            actualPrice: '25.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3095mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=18ULKJC63u-SMzxMrliTGuh2XeQqRIayh'
    }, 

    {
        name: 'Iphone 14 Plus',
        price: 24990000,
        priceTags: {
            initPrice: '27.990.000',
            actualPrice: '24.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '4325mAh',
            'Man hinh': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=14i4PwvCGx_X3QJHiOeiwKCyH0jJYU0EW'
    }, 

    {
        name: 'Iphone 14',
        price: 22490000,
        priceTags: {
            initPrice: '24.490.000',
            actualPrice: '22.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3279mAh',
            'Man hinh': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=18Omxh_5HulHDEqUPFYuVTet-7rhZDdRD'
    }, 

    {
        name: 'Iphone 13',
        price: 20490000,
        priceTags: {
            initPrice: '24.490.000',
            actualPrice: '20.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '4 GB',
            'Dung luong': '128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3240mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1qaDC0uCSD0v6XZ3pn6n-6duiXq5Pd_Wf'
    }, 

    {
        name: 'Iphone 13 mini 128 GB',
        price: 17990000,
        priceTags: {
            initPrice: '21.490.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '4 GB',
            'Dung luong': '128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '2438mAh',
            'Man hinh': '5.4", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1GcnZqvBjGRRNzshKUN6nQixAPQ5n_O1O'
    }, 

    {
        name: 'Iphone 12',
        price: 14490000,
        priceTags: {
            initPrice: '16.990.000',
            actualPrice: '14.490.000'
        },
        details: {
            Chip: 'Apple A14 Bionic',
            RAM: '4 GB',
            'Dung luong': '64 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '2815mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1H8JkUn0iJdRRqr62qULKcNCWYXKIXNkz'
    }, 

    {
        name: 'Iphone 11',
        price: 12490000,
        priceTags: {
            initPrice: '14.990.000',
            actualPrice: '12.490.000'
        },
        details: {
            Chip: 'Apple A13 Bionic',
            RAM: '4 GB',
            'Dung luong': '64 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3110mAh',
            'Man hinh': '6.1", Liquid Retina'
        },
        img: 'https://drive.google.com/uc?export=view&id=1rhQymg4UnH7cUqsvAmHaC5KNacv-M9g0'
    }, 
]

export const samsungs = [
    {
        name: 'Samsung Galaxy Z-Fold 4 5G',
        price: 40990000,
        priceTags: {
            initPrice: '52.490.000',
            actualPrice: '40.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '12 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '10 MP',
            Pin: '4400 mAh',
            'Màn hình': '7.6" & 6.2", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1vlxTN8pOKDMhVZd9WZZROE6ot1cIV7mt'
    }, 

    {
        name: 'Samsung Galaxy S23 Ultra 5G',
        price: 31990000,
        priceTags: {
            initPrice: '39.490.000',
            actualPrice: '31.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '6 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '200 MP',
            'Camera trước': '12 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.8", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1C6sUsgxIskAI9K6Oic4ONbQelosoVG_K' 
    }, 

    {
        name: 'Samsung Galaxy S22 Ultra 5G',
        price: 29990000, 
        priceTags: {
            initPrice: '32.490.000',
            actualPrice: '29.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '108 MP',
            'Camera trước': '40 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.8", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1i5vPzl9P8aZRo8n3wF65OXF_VX9SioxP'
    }, 

    {
        name: 'Samsung Galaxy S23+ 5G',
        price: 26990000,
        priceTags: {
            initPrice: '32.990.000',
            actualPrice: '26.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '12 MP',
            Pin: '4700 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=10iaQ7QsHP1QHteAxom5ghQefTgE7E2sU'
    }, 

    {
        name: 'Samsung Galaxy Z-Flip 4 5G',
        price: 23990000,
        priceTags: {
            initPrice: '50.190.000',
            actualPrice: '23.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12 MP',
            'Camera trước': '10 MP',
            Pin: '3700 mAh',
            'Màn hình': '6.7" & 1.9", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=15JqgiMA_9xd0KqgwxjI4mHgr4GBumVRh' 
    }, 

    {
        name: 'Samsung Galaxy S22+ 5G',
        price: 23490000,
        priceTags: {
            initPrice: '28.490.000',
            actualPrice: '23.490.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 1',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '10 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1JpGprqZTPS7rDGjxnFb3p9-0fJo24YMC'
    }, 

    {
        name: 'Samsung A73 5G Awesome Edition',
        price: 12690000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '12.690.000'
        },
        details: {
            Chip: 'Snapdragon 778G 5G',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1FIjnqst_7BvofjIKkOt_8n4pgO4zBQmW'
    }, 

    {
        name: 'Samsung Galaxy S20 FE',
        price: 12490000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '12.490.000'
        },
        details: {
            Chip: 'Snapdragon 865',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '12 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.5", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1zkNT2vamsJtzoOsE9-In4_qRF2ghPZ3p'
    }, 

    {
        name: 'Samsung Galaxy M53',
        price: 10490000, 
        priceTags: {
            initPrice: '15.990.000',
            actualPrice: '10.490.000'
        },
        details: {
            Chip: 'Mediatek Dimensity 900 5G',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1us2HusFwFdRh2Q5owV-JTBdoWhAnWzwo' 
    }, 

    {
        name: 'Samsung Galaxy A23',
        price: 5990000, 
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '4 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1JwwAGsRGtD_QrldmUWpXaM7FMI2110zf' 
    }, 
]

export const googlePixels = [
    {
        name: 'Google Pixel 7 Pro',
        price: 22990000,
        priceTags: {
            initPrice: '28.190.000',
            actualPrice: '22.990.000'
        },
        details: {
            Chip: 'Google Tensor (5nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12,2 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=13DfeHqVZXfS05h2Bd5BiXaf8iRYf4DS1'
    }, 

    {
        name: 'Google Pixel 6',
        price: 19990000,
        priceTags: {
            initPrice: '22.990.000',
            actualPrice: '19.990.000'
        },
        details: {
            Chip: 'Google Tensor',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '12 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.4", Amoled'
        },
        img: 'https://drive.google.com/uc?export=view&id=1aYa87O64erRWrBR-C3WwzxZEwnbXLpjS'
    }, 

    {
        name: 'Google Pixel 6a',
        price: 17990000,
        priceTags: {
            initPrice: '22.490.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'Google Tensor (5nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12,2 MP',
            'Camera trước': '12 MP',
            Pin: '4410 mAh',
            'Màn hình': '6.1", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=1G8TTBVdbP-Y9RJRWU7bTzsbMKiyIlW4w'
    }, 

    {
        name: 'Google Pixel 5a',
        price: 5990000, 
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Qualcomm SM7250 Snapdragon 765G 5G (7 nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '8 MP',
            Pin: '4230 mAh',
            'Màn hình': '6.6", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=1EGGAJWRWkWOLv1Gss2c0Nbs7RhRWwAuw'
    }, 
]

export const oppos = [
    {
        name: 'Oppo Reno 8 Series',
        price: 17990000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'MediaTek Dimensity 8100 Max 8 nhân',
            RAM: '12 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1mjv3O-5NDJeI12v6oGUaBWytYol5yLiA'
    }, 

    {
        name: 'Oppo Reno 8T 5G',
        price: 10990000,
        priceTags: {
            initPrice: '19.490.000',
            actualPrice: '10.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '4800 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1jKZ3DHQqaD0DIXgT2CLfJLNTEz2JNXIs'
    }, 

    {
        name: 'Oppo Reno 6 Series',
        price: 7290000,
        priceTags: {
            initPrice: '8.990.000',
            actualPrice: '7.290.000'
        },
        details: {
            Chip: 'Mediatek Dimensity 900 5G',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '4300 mAh',
            'Màn hình': '6.43", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1Pl4_TPBtyeViCiy4hNSNeyqcAMMXPYq6'
    }, 

    {
        name: 'Oppo A77s',
        price: 6290000,
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '6.290.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1PhpCME6G90_-0EneVSh0WAzdsV9iNorn'
    }, 

    {
        name: 'Oppo A76',
        price: 5990000,
        priceTags: {
            initPrice: '5.990.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '13 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1khi8Tyew2MPdywyAb_IhyYM-sbxnzYOa'
    }, 

    {
        name: 'Oppo A95',
        price: 5490000,
        priceTags: {
            initPrice: '8.990.000',
            actualPrice: '5.490.000'
        },
        details: {
            Chip: 'Snapdragon 662',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '48 MP',
            'Camera trước': '16 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.43", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1aUKjetFrpeg219ipX9kEDx1gEedsgG6d'
    }, 

    {
        name: 'Oppo A17',
        price: 3490000, 
        priceTags: {
            initPrice: '3.990.000',
            actualPrice: '3.490.000'
        },
        details: {
            Chip: 'MediaTek Helio G35',
            RAM: '4 GB',
            'Dung lượng': '64 GB',
            'Camera sau': '50 MP',
            'Camera trước': '5 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1iSk_gVZWN9Lsy1dlh2Dj7qdYa-C_Rvoi'
    }, 

    {
        name: 'Oppo A16',
        price: 2790000,
        priceTags: {
            initPrice: '3.990.000',
            actualPrice: '2.790.000'
        },
        details: {
            Chip: 'MediaTek Helio G35',
            RAM: '3 GB',
            'Dung lượng': '32 GB',
            'Camera sau': '13 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.52", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1x-jH7_61TqC9_mqeUbRO3lrOatp4TsOL'
    }, 
]