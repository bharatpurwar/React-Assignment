import React from 'react'

export default function Register() {
    return (
        <div className="container mt-5 " data-testid="registerId">
            <div className="row" data-testid="rowId">
                <div col-md-4 offset-md-4>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" class="form-control" />
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" />
                        </div>
                       
                        <button type="submit" class="btn btn-lg btn-primary" data-testid="RegId">Register</button>
                    </form>

                </div>
            </div></div>
    )
}
