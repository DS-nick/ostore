<template>
<div>
    <div class="image"></div>
    <main class="product-overview">
        <ul class="product-overview__items">
            <li class="product-overview__item" 
            v-for="(product, index) in products"
           
            :key="index">
                <router-link :to="'/product/' + product.id" class="main-card"
                
                >
                    <div class="main-card__img-container">
                        <img :src="product.imgSrc" alt="">
                    </div>
                    <div class="main-card__brand-name">{{product.brand}}</div>
                    <div class="main-card__product-name">{{product.name}}</div>
                    <div class="main-card__price">{{product.price}}</div>
                </router-link>
            </li>
            <!--  -->
        </ul>
    </main>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters.products
        }
    },
    created() {
        
    }
}
</script>

<style lang="" scoped>



@media (min-width: 40rem) {
    .image {
  background: url(https://huckberry.imgix.net/store/brands/000/002/300/headers/original/Header1905.jpg?ixlib=rails-2.1.4);
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: border-box;
  background-clip: border-box;
  background-position: 10% 50%;
  position: relative;
  
  
}
}
    
    .product-overview {
        margin-top: 0;
        
    }

    @media (min-width: 40rem) {
        .product-overview {
        margin-top: 48px;
        
    }
    }

    .product-overview__items {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
    }

   

    .product-overview__item {
        padding: 10px;
        display: block;
        /* width: 100%; */
        margin: auto;
        margin-top: 20px;
        /* border: gray solid 3px; */
        
    }

     @media (min-width: 721px) {
        .product-overview__item {
        display: inline-block;
        margin: 16px 52px;
    }
    }

    .product-overview__item:hover,
    .product-overview__item:active {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .main-card {
       
        margin: 32px 0;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
    }

    @media (min-width: 40rem) {
       .main-card {
        
       
        margin: 32px 0;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
    } 
    } 

   

    .main-card__img-container {
        margin: auto;
        width: 200px;
        height: 200px;
    }

     @media (min-width: 40rem) {
       .main-card__img-container {
        margin: auto;
        width: 300px;
        height: 300px;
    } 
    }

    .main-card__img-container img {
        width: 100%;
    }

    .main-card__brand-name {
        color: rgb(156, 152, 152);
        font-size: 12px;
        margin-top: 8px;
    }

    .main-card__product-name {
        color: black;
        font-weight: bold;
        margin-top: 8px;
    }

    .main-card__price {
        color:#4682B4;
        font-weight: bold;
        margin-top: 8px;
    }
</style>

