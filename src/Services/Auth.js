const authentication={
    isLoggedIn: true,
    async Login(){
        await fetch('http://localhost:3001/auth/v1/isAuthenticated',
        {
            method:'POST',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>res.json())
        .then(data=>{
            // this.isLoggedIn=data.isAuthenticated;
            console.log(data);
        });
    }
}
export default authentication;





