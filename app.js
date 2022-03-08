const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const notes = require('./notes.js');


// Create add command
yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       }, 
       body: {
           describe: 'Note body',
           demandOption: true,
           type: 'string'
       }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}).parse()

//Create remove command
yargs(hideBin(process.argv)).command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
}).parse()

//Create list command
yargs(hideBin(process.argv)).command({
    command: 'list',
    describe: 'List your note',
    handler() {
        notes.listNotes( )
    }
}).parse()

//Create read command
yargs(hideBin(process.argv)).command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
}).parse()

 
