const apiKey = 'cE2SCSinjTt6gEpkkcsJvzgBfAKXQZ0TEd3SORf1NvUPSysUhf9Eai_Vg6dVDtxcGlMuZ1jXg0yLCnPGse0WJNDrtARG4cRaNEgd0lwVdvA7IJIENTGDAGLecyWQWnYx';
const secret = 'OtX5FZfBAZVip3kq8xUfVsZWogpRJvOTfZqZudwupWW4sRlsq6xH2Byob1N0ESqW';

let Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse =>
            if(jsonResponse.businesses){
               return jsonResponse.businesses.map(business => {
                        id: business.id,

                   });
            }
        );
    }
};