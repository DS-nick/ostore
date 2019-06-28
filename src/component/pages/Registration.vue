<template>
<div class="form-group">
   <form action="submit" class="registration-form">
       <div class="input-group">
       <label for="name">Имя
           <input type="text" name="" id="name"
           v-model="formdata.username"
           >
       </label>
       </div>
       <div class="input-group"
       :class="{inputError:$v.formdata.email.$error}"
       >
       <label for="email">Почта
           <input type="email" name="" id="email"
           v-model="formdata.email"
           
           :class="{error:$v.formdata.email.$error}"
           v-model.trim="$v.formdata.email.$model"
           >
       </label>
       <div class="errorText" v-if="!$v.formdata.email.required && $v.formdata.email.$error">Поле должно быть заполнено</div>
       <div class="errorText" v-if="!$v.formdata.email.email && $v.formdata.email.$error">Некорректно введен email</div>
       </div>
       <div class="input-group">
        <label for="password">Пароль
           <input type="password" name="" id="password"
           v-model="formdata.password"
           >
       </label>
       <div class="errorText" v-if="!$v.formdata.email.required && $v.formdata.password.$error">Пароль должен быть не менее 6 символов</div>
       </div>
       <div class="input-group">
        <label for="repeat_password">Повторите пароль
           <input type="password" name="" id="repeat_password"
           v-model="formdata.confirmPassword"
           >
       </label>
       <div class="errorText" v-if="$v.formdata.repeatPassword.$error">Введите верный пароль</div>
       <p
       v-if="submitStatus === 'OK'"
       ></p>
       <p
       v-else
       >{{ submitStatus }}</p>
       </div>
       <button type="submit"
       class="submit-button"
       v-on:click.prevent='onSubmit'
       :disabled="submitStatus==='PENDING'"
       >Зарегистрироваться</button>
   </form>
   
<pre>{{$v.formdata.email}}</pre>
</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            formdata: {
               username: '',
                email: '',
                password: ''
                
            },
            submitStatus: null,
            
        }
    },
    validations: {
        formdata: {
            email: {required, email},
            password: {
            required, 
            minLength: minLength(6)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        }
    },
    computed: {
       
        
    },

    methods: {
        onSubmit() {
            console.log(this.$store)
            const user = {
                email: this.formdata.email,
                password: this.formdata.password,
                userName: this.formdata.username
            }
            console.log(user)
           this.$store.dispatch('signup', user)
           .then(()=> {
               console.log('Succes!')
               this.submitStatus = 'OK'
           }, error=> {
               console.log(error)
               this.submitStatus = error.message
           })

          

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

.registration-form {
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
.registration-form {
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

.registration-form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px gray;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    width: 500px;

  
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



.error {
    border: solid 2px red !important;
}

.errorText {
    color: red;
    font-size: 12px;
    display: flex;
    margin-left: 10px;
    /* position: absolute;
    right: 10px; */
}

</style>
