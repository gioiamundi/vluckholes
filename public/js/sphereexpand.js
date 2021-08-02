 AFRAME.registerComponent('sphereexpand', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");
      let modelisla = document.querySelector("#islaflotante");

      let sphereloader = () => {
      sky.setAttribute("src", "#beach");
      modelisla.setAttribute("src", "#islaflotante")
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      }

      this.el.addEventListener('click', sphereloader);
        
   }});
  
  

