export default function Register() {
    return (
        <div> 
            <form action="">  
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />

                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter username" />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>    
                    </form>
                    
        </div>
    )
}