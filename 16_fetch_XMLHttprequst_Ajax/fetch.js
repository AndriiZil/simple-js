const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const options = {
    method,
    headers
  }

  if (method === 'POST') {
    options.body = body ? JSON.stringify(body) : body
  }

  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
        .then(error => {
          const e = new Error('Something went wrong')
          e.data = error
          throw e;
        })
    })
}

// sendRequest('GET', requestUrl)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'Andrii',
  age: 30
}

sendRequest('GET', requestUrl, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
