<template>
<div class="form-group">
   <form action="submit" class="login-form">
       <div class="input-group">
       <label for="email">Почта
           <input type="email" name="" id="email"
           v-model="email"
           >
       </label>
       </div>
       <div class="input-group">
        <label for="password">Пароль
           <input type="password" name="" id="password"
           v-model="password"
           >
       </label>
       <p v-if="submitStatus === 'OK'"></p>
       <p v-else>{{ submitStatus }}</p>
       </div>
       <button
       type="submit"
       @click.prevent="signin"
       class="submit-button"
       >Войти</button>
   </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            submitStatus: null
        }
    },
    methods: {
        signin() {
            const user = {
                email: this.email,
                password: this.password
            }
            
                this.$store.dispatch('signin', user)
                .then(()=> {
                console.log('Register')
                this.submitStatus = 'OK'
            }, (error)=> {
                console.log('----------------',error)
                this.submitStatus = error.message.replace(/_/g, " ").toLowerCase()
            })
            
            
            
        }
    },

    computed: {
        errors() {
            return this.$store.getters.error
        }
    }

    
}
</script>

<style scoped>

.form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 50px - 130px);
}

.login-form {
    width: 100%;
}

.input-group label {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: rgb(146, 143, 143);
    font-weight: bold;
    padding-top: 22px;
}



.input-group input {
    font-size: 18px;
    border: #4682b4 solid 2px;
    border-radius: 2px;
    outline: none;
}


.submit-button {
    background: #4682b4;
    color:white;
    border: white 2px solid;
    border-radius: 5px;
    margin-top: 20px;
    padding: 8px 4px;
    font-size: 18px;
} 

@media (min-width: 20rem) {
.login-form {
    width: 320px;
}

}

@media (min-width: 40rem) {
    .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.login-form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px gray;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
    width: 420px;
    align-items: center;

  
}

.input-group {
    align-self: flex-end;
    margin-top: 20px;
}

.input-group label {
    font-size: 22px;
    color: rgb(146, 143, 143);
    font-weight: bold;
    padding-top: 22px;
    display: inline;
    
}

.input-group input {
    font-size: 22px;
    border: #4682b4 solid 2px;
    border-radius: 2px;
    outline: none;
}

.submit-button {
    background: #4682b4;
    color:white;
    border: white 2px solid;
    margin-top: 20px;
    padding: 10px 0;
    font-size: 22px;
    width: 260px;
    border-radius: 10px;
    align-self: flex-end;
    /* margin-left: auto;
    margin-right: auto; */
}


.submit-button:hover,
.submit-button:active {
    color: #4682b4;
    background: white;
    border: #4682b4 2px solid;
    cursor: pointer;
    outline: none;
}





}
</style>



