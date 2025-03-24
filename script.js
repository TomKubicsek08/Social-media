// Social Media Impact Data
let platforms = ["Instagram", "TikTok", "Twitter"];
let screenTimes = [2.5, 3.2, 1.8]; // Daily screen time for each platform
let totalWeeklyScreenTime = screenTimes.reduce((sum, time) => sum + time, 0) * 7;

let anxietyPercentage = 65, depressionPercentage = 50;

// Conditional screen time message
let screenTimeMessage = totalWeeklyScreenTime > 30 ? 
    "Your social media usage is very high. Consider taking breaks!" :
    totalWeeklyScreenTime > 15 ? "Your usage is moderate, but balance is key!" :
    "Great job! You have a balanced social media routine.";

// Insert data into the webpage
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platforms.join(", ")}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;
document.getElementById("impact-message").innerHTML = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. 
    Studies show that ${anxietyPercentage}% experience anxiety and ${depressionPercentage}% experience depression due to social media pressure.<br><strong>${screenTimeMessage}</strong>`;

// Social Media Facts
const socialMediaFacts = [
    "Over 4.48 billion people use social media worldwide.",
    "The average person spends about 2.5 hours on social media daily.",
    "Social media has been linked to increased anxiety and depression in teens.",
    "About 70% of marketers use social media for customer engagement.",
    "Facebook remains the most-used social platform with over 2.9 billion users.",
    "Social media plays a crucial role in spreading news, both real and fake."
];

let factIndex = 0;
document.getElementById("next-fact").addEventListener("click", function() {
    document.getElementById("fact-display").innerText = socialMediaFacts[factIndex];
    factIndex = (factIndex + 1) % socialMediaFacts.length;
});

// Platform-Specific Facts
function getPlatformFact(platform) {
    let facts = {
        "instagram": "Instagram was founded in 2010 and has over 1 billion users.",
        "tiktok": "TikTok is the fastest-growing social media app, with over 1 billion active users.",
        "twitter": "Twitter (now X) has around 450 million active users and is known for real-time updates."
    };
    document.getElementById("fact-display").innerText = facts[platform.toLowerCase()] || "Platform not recognized. Try Instagram, TikTok, or Twitter.";
}

document.getElementById("next-fact").addEventListener("click", function() {
    let platform = prompt("Enter a platform: Instagram, TikTok, or Twitter");
    getPlatformFact(platform);
});
