// Lắng nghe sự kiện submit từ form
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Lấy thông tin từ các trường trong form
    const service = document.querySelector('input[name="service"]:checked').value;
    const carlocation = document.getElementById("car-location").value;
    const carStyle = document.getElementById("car-style").value;
    const startDate = document.getElementById("start-date").value;
    const startTime = document.getElementById("start-time").value;
    const endDate = document.getElementById("end-date").value;
    const endTime = document.getElementById("end-time").value;

    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
    if (!service || !carlocation || !carStyle || !startDate || !endDate || !startTime || !endTime) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    if (startDate > endDate) {
        alert("Ngày thuê không được trước ngày trả!");
        return;
    }

    // Lưu trữ thông tin vào localStorage với tên "carData"
    localStorage.setItem("carData", JSON.stringify({
        service,
        carlocation,
        carStyle,
        startDate,
        startTime,
        endDate,
        endTime
    }));

    // Chuyển hướng đến trang Checkout
    window.location.href = "../HTML/Checkout.html";
});
