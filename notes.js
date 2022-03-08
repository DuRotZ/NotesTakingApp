const fs = require('fs')
//const chalk = require("chalk")

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    //numberOfNotesBefore = notes.length
    for (let i = 0; i <= notes.length; i++) {
        if (notes[i].title === title) {
            notes.splice(i, 1)
        }
    }

    saveNotes(notes)
   /*  numberOfNotesAfter = notes.length
    if (numberOfNotesAfter < numberOfNotesBefore) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse('No note found'))
    } */

    /* const notesToKeep  = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(notesToKeep) */
    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log('Your notes')

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title === title)

    if (searchNote) {
        console.log(searchNote.title)
        console.log(searchNote.body)
    } else {
        console.log('no note was found')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}