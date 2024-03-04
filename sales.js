var man = [
    {
        id: 1,
        name: "Quần tây",
        code: "TC143NA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH30HqKUAmLM5RYw8W3v-F-EjZrj82ZHT5w&s"
    },
    {
        id: 2,
        name: "Áo sơ mi nam",
        code: "TC1342NA",
        price: "400.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODSsdYZj1Cb2808klLbFznj2e4iJOsgO0FA&s"
    },
    {
        id: 3,
        name: "Áo khoác",
        code: "TC323",
        price: "500.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOzfY3JrMZVGcHDqqsbEZJin7z8_DelyJoA&s"
    },
    {
        id: 4,
        name: "Áo polo",
        code: "TC223",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRy8jgANtMA1bHOwCc2LgzjVNC9ZKk7Q8x4g&s"
    }

]
var women = [
    {
        id: 1,
        name: " áo vest công sở ",
        code: "TC143",
        price: "450.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDW8XVoZMZnEQmycwLFdwTWhyZy0B0FJOPQ&s"
    },
    {
        id: 2,
        name: "Áo sơ mi nữ",
        code: "TC123",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqMKfOZvb5t-eudDwHCYMXINgWhV2Qd6VoA&s"
    },
    {
        id: 3,
        name: "Chân váy",
        code: "TC323",
        price: "590.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dy8E5c7I2Nvjo5jyRs2CVMPxgMp2uuYJxg&s"
    },
    {
        id: 4,
        name: "Áo thun",
        code: "TC223",
        price: "780.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqFZSG5V49wub6lTC_kMHybJQBDSliKkvHQ&s"
    }
]
function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;


    }
    for (let i = 0; i <= women.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="' + women[i].image + '" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">' + women[i].name + '</h5>';
        demo += '<p class="card-text">' + women[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}
