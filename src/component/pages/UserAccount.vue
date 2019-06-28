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
        
        ><i class="fas fa-arrow-circle-down"
        @click="toggleButton"></i></div>
        <div 
        v-if="state"
        >
        <div class="wrap">
        <span>Название бренда</span>
        <input type="text">
        </div>
        
        <div class="wrap">
        <span>Название товара</span>
        <input type="text">
        </div>
        <div class="wrap">
        <span>Стоимость товара</span>
        <input type="text">
        </div>
        <input type="file">
        <button
        @click="but">Добавить товар</button>
        </div>
        
       </div>
</template>

<script>
export default {
    data() {
        return {
            state: false
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
        },
        but() {
            console.log('work')
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
</style>

