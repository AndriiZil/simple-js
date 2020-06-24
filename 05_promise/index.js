console.log('Request data...');

setTimeout(() => {
    console.log('Preparing data...');

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true;
        console.log('data received...', backendData);
    }, 2000)

}, 2000)

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('data in progress...');
        const data = {
            server: 'azure',
            port: 3200
        }
        resolve(data)
    }, 3000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            reject(data)
        }, 2000)
    })
}).then(data => {
    data.changed = true;
    return data;
}).then(clientData => {
    console.log('clientData received from client', clientData); // Missed because error occured
}).catch(error => console.log('Error', error))
.finally(() => console.log('Finally'))

/*
    Request data...
    Preparing data...
    data in progress...
    data received... { server: 'aws', port: 2000, status: 'working', modified: true }
    Error { server: 'azure', port: 3200, modified: true }
 */

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const rejectErr = () => {
    return new Promise((resolve, reject) => {
        reject('Error')
    })
}

sleep(5000).then(() => console.log('After 5 seconds'))
sleep(6000).then(() => console.log('After 6 seconds'))

Promise.all([sleep(7000), sleep(8000)]).then(() => {
    console.log('All promises'); // The last promise will complete
})

Promise.race([sleep(9000), sleep(12000)]).then(() => {
    console.log('Promise race');  // The first promise will complete
})

Promise.allSettled([sleep(15000), rejectErr(), sleep(16000)]).then(data => {
    console.log('data from allSettled', data);
}) /*
    [
      { status: 'fulfilled', value: undefined },
      { status: 'rejected', reason: 'Error' },
      { status: 'fulfilled', value: undefined }
    ]
*/