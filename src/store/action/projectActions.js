export const createProjects = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;
        firestore.collection("project").add({
            ...project,
            authFirstName:profile.firstName,
            authLastName:profile.lastName,
            authId : authId,
            createDate : new Date().toString()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project});
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERROR", err});
        })
        
    }
};