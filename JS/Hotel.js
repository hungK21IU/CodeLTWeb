// Storing selected form data in localStorage
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const hotel = document.getElementById("hotel").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const rooms = document.getElementById("rooms").value;

    if (!hotel || !checkin || !checkout || !adults || !rooms) {
        alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
        return;
    }

    // Ngày trả phòng phải sau ngày nhận phòng
    if (checkin > checkout) {
        alert("Ngày trả phòng phải sau ngày nhận phòng!");
        return;
    }

    if (adults < 1) {
        alert("Nhập số người");
        return;
    }

    if (rooms < 1) {
        alert("Nhập số lượng phòng");
        return;
    }

    // Store the data in localStorage
    localStorage.setItem("hotelData", JSON.stringify({
        hotel, checkin, checkout, adults, children, rooms
    }));

    // Redirect to Checkout page
    window.location.href = "../HTML/Checkout.html";
});
