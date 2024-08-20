var app = new Vue({
    el: '#app',
    data: {
        style: {
            label: ['font-weight-bold', 'mr-2']
        },
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 60,
            sliderStatus: true,
            control: {
                'width': '60px', 
                'text-align': 'center'
            }
        }
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    },filters: {
        currencyFormat: function (value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2)
        }
    },computed: {
        sliderState: function(){
            return this.style.sliderStatus ? 'd-flex' : 'd-none'
        }
    },
    methods: {
        before: function (el) {
            el.className = 'd-none'
        },
        enter: function (el) {
            var delay = el.dataset.index * 100
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animated fadeInRight'
            }, delay)
        },
        leave: function (el) {
            var delay = el.dataset.index * 100
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-items-center animated fadeOutRight'
            }, delay)
        },
        addItem: function(product) {
            this.cart.push(product);
        }
    }
});