<template>
    <div 
    class="backdrop"
    v-bind:class = "[
    openMenu.isActive ? openMenu.nameClassOpen : openMenu.nameClassClose
    ]"

    @click="openMenu.isActive = !openMenu.isActive"
    >
   
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    data() {
        return {

            openMenu: {
                nameClassOpen: 'backdrop-open',
                nameClassClose: 'backdrop',
                isActive: false
            }
    
            
        }
    },

    methods: {
        
    },

    created() {
        bus.$on('toggleOpen', (value)=> {
            
            this.openMenu.isActive = value
            console.log(value)
        })
    }
    
}
</script>

<style scoped>
.backdrop {
    display: none;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.596);
}

.backdrop-open {
    display: block;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.596);
}
</style>


