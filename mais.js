   // JavaScript para alternar entre as opções
   const tabButtons = document.querySelectorAll(".tab-button");
   const tabContents = document.querySelectorAll(".tab-content");

   tabButtons.forEach((button) => {
       button.addEventListener("click", () => {
           tabContents.forEach((content) => {
               content.style.display = "none";
           });
           const contentId = button.id.replace("btn", "");
           document.getElementById(contentId + "Content").style.display = "block";
       });
   });

   // Exiba o conteúdo da primeira opção por padrão
   document.getElementById("precisionContent").style.display = "block";