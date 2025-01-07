const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { title, argv } = require('process')
const { type } = require('os')

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },

        body: {
            describe: "Note body",
            demandOption: true,
            type: yargs.string

        }

    },
    handler: function() {
        console.log('Title', + argv.title)
        console.log('Body', + argv.body )

    }
})

// create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// create List command
yargs.command({
    command: 'list', 
    describe: 'List  new notes',
    handler: function() {
        console.log('Listing note!')
    }
})

yargs.command({
    command: 'read', 
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading note!')
    }
})


//add, remove, read, list
console.log(yargs.argv)
























// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)




// const add = require('./utils.
// js')

// const sum = add(4, -2)

// console.log(sum)