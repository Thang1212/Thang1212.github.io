function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    
    if (main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when needed
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        };
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2);

        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__tittle">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>      <!--body-->

            <div class="toast__close">
                <i class="fa fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast(message = 'Bạn đã thêm sản phẩm vào giỏ hàng!') {
    toast({
        title: 'Success',
        message,
        type: 'success',
        duration: 5000
    });
}

function showWarningToast(message = 'Bạn đã xoá sản phẩm khỏi giỏ hàng!') {
    toast({
        title: 'Warning',
        message,
        type: 'warning',
        duration: 5000
    });
}

function showErrorToast(message = 'Co loi xay ra, vui long lien he quan tri vien') {
    toast({
        title: 'Error',
        message,
        type: 'error',
        duration: 5000
    });
}
