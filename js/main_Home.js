(() => {
 
    const { createApp } = Vue

    createApp({
        created(){
            console.log('vue instance is created');
            //fetch the remote date here and pass it to the data object

            fetch('./data1.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                //push the data into the vue instance
                // the "this" keyword inside of the vue instance always refers to the instance itself

                    this.remoteData = data;
            })

            .catch(error => console.error(error));
        },

        data() {
          return {
            welcome: 'My Skill, My Passion, My Strengh',
            topic: 'My name is Ying. I list all my skills as below. You can click the belwo button if you want to make an order.',
            copyright: 'All prices and services on this website and in our reservation system are based on conditions at the time of publishing and are subject to change.<br> Please call to confirm services, availability and pricing.<br><br> ©2022 Ying Yang  Digital Design Inc. All Rights Reserved. Privacy Policy',
            //this is a array//
            
            member: ['Adobe Illustrator, Adobe Photoshop, Adobe Indesign, Adobe XD','Adobe Premiere, Adobe After Effect','Cinema 4D','CSS, Java Script, SASS, VUE JS, AJAX', 'PHP'],
            remoteData: {}

          }
        },

        methods: {
            logicbutton() {
                console.log('clicked!');
            }
        }

      }).mount('#app');



})();
