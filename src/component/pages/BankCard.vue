<template>
    <div class="modal" :style="modal"
    @click="closeMonthItem"
    
    >
        <div class="modal-container">
            <div class="close-button"
            @click="closeModal"
            >
                <span></span>
                
            </div>
            
    <div class="card-container">
        
            <div class="bank-card">
                <div class="card-back">
                    <div class="card-back-line">

                    </div>
                    <input type="text" id="cvv"
                    v-model="ccvCode"
                    >
                </div>
                <div class="card-front"
                :style="cardBackground"
                >
                <div id="atf"
                :style="atfDisplay"
                ></div>
                    <img :src="cardNameUrl" alt="" class="card-image"
                    v-if="isCardImage"
                    >
                    <img :src="cardTypeUrl" alt="" class="card-logo"
                     v-if="isCardImage"
                    >
                    <input type="text" id="card-number"
                    placeholder="____-____-____-____"
                    @keydown="cardNumberCheck"
                    @input="checkCardName"
                    @blur="field = 0"
                    v-model="cardNumber" 
                    
                    >
                    
                    
                    <div class="card-month__container">
                        <div>
                        <input type="text" id="card-month"
                        v-model="monthDateChecked"
                    @focus="inputFocus"
                    >
                    <div class="input-button" 
                    ><i class="fas fa-chevron-circle-down"
                    id="month-button"
                    @click="openMonthItems"></i></div>
                    </div>
                    <ul class="month-items"
                    v-if="monthDisplay"
                    >
                        <li class="month-item"
                        v-for="(monthData, index) in monthDates"
                        :key="index"
                        ><div
                        @click="checkMonth"
                        >{{monthData}}</div></li>
                        
                    </ul>
                    </div>
                    
                    
                    <div class="card-year__container">
                        <div>
                    <input type="text" id="card-year"
                    v-model="yearDateChecked"
                    >
                    <div class="input-button" 
                    ><i class="fas fa-chevron-circle-down"
                    id="year-button"
                    @click="openYearItems"></i></div>
                    </div>
                    <ul class="year-items"
                    v-if="yearDisplay"
                    >
                        <li class="year-item"
                        v-for="(yearDate, index) in yearDates"
                        :key="index"
                        ><div
                        @click="checkYear"
                        >{{yearDate}}</div></li>
                        
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           </div>
    
</template>

<script>

import Inputmask from 'inputmask';
export default {

    data() {
        return {
            selectStyle: {
                display: 'none'
            },

            monthDisplay: false,
            monthDates: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            monthDateChecked: '',
            yearDisplay: false,
            yearDates: ['15', '16', '17', '18', '19', '20', '21'],
            yearDateChecked: '',
            cardNumber: '',
            cardNumberChecked: '',
            ccvCode: '',
            cardTypeUrl: '',
            cardNameUrl: '',
            cardBackground: {
                background: ''
            },
            isCardImage: true,
            atfDisplay: {
                display: ''
            },
            field: 0
             
        }
    },

    props: [
        'modal'
    ],

    methods: {
        inputFocus() {
            
        },
        openMonthItems(e) {

            // this.monthDisplay = true

            //    console.log(this.monthDisplay)
            //    console.log(e.target.id)
            
            if(e.target.id === 'month-button') {
               this.monthDisplay = true

               console.log(this.monthDisplay)
            }

           
        },
        closeMonthItem(e) {

            if(e.target.id !== 'month-button' && e.target.id !== 'year-button') {
                
                this.monthDisplay = false
                this.yearDisplay = false
                
                console.log('------', this.monthDisplay)
            }else if(e.target.id !== 'month-button') {
                this.monthDisplay = false
            }else if(e.target.id !== 'year-button') {
                this.yearDisplay = false
            }
            
            // this.monthDisplay = false
           
            
            
        },

        openYearItems(e) {

            // this.monthDisplay = true

            //    console.log(this.monthDisplay)
            //    console.log(e.target.id)
            
            if(e.target.id === 'year-button') {
               this.yearDisplay = true

               console.log(this.yearDisplay)
            }

            

           
        },

        
        
        byProduct() {

            this.modal.display = 'flex'
        },
        closeModal() {
            this.modal.display = ''
        },
        checkMonth(e) {
            console.dir(e.target.innerHTML)

           this.monthDateChecked = e.target.innerHTML
        },
        checkYear(e) {
            this.yearDateChecked = e.target.innerHTML
        },
        cardNumberCheck(e) {

            

            

           let char =   this.getChar(e)
           console.log(char)
           console.log(this.cardNumber)

           

           if(char < '0' || char > '9') {
               e.preventDefault();
               
           }
          
        },
        getChar(event) {
      
      if(event.which > 58) {
          return String.fromCharCode(event.which)
      }

      return null

      

      
    },
    checkCardName(e) {

        
       
    

    if(this.cardNumber.match(/\d/g) !==null) {
        
        this.cardNumber = this.cardNumber.match(/\d/g).join('')
       
    }

    

    
    

    
       
        if(this.cardNumber.length > 5) {
            this.isCardImage = true
            // console.log(this.cardNumber.substring(1, 6))
            console.log('больше 5')
            switch(this.cardNumber[0]) {
                case '4':
                    console.log('тут')
                    this.cardTypeUrl = '../src/assets/Visa_Inc._logo.svg.png'
                    break;
                case '5':
                    console.log('yrтут')
                   this.cardTypeUrl = '../src/assets/MasterCard_Logo.svg.png'
                   break;
            }

            switch(this.cardNumber.substring(0, 6)) {

                case '400303':
                    this.cardNameUrl = '../src/assets/Qazkom_Logo.svg'
                    this.cardBackground.background = '#6A5ACD'
                    break;
                case '516949':
                    this.cardNameUrl = '../src/assets/kaspi-bank.svg'
                    this.cardBackground.background = '#734a12' 
                    break;
                case '512095':

                        this.cardNameUrl = '../src/assets/ATFBank.png'
                        this.cardBackground.background = '#B0C4DE'
                        this.atfDisplay.display = 'block'
                        break;
            }

                 
            }else if(this.cardNumber.length < 6) {
                console.log('card number меньше 5')
                this.isCardImage = false
                this.cardBackground.background = '#cfcccc'
                this.atfDisplay.display = 'none' 
            }else if(this.cardNumber.length >= 16) {
                e.preventDefault()
            }
           
    }
    },

    computed: {
        
    },
    filters: {
        cardNumberFormat() {
            this.cardNumber.replace(/\D/g, '')
        }
    },

    mounted() {
        var im = new Inputmask("9999-9999-9999-9999");
    im.mask(document.getElementById('card-number'));
    }
    
    
}
</script>

