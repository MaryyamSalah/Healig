export const GET_POSTS ='GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE ='GET_POSTS_FAILURE'


export const REGISTER_START ="REGISTER_START";
export const REGISTER_SUCCESS ="REGISTER_SUCCESS";
export const REGISTER_FAIL ="REGISTER_FAIL";

export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS ="LOGIN_SUCCESS";
export const LOGIN_FAIL ="LOGIN_FAIL";

export const LOGOUT_START ="LOGOUT_START";
export const LOGOUT_SUCCESS ="LOGOUT_SUCCESS";
export const LOGOUT_FAIL ="LOGOUT_FAIL";

export const SET_USER ="SET_USER";

export const GOOGLE_SIGN_IN_START ="GOOGLE_SIGN_IN_START";
export const GOOGLE_SIGN_IN_SUCCESS ="GOOGLE_SIGN_IN_START";
export const GOOGLE_SIGN_IN_FAIL ="GOOGLE_SIGN_IN_START";

export const FACEBOOK_SIGN_IN_START ="FACEBOOK_SIGN_IN_START";
export const FACEBOOK_SIGN_IN_SUCCESS ="FACEBOOK_SIGN_IN_START";
export const FACEBOOK_SIGN_IN_FAIL ="FACEBOOK_IN_START";


export const getPosts = () => ({
    type : GET_POSTS,

})

export const getPostsSuccess = (posts) => ({

type : GET_POSTS_SUCCESS,
payload : posts,
})

export const getPostsFailure =() => ({
    type : GET_POSTS_FAILURE,

})

export function fetchPosts (){
    return async (dispatch) => {
        dispatch(getPosts())

        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPostsSuccess(data))
        }
        catch (error){
            dispatch(getPostsFailure())
        }

    }
}