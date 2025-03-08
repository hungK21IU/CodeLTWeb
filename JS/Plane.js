// Lưu dữ liệu trong form vào localStorage
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const departuredate = document.getElementById("departuredate").value;
    const destinationdate = document.getElementById("destinationdate").value;
    const seatclass = document.getElementById("seatclass").value;

    if (!departure || !destination || !departuredate || !seatclass) {
        alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
        return;
    }

    if(departure == destination) {
        alert("Điểm đến không được trùng điểm đi!");
        return;
    }
    // Ngày trả phòng phải sau ngày nhận phòng nếu tồn tại ngày về
    if (destinationdate) {
        if (departuredate > destinationdate) {
            alert("Ngày khởi hành phải trước ngày trở về!");
            return;
        }
    }

    localStorage.setItem("planeData", JSON.stringify({
        departure, destination, departuredate, destinationdate, seatclass
    }));    

    // Redirect to Checkout page
    window.location.href = "../HTML/Checkout.html";
});
