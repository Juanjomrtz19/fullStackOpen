const PersonForm = ({handleForm, newName, handleName, newPhone, handlePhone}) => {

    return(
        <form onSubmit={handleForm}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleName}
                />
        </div>
        <div>
          phone: <input 
                  value={newPhone}
                  onChange={(event) => handlePhone(event.target.value)}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
    );
}

export default PersonForm;