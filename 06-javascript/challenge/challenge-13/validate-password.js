function validatePassword(password) {

    let errors = [];
    let suggestions = [];
    let score = 0;

    const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

    if (password.length < 8) {
        errors.push("Too short");
        suggestions.push("Use at least 8 characters");
    } else {
        score += 20;
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("No uppercase letter");
        suggestions.push("Add an uppercase letter");
    } else {
        score += 20;
    }

    if (!/[a-z]/.test(password)) {
        errors.push("No lowercase letter");
        suggestions.push("Add a lowercase letter");
    } else {
        score += 20;
    }

    if (!/[0-9]/.test(password)) {
        errors.push("No number");
        suggestions.push("Add a number");
    } else {
        score += 15;
    }

    if (!/[!@#$%^&*()_+\-=]/.test(password)) {
        errors.push("No special character");
        suggestions.push("Add a special character");
    } else {
        score += 15;
    }

    if (commonPasswords.includes(password.toLowerCase())) {
        errors.push("Common password");
        suggestions.push("Avoid common passwords");
        score = 0;
    } else {
        score += 10;
    }

    if (score > 100) {
        score = 100;
    }

    return {
        isValid: errors.length === 0,
        score: score,
        errors: errors,
        suggestions: suggestions
    };
}
