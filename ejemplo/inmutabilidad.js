 const addTodolist = (list , item , quantity) => {
     list.push(
         {
             item,
             quantity
         }
     )

     return list
 };

 //=========== las  funciones  deben evitar  mutar  datos  en lo posible

 const addTodolist1 = (list, item, quantity) =>{
    
    const newList = JSON.parse(JSON.stringify(list));
    newList.push(         
        {
            item,
            quantity
        });

    return lsit
};