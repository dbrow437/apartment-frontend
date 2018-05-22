// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let getApartments = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apartment_lists') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}

export  {
    getApartments
}
