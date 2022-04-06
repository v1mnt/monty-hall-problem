export default class DoorModel {
    #number: number
    #hGift: boolean
    #selected: boolean
    #open: boolean

    constructor(number: number, hGift = false, selected = false, open = false) {
        this.#number = number
        this.#hGift = hGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }

    get hGift() {
        return this.#hGift
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    get closed() {
        return !this.open
    }

    deselect() {
        const selected = false
        return new DoorModel(this.number, this.hGift, selected, this.open)        
    }

    changeSelected() {
        const selected = !this.selected
        return new DoorModel(this.number, this.hGift, selected, this.open)
    }

    openDoor() {
        const open = true
        return new DoorModel(this.number, this.hGift, this.selected, open)
    }
}
