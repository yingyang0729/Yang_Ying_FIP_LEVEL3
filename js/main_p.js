// components always get imported here
import MetalPackage from './components/TheMetalPackageLink.js';
import Lightcontainer from './components/TheLightcontainerComponent.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // fetch calls always go here --> retrieve any data you need
            fetch('./metal_data.json')
                .then(res => res.json()) // convert the json object to plain JS object
                .then(data => this.heroData = data) // store teh data in the Vue instance
                .catch(error => console.error(error)); // report any error that might occur
        },

        data() {
            return {
                heroData: {},
                lightcontainerData: {},
                showLightContainer: false,
                
                copyright: ' All prices and services on this website and in our reservation system are based on conditions at the time of publishing and are subject to change. Please call to confirm services, availability and pricing.©2022 Ying Yang Digital Design Inc. All Rights Reserved. Privacy Policy',
                
                remoteData: {}
            }
        },

        methods: {
            loadLightContainer(item) {
                //debugger;
                this.lightcontainerData = item;
                this.showLightContainer = true;
            }
        },

        components: {
            metalpackagelink: MetalPackage,
            lightcontainer: Lightcontainer
        }
    }).mount('#app')
})()
