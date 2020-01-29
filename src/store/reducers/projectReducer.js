const initstate = {
    projects : [
        {id:1,title:"This is the title 1",content:"This is the content 1",author:"Md. Maruf Ahmed"},
        {id:2,title:"This is the title 2",content:"This is the content 2",author:"Md. Maruf Ahmed"},
        {id:3,title:"This is the title 3",content:"This is the content 3",author:"Md. Maruf Ahmed"}
    ]
}
const projectReducer = (state = initstate,action) => {
    switch (action.type){
        case "CREATE_PROJECT":
            console.log("Created project",action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("Create project error",action.err);
            return state;
        default:
            return state;
        
    }
}
export default projectReducer;