// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let products = [
    {
        id: 9,
        title:
          "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
          rate: 2.2,
          count: 140,
        },
      },
      {
        id: 10,
        title:
          "Laptop Acer Aspire 7",
        price: 29.95,
        description:
          "Sức mạnh và hiệu năng trong một thiết kế gọn nhẹ. Laptop này kết hợp khả năng vượt trội với một thiết kế thời trang, tạo nên sự lựa chọn hoàn hảo cho công việc và giải trí. Với bộ vi xử lý mạnh mẽ, đồ họa rời và dung lượng lưu trữ đáng kể, Acer Aspire 7 mang đến trải nghiệm tính toán tuyệt vời. Cho dù bạn đang xử lý các nhiệm vụ đòi hỏi cao hay thưởng thức nội dung đa phương tiện, laptop này được xây dựng để vượt xa mong đợi của bạn.",
        category: "electronics",
        image: "https://laptop365.vn/pic/product/39874_61165_laptop_acer_gaming_aspire_7_a715_42g_r_637863942544551329.jpg",
        rating: {
          rate: 2.9,
          count: 340,
        },
      },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.put('/api/products', (req, res) => {
  products = req.body;
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
