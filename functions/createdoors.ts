import DoorModel from "../model/door";

export function createDoors(amount: number, selected: number): DoorModel[]{
    return Array.from({length: amount}, (_,i) => {
        const number = i + 1
        const hgift = number == selected
        return new DoorModel(number, hgift)
    })
}

export function updateDoors(doors: DoorModel[], modify: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const mod = currentDoor.number === modify.number
        
        if(mod) {
            return modify
        } else {
            return modify.open ? currentDoor : currentDoor.deselect()
        }
    })
}