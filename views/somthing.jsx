








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