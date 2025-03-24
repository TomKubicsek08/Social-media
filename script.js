// Social Media Impact Data

// Popular social media platforms (String)
let platform1 = "Instagram";
let platform2 = "TikTok";
let platform3 = "Twitter";

// Average daily screen time in hours (Number)
let screenTimeInstagram = 2.5;
let screenTimeTikTok = 3.2;
let screenTimeTwitter = 1.8;

// Total weekly screen time calculation
let totalWeeklyScreenTime = (screenTimeInstagram + screenTimeTikTok + screenTimeTwitter) * 7;

// Percentage of users affected by social media pressure (Number)
let anxietyPercentage = 65;
let depressionPercentage = 50;

// Conditional logic for screen time impact
let screenTimeMessage;
if (totalWeeklyScreenTime > 30) {
    screenTimeMessage = "Your social media usage is very high. Consider taking breaks!";
} else if (totalWeeklyScreenTime > 15) {
    screenTimeMessage = "Your usage is moderate, but balance is key!";
} else {
    screenTimeMessage = "Great job! You have a balanced social media routine.";
}

// Constructing a message about social media usage (String)
let impactMessage = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. Studies show that ${anxietyPercentage}% of users experience anxiety and ${depressionPercentage}% experience depression due to social media pressure.`;

// Insert data into the webpage
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platform1}, ${platform2}, ${platform3}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;
document.getElementById("impact-message").innerHTML = impactMessage + `<br><strong>${screenTimeMessage}</strong>`;

// ================================
// New Feature: Social Media Facts
// ================================

// Array of social media impact facts
const socialMediaFacts = [
    "Over 4.48 billion people use social media worldwide.",
    "The average person spends about 2.5 hours on social media daily.",
    "Social media has been linked to increased anxiety and depression in teens.",
    "About 70% of marketers use social media for customer engagement.",
    "Facebook remains the most-used social platform with over 2.9 billion users.",
    "Social media plays a crucial role in spreading news, both real and fake."
];

// Track the current fact index
let factIndex = 0;

// Function to display the next fact
function showNextFact() {
    let factDisplay = document.getElementById("fact-display");

    // Display the current fact
    factDisplay.innerText = socialMediaFacts[factIndex];

    // Move to the next fact (loop back to the start if at the end)
    factIndex = (factIndex + 1) % socialMediaFacts.length;
}

// Event listener for the button
document.getElementById("next-fact").addEventListener("click", showNextFact);

// ================================
// New Feature: Platform-Specific Facts (Switch Statement)
// ================================

// Function to get platform-specific facts using a switch statement
function getPlatformFact(platform) {
    let fact;
    switch (platform.toLowerCase()) {
        case "instagram":
            fact = "Instagram was founded in 2010 and has over 1 billion users.";
            break;
        case "tiktok":
            fact = "TikTok is the fastest-growing social media app, with over 1 billion active users.";
            break;
        case "twitter":
            fact = "Twitter (now X) has around 450 million active users and is known for real-time updates.";
            break;
        default:
            fact = "Platform not recognized. Try Instagram, TikTok, or Twitter.";
    }
    document.getElementById("fact-display").innerText = fact;
}

// Event listener for platform-specific facts
document.getElementById("next-fact").addEventListener("click", function() {
    let platform = prompt("Enter a platform: Instagram, TikTok, or Twitter");
    getPlatformFact(platform);
});
