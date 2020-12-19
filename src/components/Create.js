import React, {useState} from 'react'

function Create() {
   const [educationFormNumber, setEducationFormNumber] = useState([1])
   const [experienceFormNumber, setExperienceFormNumber] = useState([1])
   const [skillFormNumber, setSkillFormNumber] = useState([1])
    
 
    return (
        <div style={{width: '100%',   display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <div style={{   width: '60%'}}>
          <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Phone</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Education</label>
    {educationFormNumber.map((item, index)=> (
      <div style={{display: 'flex', width: '100%'}}>
    <input style={{width: '40%', marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Institute" />

    <input style={{width: '20%', marginRight: 5}} type="date" className="form-control" id="formGroupExampleInput" placeholder="Year" />

    <input style={{width: '40%' , marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Degree" />
    { index === educationFormNumber.length-1 &&
      <button  onClick={(e)=>{e.preventDefault(); setEducationFormNumber(educationFormNumber.concat([1]))}}>+</button>
    }
    </div>
    ))}
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Experience</label>
    {experienceFormNumber.map((item, index)=> (
      <div style={{display: 'flex', width: '100%'}}>
    <input style={{width: '40%', marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Company" />

    <input style={{width: '20%', marginRight: 5}} type="date" className="form-control" id="formGroupExampleInput" placeholder="Year" />

    <input style={{width: '40%' , marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Designation" />
    { index === experienceFormNumber.length-1 &&
      <button  onClick={(e)=>{e.preventDefault(); setExperienceFormNumber(experienceFormNumber.concat([1]))}}>+</button>
    }
    </div>
    ))}
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Skill</label>
    {skillFormNumber.map((item, index)=> (
      <div style={{width: '100%', display: 'flex'}}>
    <input style={{  marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Skill" />
     { index === skillFormNumber.length-1 &&
      <button  onClick={(e)=>{e.preventDefault(); setSkillFormNumber(skillFormNumber.concat([1]))}}>+</button>
    }
    </div>
    ))}
  </div>
</form>

            </div>
        </div>
    )
}

export default Create
