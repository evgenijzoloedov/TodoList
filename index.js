const btn=document.querySelector('.btn')
const inputtext=document.querySelector('.inputtext')
const tasks__todo=document.querySelector('.tasks__todo')
const tasks__done=document.querySelector('.tasks__done')
const number__todo=document.querySelector('.number_todo')
const number__done=document.querySelector('.number_done')



    btn.addEventListener('click',e=>{
        // number__todo.textContent='mother'
        
        const text=inputtext.value
        
        const task=document.createElement('div')
        task.classList.add('tasks')
        task.innerHTML=`<div class="cheakboxtitle">
        <input class="cheakbox" type="checkbox" name="" id="" >
        <span class="title">${text}</span>
        </div>
        <button class="remove">remove</button>`
        tasks__todo.appendChild(task)
        number__todo.textContent=tasks__todo.childNodes.length-1
        inputtext.value=''
    })



tasks__todo.addEventListener('click',e=>{
    tasks__todo.childNodes.forEach(task=>{
        task.childNodes.forEach(cheakboxtitle=>{
            if (cheakboxtitle.className==='remove'){
                
                cheakboxtitle.addEventListener('click',remove=>{
                    console.log('remove');
                    task.remove()
                    number__todo.textContent=tasks__todo.childNodes.length-1
                })
            }
            if (cheakboxtitle.className==='cheakboxtitle'){
                cheakboxtitle.childNodes.forEach(cheakbox=>{
                    if (cheakbox.className==='cheakbox'){
                        cheakbox.addEventListener('click', ()=>{
                            if (cheakbox.checked){
                                number__todo.textContent=tasks__todo.childNodes.length-1
                                task.remove()
                                tasks__done.appendChild(task)
                                number__done.textContent=tasks__done.childNodes.length -3
                            }
                        })
                    }
                })
            }
        })
    })
})
tasks__done.addEventListener('click',e=>{
    tasks__done.childNodes.forEach(task=>{
        task.childNodes.forEach(cheakboxtitle=>{
            if (cheakboxtitle.className==='remove'){
                
                cheakboxtitle.addEventListener('click',remove=>{
                    console.log('remove');
                    task.remove()
                    number__done.textContent=tasks__done.childNodes.length-3
                })
            }
            if (cheakboxtitle.className==='cheakboxtitle'){
                cheakboxtitle.childNodes.forEach(cheakbox=>{
                    if (cheakbox.className==='cheakbox'){
                        cheakbox.addEventListener('click', ()=>{
                            if (!cheakbox.checked){
                                number__done.textContent=tasks__done.childNodes.length -3
                                task.remove()
                                tasks__todo.appendChild(task)
                                number__todo.textContent=tasks__todo.childNodes.length -1
                            }
                        })
                    }
                })
            }
        })
    })
})




































tasks__todo.childNodes.forEach(el=>{
    el.childNodes.forEach(e=>{
        if (e.className==='remove'){
            e.addEventListener('click',()=>{
                el.remove()
                number__todo.textContent=tasks__todo.childNodes.length - 1                
            })
        }
        e.childNodes.forEach(elem=>{ 
            elem.addEventListener('click',()=>{
                if (elem.checked){
                    el.remove()
                    tasks__done.append(el)
                    number__todo.textContent=tasks__todo.childNodes.length - 1
                    number__done.textContent=tasks__done.childNodes.length -3
                }
            })
        })
    })
})
tasks__done.childNodes.forEach(el=>{
    el.childNodes.forEach(e=>{
        console.log('in tasksDone', e);

        if (e.className==='remove'){
            
            e.addEventListener('click',()=>{
                el.remove()
                           
            })
        }
        
    })
})