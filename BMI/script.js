
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculate");
const genderButtons = document.querySelectorAll(".gender");

const person = document.getElementById("person");
const bodyShape = document.getElementById("bodyShape");

const ruler = document.getElementById("ruler");
const heightGuide = document.getElementById("heightGuide");
const heightLabel = document.getElementById("heightLabel");

const result = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiStatus = document.getElementById("bmiStatus");
const scaleMarker = document.getElementById("scaleMarker");
const description = document.getElementById("description");

const displayHeight = document.getElementById("displayHeight");
const displayWeight = document.getElementById("displayWeight");
const displayType = document.getElementById("displayType");

const emptyState = document.getElementById("emptyState");
const errorMessage = document.getElementById("error");

const insights = document.getElementById("insights");
const idealWeight = document.getElementById("idealWeight");
const weightDifference = document.getElementById("weightDifference");
const weightMessage = document.getElementById("weightMessage");

const foodAdvice = document.getElementById("foodAdvice");
const exerciseAdvice = document.getElementById("exerciseAdvice");
const healthAdvice = document.getElementById("healthAdvice");

let selectedGender = "male";

genderButtons.forEach(button => {

    button.addEventListener("click", () => {

        genderButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedGender = button.dataset.gender;

    });

});

function createRuler() {

    ruler.innerHTML = "";

    for (let cm = 0; cm <= 220; cm += 10) {

        const tick = document.createElement("div");

        tick.classList.add("ruler-tick");

        tick.style.bottom = `${(cm / 220) * 100}%`;

        if (cm % 50 === 0 || cm === 220) {

            tick.classList.add("major");

            const label = document.createElement("span");

            label.textContent = cm;

            tick.appendChild(label);

        }

        ruler.appendChild(tick);
    }
}

createRuler();

function getBMICategory(bmi) {

    if (bmi < 18.5) {

        return {
            name: "Underweight",
            short: "Underweight",
            color: "#5aaaff",
            description:
                "Your BMI is below the standard adult reference range."
        };

    } else if (bmi < 25) {

        return {
            name: "Normal Weight",
            short: "Normal",
            color: "#54f5d0",
            description:
                "Your BMI is within the standard adult reference range."
        };

    } else if (bmi < 30) {

        return {
            name: "Overweight",
            short: "Overweight",
            color: "#ffd166",
            description:
                "Your BMI is above the standard adult reference range."
        };

    } else {

        return {
            name: "Obesity",
            short: "Obesity",
            color: "#ff6685",
            description:
                "Your BMI is in the obesity category. BMI alone cannot determine your overall health."
        };

    }
}

function createBody(bmi, gender) {

    const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    };

    const mass = clamp(
        1 + (bmi - 22) * 0.027,
        0.72,
        1.55
    );

    const female = gender === "female";

    const shoulder = (female ? 29 : 35) * mass;
    const waist = (female ? 24 : 29) * mass;
    const hip = (female ? 38 : 32) * mass;

    const armWidth = 11 * mass;
    const legWidth = (female ? 20 : 22) * mass;

    const leftShoulder = 100 - shoulder;
    const rightShoulder = 100 + shoulder;

    const leftWaist = 100 - waist;
    const rightWaist = 100 + waist;

    const leftHip = 100 - hip;
    const rightHip = 100 + hip;

    const head = `
        <ellipse cx="100" cy="29"
                 rx="${female ? 21 : 23}"
                 ry="27" />

        <rect x="92" y="52"
              width="16" height="20"
              rx="4" />
    `;

    const torso = `
        <path d="
            M ${leftShoulder} 72
            Q 100 65 ${rightShoulder} 72
            Q ${rightShoulder + 3} 99
              ${rightWaist} 135
            Q ${rightWaist + 2} 151
              ${rightHip} 185
            L ${rightHip} 210
            L ${leftHip} 210
            L ${leftHip} 185
            Q ${leftWaist - 2} 151
              ${leftWaist} 135
            Q ${leftShoulder - 3} 99
              ${leftShoulder} 72
            Z
        " />
    `;

    const leftArm = `
        <path d="
            M ${leftShoulder + 3} 75
            Q ${leftShoulder - 15} 72
              ${leftShoulder - 19} 97
            L ${leftShoulder - 29} 210
            Q ${leftShoulder - 30} 224
              ${leftShoulder - 20} 225
            Q ${leftShoulder - 12} 225
              ${leftShoulder - 11} 211
            L ${leftShoulder + armWidth} 96
            Z
        " />
    `;

    const rightArm = `
        <path d="
            M ${rightShoulder - 3} 75
            Q ${rightShoulder + 15} 72
              ${rightShoulder + 19} 97
            L ${rightShoulder + 29} 210
            Q ${rightShoulder + 30} 224
              ${rightShoulder + 20} 225
            Q ${rightShoulder + 12} 225
              ${rightShoulder + 11} 211
            L ${rightShoulder - armWidth} 96
            Z
        " />
    `;

    const leftLeg = `
        <path d="
            M ${leftHip + 2} 199
            L 100 199
            L 96 275
            L 94 374
            L 94 391
            L ${100 - legWidth} 391
            L ${100 - legWidth - 2} 378
            L ${leftHip + 2} 275
            Z
        " />
    `;

    const rightLeg = `
        <path d="
            M 100 199
            L ${rightHip - 2} 199
            L ${rightHip - 2} 275
            L ${100 + legWidth + 2} 378
            L ${100 + legWidth} 391
            L 106 391
            L 104 374
            L 100 275
            Z
        " />
    `;

    bodyShape.innerHTML = `
        ${leftLeg}
        ${rightLeg}
        ${leftArm}
        ${rightArm}
        ${torso}
        ${head}
    `;

    bodyShape.style.transformOrigin = "center center";

    bodyShape.animate(
        [
            { opacity: 0.4, transform: "scaleX(0.85)" },
            { opacity: 1, transform: "scaleX(1)" }
        ],
        {
            duration: 650,
            easing: "ease-out"
        }
    );
}

