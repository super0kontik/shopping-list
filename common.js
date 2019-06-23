let list =(localStorage.getItem('list')===null?[]:JSON.parse(localStorage.getItem('list')));

function apply(){
    localStorage.setItem('list',JSON.stringify(list))
}

const app = new Vue({
    el: '#app',
    data: {
        list:list,
        style:''
    },
    methods:{
        add(){
            const inp = document.getElementById('inp');
            if(inp.value===''){
               app.style ='err';
                return false
            }else{
                app.style ='';
                list.push({done:false,text:inp.value});
			inp.value='';
                apply();
            }
        },
        mark(i){
            list[i].done= !list[i].done;
            apply();
        },
        del(i){
            list.splice(i, 1);
            apply();
        },
        clear(){
            list=[];
		app.list=[];
            apply();
        }
    }

});