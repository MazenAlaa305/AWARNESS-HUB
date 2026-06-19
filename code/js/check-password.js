document.getElementById("button").addEventListener("click", function () {
    var password = document.getElementById("enterpass").value;
    var strengthElement = document.getElementById("strengthLevel");

    strengthElement.className = "";

    if (password.length === 0) {
        strengthElement.textContent = "No password entered";
        return;
    }

    if (password.length < 8) {
        strengthElement.textContent = "VERY WEAK";
        strengthElement.classList.add("very weak");
        return;
    }

    var strength = checkPasswordStrength(password);
    strengthElement.textContent = strength.toUpperCase();
    strengthElement.classList.add(strength.toLowerCase());
});

function checkPasswordStrength(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    const score = [hasUpperCase, hasLowerCase, hasNumbers, hasSymbols].filter(Boolean).length;

    if (score === 1) return "Weak";
    if (score === 2) return "Medium";
    if (score >= 3) return "Strong";
    return "Weak";
}