<style scoped>

.modal {
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background:  rgba(8, 8, 8, 0.616);
    position: fixed;
    left: 0;
    top: 0;
    /* z-index: 1; */
}

.modal-container {
    width: 80%;
    height: 80%;
    background: white;
    position: relative;
    

    
}



.close-button {
    position: absolute;
    right: -25px;
    top: -25px;

    width: 50px;
    height: 50px;
    background: rgba(219, 216, 216, 0.966);
    border-radius: 50%;
}

.close-button:hover {
cursor: pointer;
}

.close-button:hover span::before,
.close-button:hover span::after
 {
 background: gray;
 
}

.close-button span::before {
    content: ' ';
    display: block;
    height: 3px;
    width: 40px;
    background: #4682B4;
    position: absolute;
    top: 50%;
    left: 5px;
    transform-origin: center 0 0;
    transform: rotate(45deg);
}

.close-button span::after {
    content: ' ';
    display: block;
    height: 3px;
    width: 40px;
    background: #4682B4;
    position: absolute;
    top: 50%;
    left: 5px;
    transform-origin: center center center;
    transform: rotate(-45deg);
}

.card-backdrop {
    width: 100%;
    height: 100vh;
}
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.bank-card {
    width: 645px;
    height: 405px;
   
    position: relative;
    align-self: center;
    z-index: 2;
}

.card-back, .card-front {
    width: 430px;
    height: 270px;
    border: 1px solid gray;
    border-radius: 15px;
    position: absolute;
}

.card-back {
    left: 215px;
    top: 135px;
    background: rgb(202, 200, 200);
}

.card-back-line {
    width: 100%;
    height: 70px;
    position: absolute;
    top: 50px;
    background: gray;
}

.card-front {
    background: rgb(207, 204, 204);
}

#atf {
    display: none;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    background: rgb(75, 98, 228);
}
#cvv {
    position: absolute;
    right: 40px;
    bottom: 85px;
    width: 100px;
    padding: 5px;
    font-size: 30px;
}

.card-image {
    height: 50px;
    position: absolute;
    top: 25px;
    left: 20px;
}

.card-logo {
height: 30px;
position: absolute;
bottom: 25px;
right: 20px;
}

#card-number {
    position: absolute;
    width: 80%;
    font-size: 30px;
    padding: 5px;
    background: rgb(231, 228, 228);
    border: none;
    bottom: 100px;
    margin: 0 10%;
}

#card-number-invisible {
    opacity: 0;
    position: absolute;
    width: 80%;
    font-size: 30px;
    padding: 5px;
    background: rgb(231, 228, 228);
    border: none;
    bottom: 100px;
    margin: 0 10%;
    z-index: 100;
}


.card-month__container {
    position: absolute;
    left: 10%;
    bottom: 30px;
    width: 50px;
}

.card-month__container input {
    width: 55px;
    font-size: 25px;
    padding: 5px;
}

.card-month__container> div {
    position: relative;
}

.input-button {
    position: absolute;
    left: 25px;
    top: 10px;
    margin: 5px;
}

.input-button i {
    margin-left: 5px;
    
}

.input-button:hover {
    cursor: pointer;
}

.card-month__container ul {
    display: block;
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 100px;
    background: white;
    overflow: auto;
}

.card-month__container ul::-webkit-scrollbar,
.card-year__container ul::-webkit-scrollbar
{
    width: 12px;
}

.card-month__container ul::-webkit-scrollbar-track,
.card-year__container ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}

.card-month__container ul::-webkit-scrollbar-thumb,
.card-year__container ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}



.month-item div {
    background: white;
    text-align: center;
    border: 1px solid gray;
}

.month-item div:hover {
    cursor: pointer;
}

.card-year__container {
    position: absolute;
    left: 30%;
    bottom: 30px;
    width: 50px;
}

.card-year__container input {
    width: 55px;
    font-size: 25px;
    padding: 5px;
}

.year-items {
    display: block;
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 100px;
    background: white;
    overflow: auto;
}

.card-year__container> div {
    position: relative;
}

.year-item div {
    background: white;
    text-align: center;
    border: 1px solid gray;
}

 #year-button {
    margin-left: 5px;
}

.year-item div:hover {
    cursor: pointer;
}


</style>


