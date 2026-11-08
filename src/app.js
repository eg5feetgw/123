const toolbar=document.querySelector('.toolbar');
if(toolbar){
 toolbar.hidden=false;
 const input=document.querySelector('#search'),cards=[...document.querySelectorAll('.card')],buttons=[...document.querySelectorAll('[data-filter]')];let category='全部';
 const update=()=>{const query=input.value.trim().toLocaleLowerCase();let count=0;for(const card of cards){const show=(category==='全部'||card.dataset.category===category)&&card.dataset.search.toLocaleLowerCase().includes(query);card.hidden=!show;if(show)count++;}document.querySelector('#result-count').textContent=`共 ${count} 篇故事`;document.querySelector('#empty').hidden=count!==0;for(const b of buttons)b.setAttribute('aria-pressed',String(b.dataset.filter===category));};
 input.addEventListener('input',update);for(const b of buttons)b.addEventListener('click',()=>{category=b.dataset.filter;update();});document.querySelector('#reset').addEventListener('click',()=>{category='全部';input.value='';update();input.focus();});
}
