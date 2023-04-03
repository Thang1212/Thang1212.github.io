const vouchers = ['NHOM12P', 'THEROCK']

function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) => {
            console.log('curr value: ', curr);

            return acc.concat(curr, strings.shift())
    }, [first]).filter(x => x && x !== true || x === 0).join('');
}

let page = html`
    <div class="sum_price">
        ${vouchers.map(voucher => `
            <p>Name: ${voucher}</p>
        `)}
    </div>
`
console.log('value: ', page);
