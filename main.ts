/**
 * Firebase Serial Listener Extension
 */
//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace firebaseSerial {

    let currentCommand: string = ""

    /**
     * Start listening to Firebase serial data
     */
    //% block="start Firebase serial listener"
    export function startListener(): void {
        serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            currentCommand = serial.readUntil(serial.delimiters(Delimiters.NewLine))
            control.raiseEvent(3100, 1)
        })
    }

    /**
     * Runs when a command is received from Firebase
     */
    //% block="on Firebase command received"
    export function onCommandReceived(handler: () => void): void {
        control.onEvent(3100, 1, handler)
    }

    /**
     * Returns the current Firebase command
     */
    //% block="get current Firebase command"
    export function getCommand(): string {
        return currentCommand
    }
}
