<template>
    <div class="user-information">

        <table>
            <tr>
                <td>Имя</td>
                <td>{{user.userName}}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
        <hr>
        <h2 class="add-product">Добавление товара</h2>
        <div class="add-product__button"
        
        >
      
        <i class="fas fa-arrow-circle-down"
        @click="toggleButton"
        :style="rotateObj"
        ></i>
       
        </div>
        <div 
        v-if="state"
        >
        <div class="wrap">
        <span>Название бренда</span>
        <input type="text"
        v-model = "formData.brand"
        >
        </div>
        
        <div class="wrap">
        <span>Название товара</span>
        <input type="text"
        v-model = "formData.name"
        >
        </div>
        <div class="wrap">
        <span>Стоимость товара</span>
        <input type="text"
        v-model = "formData.price"
        >
        </div>
        <input type="file" accept="image/*"
        @change="loadImage"
        >
        <button
        @click="addProduct"
        >Добавить товар</button>
        </div>
        <div style="width: 200px; heigth: 200px;">
            <img :src="this.imageSrc" alt="">
        </div>
       </div>
</template>

<script>
export default {
    data() {
        return {

            formData: {
                brand: '',
                name: '',
                price: '',
                imageSrc: 'https://huckberry.imgix.net/spree/products/405266/original/0Qx8AqQeTk_taylor-stitch_ss_jack_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=300&h=300'

            },
            state: false,
            imageSrc: '',
            rotateObj: {
                transform: ''
            }
            
        }
    },
    props: [
        'id'
    ],
    computed: {
        user() {
            if(this.$store.state.users.userData) {
                return this.$store.getters.getUser
            }
        }
    },

    methods: {
        toggleButton() {
            console.log(this.state)
            this.state = !this.state
            if(this.state) {
                this.rotateObj.transform = 'rotate(180deg)'
                
            }else {
                this.rotateObj.transform = ''
            }
            
        },
        loadImage(e) {
            
            const file = e.target.files[0]
            const reader= new FileReader()

            reader.onload = f => {
                this.imageSrc = reader.result
                
            }

            reader.readAsDataURL(file)

            
        },
        addProduct() {
            this.$store.dispatch('addProduct', this.formData)
        }
    },
    created() {

        console.log('Сработал UserAccount')
        // if(this.$store.state.users) {
        //     let tok = localStorage.getItem("token")
        //     var tokenId = this.$store.state.users.token
        //     console.log(this.$store.state.users)
        //     console.log(tokenId.refresh)
        //     this.$store.dispatch('getUserInfo', tok)
        // }
        

        

    }
}

</script>

<style scoped>

.user-information {
    min-height: calc(100vh - 50px - 130px);
}
.user-name {
    font-size: 22px;
    color: blue;
}

table {
    border-collapse: collapse;
    border: 1px solid black;
    margin-top: 30px;
}

td, tr {
    border: 1px solid black;
    padding: 10px;
    font-size: 22px;
}

.add-product {
    text-align: center;
}
.add-product__button {
    text-align: center;

}
.add-product__button i:hover {
    cursor: pointer;
    color: black;
}
.add-product__button i {
    font-size: 30px;
    color: gray;
}
.wrap {
    font-size: 22px;
}

.wrap input {
    font-size: 22px;
    margin-top: 30px;
    outline: none;
}

.animate {
animation-name: rotateArrow;
animation-duration: 2s;
transform: rotate(180deg)
}

.animate-out {
    animation-name: rotateArrowOut;
    animation-duration: 2s;
   
}

@keyframes rotateArrow {

    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(180deg)
    }
    
}

@keyframes rotateArrowOut {

    0% {
        transform: rotate(180deg)
    }

    100% {
        transform: rotate(0deg)
    }
    
}
</style>

