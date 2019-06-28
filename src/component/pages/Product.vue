<template>
    <div>
    <div class="product-container">
        <div>
       <div class="product-image">
           <img :src="product.imgSrc" alt="">
       </div>
       <div class="product-description">
           <p class="product-description__brand">{{product.brand}}</p>
           <p class="product-description__name">{{ product.name }}</p>
           <p class="product-description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil consectetur? Sequi eum facilis blanditiis accusantium, quasi ea pariatur amet.</p>
           <div class="buy-product"
           @click="byProduct"
           >Купить</div>
       </div>
       </div>
    </div>
    
            <compBankCard
            :modal="modal"
            />
        
     </div>
</template>

<script>

import BankCard from './BankCard'
export default {
    data() {
        return {
           modal: {
                display: ''
            }
        }
    },
    props: [
       'id'
    ],
    computed: {
        product() {
             const id = +this.id
             return this.$store.getters.productById(id)
        }
       

    }, 
    methods: {
        byProduct() {
            console.log(this.modal)

            this.modal.display = 'flex'
        },
        closeModal() {
            this.modal.display = ''
        }
    },
    components: {
        compBankCard: BankCard
    }
   
    
}

</script>

<style scoped>
.product-container {
    width: 100%;
    min-height: calc(100vh - 50px - 130px);
    
    
}

.product-image {
    /* display: inline-block; */
    width: 200px;
    height: 200px;
    text-align: center;
    margin: auto;
}

@media (min-width: 20rem) {
    .product-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .product-container> div {
        display: inline-block;
        
    }
    .product-image {
    
    width: 300px;
    height: 300px;
}
}

@media (min-width: 40rem) {
    .product-container {
    width: 80%;
    margin: 0 auto;
    vertical-align: middle;
    
}
    .product-image {
    display: inline-block;
    width: 300px;
    height: 300px;
}
}

.product-image img {
    width: 100%;
    height: 100%;

}

.product-description {
    width: 100%;
    padding: 20px;
    margin-top: 40px;
    margin-left: 10px;
    
    
}



@media (min-width: 40rem) {
    .product-description {
    width: calc(100% - 320px);
    vertical-align: top;
    margin-top: 40px;
    display: inline-block;
    
}
}

.product-description__brand {
    color: gray;
}
.product-description__name {
    font-size: 22px;
    font-weight: bold;
}

.buy-product {
    background: #4682B4;
    width: 100px;
    text-align: center;
    margin: auto;
    height: 40px;
    font-size: 16px;
    /* vertical-align: middle; */
    border-radius: 5px;
    line-height: 34px;
    color: rgb(207, 207, 207);
    padding: 3px;
}

.buy-product:hover,
.buy-product:active {
color: #4682B4;
border: #4682B4 solid 2px;
cursor: pointer;
background: white
}

@media (min-width: 20rem) {
   .buy-product {
    font-size: 22px;
    width: 90px;
    
} 
}




    

</style>