function updateBodyInsights(height, weight, bmi) {

    const heightMeters = height / 100;

    const minWeight = 18.5 * heightMeters * heightMeters;
    const maxWeight = 25 * heightMeters * heightMeters;

    idealWeight.textContent =
        `${minWeight.toFixed(1)} – ${maxWeight.toFixed(1)} kg`;

    let differenceText;
    let message;
    let food;
    let exercise;
    let health;

    if (bmi < 18.5) {

        const difference = minWeight - weight;

        differenceText = `${difference.toFixed(1)} kg below`;

        message = "Your current weight is below the adult BMI reference range.";

        food = "Choose balanced, nutrient-rich meals with sufficient protein, healthy fats, and complex carbohydrates.";

        exercise = "Include enjoyable physical activity and suitable strength exercises to support muscle development.";

        health = "If your low weight is unexpected or you have concerns about your nutrition, consider speaking with a healthcare professional.";

    } else if (bmi < 25) {

        differenceText = "Within range";

        message = "Your weight falls within the standard adult BMI reference range.";

        food = "Maintain a balanced diet with vegetables, fruits, whole grains, and a variety of protein sources.";

        exercise = "Stay active throughout the week. Combine aerobic activity with regular muscle-strengthening exercises.";

        health = "Keep a consistent sleep routine and consider other health indicators alongside your BMI.";

    } else if (bmi < 30) {

        const difference = weight - maxWeight;

        differenceText = `${difference.toFixed(1)} kg above`;

        message = "Your current weight is above the adult BMI reference range.";

        food = "Focus on balanced meals, adequate fiber, and regular eating habits rather than restrictive diets.";

        exercise = "Build a sustainable activity routine with walking, cycling, swimming, or other activities you enjoy.";

        health = "BMI does not distinguish between muscle and body fat. Waist measurements and other health indicators can provide additional context.";

    } else {

        const difference = weight - maxWeight;

        differenceText = `${difference.toFixed(1)} kg above`;

        message = "Your current weight is above the adult BMI reference range.";

        food = "Prioritize balanced, nutrient-dense meals. A registered dietitian can help create an individualized eating plan.";

        exercise = "Begin with manageable physical activities that suit your abilities and gradually increase your activity level.";

        health = "Consider discussing your overall health with a healthcare professional for an individualized assessment.";

    }

    weightDifference.textContent = differenceText;
    weightMessage.textContent = message;

    foodAdvice.textContent = food;
    exerciseAdvice.textContent = exercise;
    healthAdvice.textContent = health;

    insights.classList.remove("show");

    void insights.offsetWidth;

    insights.classList.add("show");
}

function calculateBMI() {

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    errorMessage.textContent = "";

    if (
        heightInput.value.trim() === "" ||
        weightInput.value.trim() === "" ||
        !Number.isFinite(height) ||
        !Number.isFinite(weight) ||
        height < 100 ||
        height > 220 ||
        weight < 25 ||
        weight > 300
    ) {

        errorMessage.textContent =
            "Please enter a height between 100–220 cm and a weight between 25–300 kg.";

        return;
    }

    const heightMeters = height / 100;

    const bmi = weight / (heightMeters * heightMeters);

    const category = getBMICategory(bmi);

    bmiValue.textContent = bmi.toFixed(1);

    bmiValue.style.color = category.color;

    bmiStatus.textContent = category.name;

    bmiStatus.style.color = category.color;

    description.textContent = category.description;

    result.classList.add("show");

    const markerPosition = Math.min(
        Math.max(((bmi - 15) / 25) * 100, 0),
        100
    );

    scaleMarker.style.left = markerPosition + "%";

    const rulerHeight = 365;

    const personHeight = (height / 220) * rulerHeight;

    person.style.height = personHeight + "px";

    person.classList.add("show");

    heightGuide.style.bottom = (35 + personHeight) + "px";

    heightGuide.classList.add("show");

    heightLabel.textContent = height + " cm";

    createBody(bmi, selectedGender);

    emptyState.classList.add("hide");

    displayHeight.textContent = height + " cm";

    displayWeight.textContent = weight + " kg";

    displayType.textContent = category.short;

    updateBodyInsights(height, weight, bmi);
}

calculateBtn.addEventListener("click", calculateBMI);

heightInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        calculateBMI();
    }

});

weightInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        calculateBMI();
    }

});
