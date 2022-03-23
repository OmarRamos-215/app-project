const URL= "https://www.themealdb.com/api/json/v1/1/"

export async function getMealsApi(){
    try{
        const request= await fetch(`${URL}search.php?s=Chocolate`)
        const response= await request.json()
        return response.meals

    }catch(err){
        throw Error(err)
    }
}

export async function getMealByIdApi(id){
    try{
        const request= await fetch(`${URL}lookup.php?i=${id}`)
        const response= await request.json()
        return response.meals

    }catch(err){
        throw Error(err)
    }
}
