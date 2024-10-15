document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (ví dụ giả lập)
    if (username === 'admin' && password === '123456') {
        window.location.href = '../index.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.');
    }
});
