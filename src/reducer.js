export const initialState = {
    user : null,
    playlists : [],
    playing: false,
    item: null,
    // token: "BQCPaL3meUaNtFKWHXrnPbqc5o2TTWNQhTGg0owujzsqyteUDXzQEnfRAmSKyrsdhYSMDW8Zuvn1h-TQY70XzFA82UvxyxFwZtdfr7M5HbPzvUv1-ssw6gMkrrPpLk56GzHQUnHTQcEOGX4a6fLJPa_xRhlrgHG_z-bA_RAT-YTHucBrcFgc4BBXTJC5jqtzwfn2DbNU7e0iAJNHLviJ",
};

var p = new Set([]);

const reducer = (state, action) => {
    p.add(action);
    // console.log(action);
    console.log(p);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export const paper = p;

export default reducer;