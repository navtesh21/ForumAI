
    const addComment = () => {
        
        const textarea = document.querySelector("textarea");
        if (textarea.value === ""){
            alert("Write Something");
            return
        }
        const ul = document.querySelector(".items");
        const li = document.createElement("li");
        li.textContent = textarea.value;
        ul.appendChild(li);
       lencom();
        textarea.value = "";
    };
    
    const  list = document.querySelectorAll(".items li");
    const len = list.length;
 
    document.querySelector(".lencom").innerHTML= `<i class="fa-regular fa-message"></i> ${len} comments`
    
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", addComment);
    function like() {
        document.querySelector(".fa-heart").classList.toggle("toggle")


    }
   document.querySelector(".fa-heart").addEventListener("click",like)
  function lencom(){
   const  list = document.querySelectorAll(".items li");
   const len = list.length;

   document.querySelector(".lencom").innerHTML= `<i class="fa-regular fa-message"></i> ${len} comments`
  };