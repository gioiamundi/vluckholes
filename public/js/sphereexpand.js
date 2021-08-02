 AFRAME.registerComponent('sphereexpand', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sphereexpandelements= document.querySelectorAll(".sphereexpand");
      let sky = document.querySelector("#sky");
      

      let sphereloader = () => {
      sky.setAttribute("src", "#islaflotante");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      sphereexpandelements.forEach((sphereexpandelements) => {
      sphereexpandelements.setAttribute("visible", false)})  
      }

      this.el.addEventListener('click', sphereloader);
        
   }});