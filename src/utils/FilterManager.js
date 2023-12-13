export const FilterManager = {

    saveFilter(item){

        let filterItems = this.getFilter();

        if(!filterItems){
            localStorage.setItem("filterItems", JSON.stringify([item]));
            
    
        }else{
            const checkItem = filterItems.find(f => (f.tag === item.tag));

            if(checkItem){

                const updatedfilterItems = filterItems.map(f => {
                    if((f.tag === item.tag)){
                       
                        return item;
                        
                    }else{
                        return f;
                    }
                })

                localStorage.setItem("filterItems", JSON.stringify(updatedfilterItems));




            }else{

                const newFilterItems = [item, ...filterItems];

                localStorage.setItem("filterItems", JSON.stringify(newFilterItems));


            }



        }
        // localStorage.setItem("filterItems", JSON.stringify(filterItems));
    },

    getFilter(){
        const filterItems = JSON.parse(localStorage.getItem("filterItems"));

        return filterItems;
    },

    updateFilter(filterItems){

        if(filterItems.length === 0){
            //remove
            localStorage.removeItem("filterItems");
        }else{
            localStorage.setItem("filterItems", JSON.stringify(filterItems));

        }

    },

    removeFilters(){       
        localStorage.removeItem("filterItems");         
        
    }


}