 function validatePassword(password){
    let errors = [];
    let suggestions = [];
    let score = 100;

    const commonPasswords = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein"
    ];

    if(password.length<8){
        errors.push("Too short (minimum 8 characters)");
        suggestions.push("use atleast 8 characters");
        score -= 20;
    }

    if(! /[A-Z]/.test(password)){
        errors.push("No uppercase letter");
        suggestions.push("Add atleast one uppercase letter");
        score -= 15;
    }

    if(! /[a-z]/.test(password)){
        errors.push("No lowercase letter");
        suggestions.push("Add atleast one lowercase letter");
        score -= 15;
    }
    if(! /[0-9]/.test(password)){
        errors.push("No number");
        suggestions.push("Add atleast one number");
        score -= 15;
    }
    if(! /[!@#$%^&*()_+-=]/.test(password)){
        errors.push("No special character");
        suggestions.push("Add atleast special character");
        score -= 15;

    }
    if(commonPasswords.includes(password.toLowerCase())){
        errors.push("Common passwords");
        suggestions.push("Avoid Common Passwords");
        score -= 30;
    }
    if(score<0){
        score=0;
    }
    return {
        isValid : errors.length==0 && score>=70,
        score:score,
        suggestions:suggestions,
        errors:errors
    };

}
console.log(validatePassword("qwerty"));
console.log(validatePassword("MyPassword@123"));