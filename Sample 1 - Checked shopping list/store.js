var head = new Vue({
  el: "#header",
  data: {
    message: "Welcome to the Store"
  }
}) 

var item = new Vue({
  el: "#storeItems",
  data: {
    goods: [
      {qty: 10, desc: "Laptops", price: 799.95},
      {qty: 5, desc: "HDMI Cables", price: 10.99},
      {qty: 7, desc: "Monitors", price: 119.99}
    ] 
  }
})