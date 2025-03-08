document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu từ localStorage
    const hotelData = JSON.parse(localStorage.getItem("hotelData"));
    const carData = JSON.parse(localStorage.getItem("carData"));
    const planeData = JSON.parse(localStorage.getItem('planeData'));

    // Hiển thị thông tin đặt phòng khách sạn
    if (hotelData) {
        document.getElementById("selected-hotel").innerText = hotelData.hotel;
        document.getElementById("checkin-date").innerText = hotelData.checkin;
        document.getElementById("checkout-date").innerText = hotelData.checkout;
        document.getElementById("adults-count").innerText = hotelData.adults;
        document.getElementById("children-count").innerText = hotelData.children;
        document.getElementById("rooms-count").innerText = hotelData.rooms;
    }
    else {
        alert("Thông tin khách sạn không hợp lệ.");
    }

    // Hiển thị thông tin thuê xe
    if (carData) {
        document.getElementById("service-info").innerText = carData.service;
        document.getElementById("location-info").innerText = carData.carlocation;
        document.getElementById("car-style-info").innerText = carData.carStyle;
        document.getElementById("start-date-info").innerText = carData.startDate;
        document.getElementById("start-time-info").innerText = carData.startTime;
        document.getElementById("end-date-info").innerText = carData.endDate;
        document.getElementById("end-time-info").innerText = carData.endTime;
    }
    else {
        alert("Thông tin thuê xe không hợp lệ.");
    }

    // Hiển thị thông tin đặt vé máy bay
    if (planeData) {
        document.getElementById("departure-info").innerText = planeData.departure;
        document.getElementById("destination-info").innerText = planeData.destination;
        document.getElementById("departure-date-info").innerText = planeData.departuredate;
        document.getElementById("destination-date-info").innerText = planeData.destinationdate || "Không";
        document.getElementById("seat-class-info").innerText = planeData.seatclass;
    }
    else {
        alert("Thông tin chuyến bay không hợp lệ.");
    }


    // Xử lý form thanh toán nếu cần
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thanh toán thành công!");
    });
});