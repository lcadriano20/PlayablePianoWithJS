const pianoKeys        = document.querySelectorAll('.piano-keys .key')
const pianoKeysLetters = document.querySelectorAll('.piano-keys span')
const volumeSlider     = document.querySelector('.volume-slider input')
const showKeysBtn      = document.querySelector('.keys-checkbox input')


let allKeys = []
let audio = new Audio("tunes/a.wav") // by default, audio src is "a" tune


pianoKeys.forEach(key=> {
    allKeys.push(key.dataset.key) // adding data-key value to the allKeys array
    // Calling playTune with a passing data-key value as an argument
    key.addEventListener('click',()=> playTune(key.dataset.key))
})

function playTune(key) {
    audio.src = `tunes/${key}.wav` // Passing audio src based on the key pressed
    audio.play() // Playing audio
    console.log(allKeys)

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(()=> {
        clickedKey.classList.remove("active")
    }, 150)


}
document.addEventListener('keydown',pressedKey)

function pressedKey(e) {
    const keyActivated= e.key

    if(allKeys.includes(keyActivated)) {
        playTune(keyActivated)
    }
    
}
function controlPianoVolume(e) {
    audio.volume = e.target.value
}
showKeysBtn.addEventListener('input', ()=> {
    pianoKeysLetters.forEach(key =>{
        key.classList.toggle('hide')
    })
})

volumeSlider.addEventListener('input',controlPianoVolume)


