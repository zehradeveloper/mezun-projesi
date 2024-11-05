document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Şifre doğrulama
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Şifreler eşleşmiyor!'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Başarılı',
        text: 'Kayıt işlemi başarılı!'
    });

    // Formu temizle
    document.getElementById('registerForm').reset();
});