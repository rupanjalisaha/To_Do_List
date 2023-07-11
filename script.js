document.querySelector("#colorChange").onclick=function(){
            const Color=document.getElementById("colorChanger").value;
            document.body.style.backgroundColor=Color;
        }
        document.querySelector("#push").onclick =function(){
            if(document.querySelector("#newtask input").value.length==0){
                alert("Please enter a task name!");
            }
            else{
                document.querySelector("#print").innerHTML+=`
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector("#newtask input").value}
                    </span>
                    <button class="delete">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
            `;
            var delete_list = document.querySelectorAll(".delete")
            for(var i=0;i<delete_list.length;i++){
                delete_list[i].onclick=function(){
                    this.parentNode.remove();
                }
            }
        }
    }
    
