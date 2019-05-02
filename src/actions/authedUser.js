export const USER_LOG_IN = "USER_LOG_IN";
export const USER_LOG_OUT = "USER_LOG_OUT";

export function login(user_id) {
    return {
        type: USER_LOG_IN,
        user_id
    }
}

export function logout(user_id) {
    return {
        type: USER_LOG_OUT
    }
}
