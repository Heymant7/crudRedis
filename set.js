const client = require('./redis')

const setSet = async () => {
    await client.sadd('SET', '1', '3', '9', '27')
}

const getSet = async () => {
    await client.smembers('SET')
}

const delSet = async () => {
    await client.srem('SET')
}

// const updSet = async () => {
//     await client.
// }