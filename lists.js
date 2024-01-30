const client =  require('./redis')

const selList = async () => {
    await client.lpush('LISTS', '1', '2', '3');
}

const getList = async () => {
    const val = await client.lrange('LISTS', '0', '2')
    console.log(val);
}

const updList = async () => {
    await client.lset('LISTS', '2', '4')
}

const delList =  async () => {
    await client.del('LISTS')
}

// selList()
// updList()
getList()
