

var basic = JSON.parse(localStorage.getItem('basic')) || [];
var vip = JSON.parse(localStorage.getItem('vip')) || [];
var basic = [
    {
        id:1,
        name: "Phòng 101 ",
        code: " Basic 1",
        price: "500.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg"
    },
    {
        id:2,
        name: "Phòng 101 ",
        code: "Basic 2",
        price: "500.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat.jpg"
    },
    {
        id:3,
        name: "Phòng 101 ",
        code: "Basic 3",
        price: "600.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-1.jpg"
    },
];
var vip =   [
    {
        id:1,
        name: "Phòng 301 ",
        code: "VIP 1",
        price: "2.500.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-2.jpg"
    },
    {
        id:2,
        name: "Phòng 302 ",
        code: "VIP 2",
        price: "3.000.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-1.jpg"
    },
    {
        id:3,
        name: "Phòng 301 ",
        code: "VIP 3",
        price: "3.500.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-2.jpg"
    },

];

function listProducts() {
    document.getElementById("basic").innerHTML = "";
    document.getElementById("vip").innerHTML = "";
    displayRooms("basic", basic);
    displayRooms("vip", vip);
}

function displayRooms(containerId, rooms) {
    var table = '<table class="table table-bordered">';
    table += '<thead><tr><th>ID</th><th>Name</th><th>Code</th><th>Price</th><th>Image</th><th>Detail</th></tr></thead>';
    table += '<tbody>';

    for (let i = 0; i < rooms.length; i++) {
        table += '<tr>';
        table += '<td>' + rooms[i].id + '</td>';
        table += '<td>' + rooms[i].name + '</td>';
        table += '<td>' + rooms[i].code + '</td>';
        table += '<td>' + rooms[i].price + '</td>';
        table += '<td><img src="' + rooms[i].image + '" style="max-height: 50px; max-width: 50px;"></td>';
        table += '<td><a href="#" class="btn btn-info" onclick="viewDetail(\'' + containerId + '\',' + rooms[i].id + ')">Chi tiết</a></td>';
        table += '<td>';
        table += '<a href="#" class="btn btn-primary"  onclick="order()">Order</a>';
        table += '<button class="btn btn-danger" onclick="deleteRoom(\'' + containerId + '\',' + rooms[i].id + ')">Delete</button>';
        table += '</td>';
        table += '</tr>';
    }

    table += '</tbody></table>';
    document.getElementById(containerId).innerHTML = table;
}

function saveOrUpdate() {
    var code = document.getElementById("code").value;
    var name = document.getElementById("name").value;
    var roomType = document.getElementById("roomtype").value;
    var price = document.getElementById("new").value;
    var image = document.getElementById("imageUpload").value;

    if (!code || !name || !roomType || !price || !image) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    var newRoom = {
        id: getNextId(roomType), // Lấy id mới cho sản phẩm
        name: name,
        code: code,
        price: price,
        image: image
    };

    if (roomType.toLowerCase() === "basic") {
        basic.push(newRoom);
    } else if (roomType.toLowerCase() === "vip") {
        vip.push(newRoom);
    } else {
        alert("Invalid room type. Please enter 'basic' or 'vip'.");
        return;
    }
    // Lưu trữ danh sách sản phẩm vào localStorage
    localStorage.setItem('basic', JSON.stringify(basic));
    localStorage.setItem('vip', JSON.stringify(vip));
    // Reset các trường nhập liệu
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("roomtype").value = "";
    document.getElementById("new").value = "";
    document.getElementById("imageUpload").value = "";
    // Hiển thị danh sách sản phẩm
    listProducts();
}
function getNextId(roomType) {
    var rooms = roomType.toLowerCase() === 'basic' ? basic : vip;
    return rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
}

function viewDetail(containerId, roomId) {
    // Lấy thông tin của sản phẩm từ localStorage
    var rooms = containerId === 'basic' ? basic : vip;
    var room = rooms.find(room => room.id === roomId);

    // Nếu không tìm thấy sản phẩm, không làm gì cả
    if (!room) {
        alert("Không tìm thấy sản phẩm!");
        return;
    }
    // Mở cửa sổ mới và hiển thị thông tin chi tiết của sản phẩm
    var detailContent = `
        <h2>Product Detail</h2>
        <p><strong>ID:</strong> ${room.id}</p>
        <p><strong>Name:</strong> ${room.name}</p>
        <p><strong>Code:</strong> ${room.code}</p>
        <p><strong>Price:</strong> ${room.price}</p>
        <img src="${room.image}" alt="Product Image" style="max-height: 200px; max-width: 200px;">
    `;
    var newWindow = window.open("");
    newWindow.document.write(detailContent);
}
function deleteRoom(containerId, roomId) {
    var confirmation = confirm("Are you sure you want to delete this room?");
    if (confirmation) {
        var rooms = containerId === 'basic' ? basic : vip;
        var index = rooms.findIndex(room => room.id === roomId);
        if (index !== -1) {
            rooms.splice(index, 1);
            // Lưu trữ danh sách sản phẩm sau khi xóa vào localStorage
            localStorage.setItem('basic', JSON.stringify(basic));
            localStorage.setItem('vip', JSON.stringify(vip));
            listProducts();
        }
    }
}
// Kiểm tra nếu dữ liệu gốc chưa được lưu vào local storage thì lưu vào
if (!localStorage.getItem('basic')) {
    localStorage.setItem('basic', JSON.stringify(basic));
}
if (!localStorage.getItem('vip')) {
    localStorage.setItem('vip', JSON.stringify(vip));
}

// Lấy dữ liệu từ local storage khi tải trang
var basicFromLocalStorage = JSON.parse(localStorage.getItem('basic')) || [];
var vipFromLocalStorage = JSON.parse(localStorage.getItem('vip')) || [];

// Sử dụng dữ liệu từ local storage
console.log("Basic from local storage:", basicFromLocalStorage);
console.log("VIP from local storage:", vipFromLocalStorage);
function mergeArrays(defaultArray, localStorageArray) {
    // Tạo một bản sao của mảng mặc định
    var mergedArray = defaultArray.slice();

    // Duyệt qua mảng từ localStorage
    localStorageArray.forEach(function(item) {
        // Kiểm tra xem item đã tồn tại trong mảng mergedArray chưa
        var existingItemIndex = mergedArray.findIndex(function(mergedItem) {
            return mergedItem.id === item.id;
        });

        // Nếu item không tồn tại trong mergedArray, thêm nó vào
        if (existingItemIndex === -1) {
            mergedArray.push(item);
        }
    });

    return mergedArray;
}

// Kết hợp các giá trị từ localStorage và giá trị mặc định mà không ghi đè
var basic = mergeArrays(basic, basicFromLocalStorage);
var vip = mergeArrays(vip, vipFromLocalStorage);

// Cập nhật danh sách sản phẩm khi tải trang
listProducts();
