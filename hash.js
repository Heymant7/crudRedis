const client = require('./redis')

const setHash = async () => {
    await client.hset('hash', {'car': "lamgo"}) 
}

const getHash = async () => {
    await client.hget('hash', 'car')
}

const updHash = async () => {
    await client.hset('hash', {'car' : "rolls royce"})
}

const delHash = async () => {
    await client.hdel('hash', 'car')
}

