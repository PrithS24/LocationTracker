// console.log(navigator.geolocation);

const showDetails = document.querySelector(".showDetails");
document.querySelector(".geo-btn").addEventListener("click", ()=>{
    if(navigator.geolocation){ //if we're finding a location, we will call function
        navigator.geolocation.getCurrentPosition( //will want to access current position
            (position)=>{ //if user gives permission
                // console.log(position.coords.latitude);
                const {latitude, longitude} = position.coords;
                showDetails.textContent = `The Latitude ${latitude} & Longitude ${longitude}`;
            },
            (error) =>{
                showDetails.textContent=error.message;
                console.log(error.message);
            }
        );
        
    }
});