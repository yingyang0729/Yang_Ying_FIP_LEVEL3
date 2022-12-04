(() => {
 
    const { createApp } = Vue

    createApp({
        created(){
            console.log('vue instance is created');
            //fetch the remote date here and pass it to the data object

            fetch('./data.json')
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
            topic: 'I like many kinds of software and coding language. Based on my previous marketing working experience, I have systematical studied computer programming and design. I think I will become a professional generalist in the near future.',
            text: 'I list all my skills as above. You can click the below button if you are interested.',
            //this is a array//
            copyright: ' All prices and services on this website and in our reservation system are based on conditions at the time of publishing and are subject to change. Please call to confirm services, availability and pricing.©2022 Ying Yang Digital Design Inc. All Rights Reserved. Privacy Policy',
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
