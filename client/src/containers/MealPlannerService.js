const baseURL = "http://localhost:5000/api/planner/"

const MealPlannerService = {
    create (recipe){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    delete (id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        }) 
    },

    update (id) {
        return fetch(baseURL + id, {
            method: 'PUT'
        }) 
    }
}
export default MealPlannerService;