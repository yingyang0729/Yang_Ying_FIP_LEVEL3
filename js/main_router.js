

const design1 = { template: '<div class="teamText"><h2 class="teamTitle">Autumn Skin Care Products</h2><h3 class="teamTitle">Graphic Markup<h3><p class="teamTitle">This is a series of package for skin care products. It is autumn cosmetics and all designs create a warm feeling to attracts eyesights from consumers. </P><img src="images/cream.jpg"><br><img src="images/eyecream.jpg"><br><img src="images/bodycream.jpg"><br><img  src="images/soap.jpg"></div>' }
const design2 = { template: '<div class="teamText"><h2 class="teamTitle">Cosmetics</h2><h3 class="teamTitle">3D Markup<h3><p class="teamTitle">This is a set of cosmetics, using 3D pictures to create a strong sense of reality, can be adapted to a variety of commercial advertising purposes.</P><img src="images/face.jpg"><br><img src="images/lip.jpg"><br><img src="images/nail.jpg"><br><img src="images/lash.jpg"></div>' }
const design3 = { template: '<div class="teamText"><h2 class="teamTitle">Beer</h2><h3 class="teamTitle">3D Images<h3><p class="teamTitle">This is a set of beer bottle.  I created the 3D images with C4D.  C4D creates very authentic feeling of products, which is a trend in modern design.</P><img src="images/beer_dark.jpg"><br><img src="images/beer_liter.jpg"><br><img src="images/beer_orange.jpg"><br><img src="images/beer_original.jpg"><br><img src="images/beer_straw.jpg"><br></div>' }
const design4 = { template: '<div class="teamText"><h2 class="teamTitle">Snow Global</h2><h3 class="teamTitle">3D Images<h3><p class="teamTitle">The Snow Global is a good project to practice the 3D skills. The trees, cabin and the snowman leads you into a romantic world.</P><img src="images/snow0.jpg"><br><img src="images/snow1.jpg"><br><img src="images/snow2.jpg"><br><img src="images/snow3.jpg"><br><img src="images/snow4.jpg"><br></div>' }
const design5 = { template: '<div class="teamText"><h2 class="teamTitle">Room</h2><h3 class="teamTitle">3D Images<h3><p class="teamTitle">The room is a good project to learn the 3D skills, which is also base for the  interior design.</P><img src="images/room0.jpg"><br><img src="images/room1.jpg"><br><img src="images/room2.jpg"><br><img src="images/room3.jpg"><br><img src="images/room4.jpg"><br></div>' }
const design6 = { template: '<div class="teamText"><h2 class="teamTitle">Beer</h2><h3 class="teamTitle">3D Images<h3><p class="teamTitle">The hotel room creates the high technological and simple feel, which looks like a modern hotel room. There are s a lot of advanced machine in the room.</P><img src="images/hotel1.jpg"><br><img src="images/hotel2.jpg"><br><img src="images/hotel3.jpg"><br><img src="images/hotel5.jpg"><br></div>' }


const routes = [
  { path: '/', 
    name: "design1", 
    component: design1 },

  { path: '/design2', 
    name: "design2",
    component: design2, },

  { path: '/design3', 
    name: "design3",
    component: design3, },

  { path: '/design4', 
    name: "design4",
    component: design4, },

  { path: '/design5', 
    name: "design5",
    component: design5, },

    { path: '/design6', 
    name: "design6",
    component: design6, }


]


const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes, 
})


const app = Vue.createApp({})

app.use(router)

app.mount('#app')
