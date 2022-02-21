//========================================================= first exercise =========================================================

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let y = 1; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//========================================================= /first exercise =========================================================

//========================================================= second exercise =========================================================

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`

//     return conjoinedWord
// }

// conjoinedWord = conjunction("Master", "Card")
// console.log(conjoinedWord)

//========================================================= /second exercise =========================================================

//========================================================= third exercise =========================================================

// const modSquad = {
//     "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//     "series": {
//         "start": "1968",
//         "end": "1973"
//     }
// }

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// modSquad.members.forEach((member) => 
//      HTMLRepresentation += `<div>${member}</div>`
// )
    
// console.log(HTMLRepresentation)

//========================================================= /third exercise =========================================================

//========================================================= simon says =========================================================

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1]]

// for (const location of locations) {

//     if (location[0] > 2) {
//         const invalidLocation = true
//         console.log("This location is invalid")
//     } else {
//         console.log("This location is valid")
//     }
// }

//========================================================= /simon says =========================================================

//========================================================= lambda llama =========================================================

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    
    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        
        const newName = name + suffix
        return newName
    }

    const namesForLlamas = namer()
    return namesForLlamas    
}

nameMaker = llamaNamer()
console.log(nameMaker)

//========================================================= /lambda llama =========================================================