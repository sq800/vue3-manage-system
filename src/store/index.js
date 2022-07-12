import { defineStore } from 'pinia'

export const useStore = defineStore("MyStore", {
    state: () => {
        return {
            isCollapse:false,
            menuList:[],

        }
    },

    getters:{
        
    },

    actions:{
        
    }
})