function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("bmi-result");
    let advice = document.getElementById("fitness-advice");

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        result.innerHTML = "Please enter valid values.";
        result.style.color = "red";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);
    let category = "";
    let adviceText = "";

    if (bmi < 18.5) {
        category = "Underweight";
        adviceText = "Consider eating more protein and healthy fats.";
    } else if (bmi < 24.9) {
        category = "Normal weight";
        adviceText = "Great job! Maintain a balanced diet and regular exercise.";
    } else if (bmi < 29.9) {
        category = "Overweight";
        adviceText = "Try incorporating cardio and strength training into your routine.";
    } else {
        category = "Obese";
        adviceText = "Consult a fitness expert for a tailored weight-loss plan.";
    }

    result.innerHTML = `Your BMI: <strong>${bmi.toFixed(2)}</strong> - <span>${category}</span>`;
    advice.innerHTML = `<strong>Advice:</strong> ${adviceText}`;
}
function generateFitnessPlan() {
    let bmi = document.getElementById("bmi-value").value;
    let result = document.getElementById("plan-result");

    if (bmi === "" || bmi <= 0) {
        result.innerHTML = "<p style='color:red;'>⚠️ Please enter a valid BMI.</p>";
        result.style.display = "block";
        return;
    }

    bmi = parseFloat(bmi);
    let plan = "";

    if (bmi < 18.5) {
        plan = `
            <h3>🏋️‍♂️ Underweight Plan</h3>
            <ul>
                <li>Strength training 4x a week</li>
                <li>🍗 High-protein diet (chicken, eggs, nuts)</li>
                <li>🥑 Healthy fats (avocado, olive oil)</li>
                <li>💧 Stay hydrated and eat frequently</li>
            </ul>
        `;
    } else if (bmi < 24.9) {
        plan = `
            <h3>✅ Healthy Plan</h3>
            <ul>
                <li>🏋️‍♂️ Balanced workout (strength + cardio)</li>
                <li>🥦 Maintain a nutrient-rich diet</li>
                <li>💦 Stay hydrated & get 7-8 hours of sleep</li>
            </ul>
        `;
    } else if (bmi < 29.9) {
        plan = `
            <h3>🔥 Overweight Plan</h3>
            <ul>
                <li>🏃‍♂️ Cardio 5x a week (running, cycling)</li>
                <li>🍏 Low-carb diet (vegetables, lean protein)</li>
                <li>🛑 Reduce sugar & processed food</li>
                <li>💧 Drink at least 3 liters of water daily</li>
            </ul>
        `;
    } else {
        plan = `
            <h3>⚠️ Obese Plan</h3>
            <ul>
                <li>🏋️‍♂️ Strength & HIIT training</li>
                <li>🥗 High-fiber, low-calorie diet</li>
                <li>🍎 Consult a nutritionist for a customized diet</li>
                <li>🚶‍♂️ Walk at least 10,000 steps daily</li>
            </ul>
        `;
    }

    result.innerHTML = plan;
    result.style.display = "block";
}
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
