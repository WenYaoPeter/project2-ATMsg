

              <div className="row">
              {this.props.atms.map(atm => (

                this.props.randomX = Math.floor(Math.random() * 10)
              
         randomPicUrl = "https://source.unsplash.com/random/20"+this.props.randomX+"x200"
          
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src={randomPicUrl} data-holder-rendered="true"/>
                      <div className="card-body">
                        <p className="card-text">
                        <form action={"/edit_atm_form/"+atm.id} method="GET">
                          {atm.id+', '+atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
                         <br/>
                         <button type="submit" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </form>
                      <form method="POST" action={"/delete_atm/"+atm.id+"?_method=delete"}>          
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                      </form>                         
                           
                      </p>
                      

                      </div>
                  </div>
          </div>

              ))}
        </div>



-----------------------------

listOfAtms.jsx

      <ul>
              {this.props.atms.map(atm => (
                <li key={atm.id}>
                <form action={"/edit_atm_form/"+atm.id} method="GET">
                  {atm.id+', '+atm.bank+', ' +atm.banklocation+', ' +atm.area+', ' +atm.address}
                <input type="submit" value="Edit"/>
                </form>

                <form method="POST" action={"/delete_atm/"+atm.id+"?_method=delete"}>
                  <input type="submit" value="Delete"/>
                </form>
                </li>
              ))}
            </ul>


-------------------------------

<form action="/list_of_Atms" method="POST">



    <div class="form-group">


      <label for="searchByArea">Search By Area</label>
      <select id= class="form-control">
        <option></option>
      </select>


    </div>

    <button type="submit" class="btn btn-primary">Submit</button>

</form>


          <div class="form-group">
          <label for="searchByArea">Search By Area</label>

          <select class="form-control" id="banks" name="chosenBank">
            
            
              <option value="UOB">UOB</option>
              <option value="DBS">DBS</option>
              <option value="CITIBANK">CITIBANK</option>
            
          </select>
          <input list="areas" name="chosenArea"/>
          
            <datalist id="areas">
            {this.props.atmsAreas.map(atmsArea => (
              <option value={atmsArea.area}></option>
            ))}
            </datalist>
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>