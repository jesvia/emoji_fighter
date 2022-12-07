let fighters = ["😘", "🍰", "🦭", "😊", "😂", "🤣", "😁", "💕", "👌", "😒", "😍", "❤️", "👍", "🙌", "✌️", "🤞", "😉"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let i = Math.floor(Math.random() *17)
    let j = Math.floor(Math.random() *17)
    stageEl.textContent = fighters[i] + " " + " VS " + " " + fighters[j]
    console.log(fighters[i] + " " + " VS " + " " + fighters[j])
    
})