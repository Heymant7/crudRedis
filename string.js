const client = require('./redis')

const setName = async () => {
    await client.set('Name', "Hemant");
}

const getName = async () => {
    const val = await client.get('Name');
}

const updName = async () => {
    await client.set('Name', "newName")
}

const delName = async () => {
    await client.del('Name')
}

setName()
delName()