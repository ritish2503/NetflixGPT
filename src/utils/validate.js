export const checkValidData = (email, password) => {
    //Regex for email validation
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/.test(email);

    //Regex for password validation
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,60}$/.test(password);

    if(!isEmailValid) return 'Email is not valid!';

    if(!isPasswordValid) return 'Password is not valid!';

    return null;
}