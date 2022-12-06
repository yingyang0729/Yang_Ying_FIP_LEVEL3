export default {
    name: 'TheLightcontainerComponent',
    
    props: ['hero'],

    template:
    `
    
    <section ref="lbWrapper" class="lightcontainer"  >
        
           
        <!-- hero image on the left, text on the right -->
        <!-- here image is a background image -->
            
            <div>
                <img :src='"images/"+ hero.detail' loading="lazy" alt="" class="teamImagesD">              
            </div>
            <div class="lightbox-wrapper">
                <div>
                    <h2 class="lb_topic">
                        <pre>{{ hero.topic }}</pre>
                    </h2>

                    <h3 class="lb_heading">
                        <pre>{{ hero.Description }}</pre>
                    </h3>
                        
                    <p class="lb_text">
                        <pre>{{ hero.text }}</pre>
                    </p>
                    <h3 class="lb_heading">
                        <pre>{{ hero.timename }}</pre>
                    </h3>
                    <p class="lb_text">
                        <pre>{{ hero.time }}</pre>
                    </p>
                    <h3 class="lb_heading">
                        <pre>{{ hero.toolname }}</pre>
                    </h3>
                    <p class="lb_text">
                        <pre>{{ hero.tool }}</pre>
                    </p>
                    <h3 class="lb_heading">
                        <pre>{{ hero.type }}</pre>
                    </h3>
                    <p class="lb_text">
                        <pre>{{ hero.price }}</pre>
                    </p>
                    <p class="lb_text">
                        <pre>{{ hero.infor }}</pre>
                    </p>
                </div>
            </div>
            
            <div>
                <img @click="closeLB" src="images/closeIcon.png" class="lightcontainer_close">
            </div>    

            
    </section>
    
    `,

    methods: {
        closeLB() {
            debugger;
            this.$emit('closelb');
        }
    }
}
