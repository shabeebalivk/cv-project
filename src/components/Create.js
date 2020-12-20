import React, {useState} from 'react'
import Tag from './Tag'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Create() {
   const [educationFormNumber, setEducationFormNumber] = useState([1])
   const [experienceFormNumber, setExperienceFormNumber] = useState([1])
   const [skills, setSkills] = useState([])
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [phone, setPhone] = useState()
   const [address, setAddress] = useState()
   const [education, setEducation] = useState([])
   const [institution, setInstitution] = useState()
   const [year, setYear] = useState()
   const [degree, setDegree] = useState()
   const [company, setCompany] = useState()
   const [experienceYear, setExperienceYear] = useState()
   const [designation, setDesignation] = useState()
   const [experience, setExperience] = useState([])

   const skillAdd = (skill) => {
     setSkills(prev=> [...prev, skill])
   }

   const skillRemove = (skill) => {
     setSkills(skills.filter(item=> item !== skill))
   }

   const history = useHistory()

    return (
        <div style={{flexDirection: 'column', marginTop: 20, marginBottom: 50, width: '100%',   display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <h5 style={{marginBottom: 20}}>Please fill the form </h5>
            <div className="containerCreate">
             
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={e=> setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Email</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Phone</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" onChange={e=> setPhone(e.target.value)}/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Address</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address" onChange={e=> setAddress(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Education</label>
                  {educationFormNumber.map((item, index)=> (
                    <div style={{display: 'flex', width: '100%', marginBottom: 10}}>
                  <input style={{width: '40%', marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Institute" onChange={(e)=> setInstitution(e.target.value)}/>

                  <input style={{width: '20%', marginRight: 5}} type="number" className="form-control" id="formGroupExampleInput" placeholder="Year" onChange={e=>  setYear(e.target.value) }/>

                  <input style={{width: '40%' , marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Degree" onChange={e=>  setDegree(e.target.value) }/>
                  { index === educationFormNumber.length-1 &&
                    <button  onClick={(e)=>{ 
                      setEducation(prev=> [...prev, {institution: institution, year: year, degree: degree}]);
                      e.preventDefault(); 
                      setEducationFormNumber(educationFormNumber.concat([1]))
                    }}>
                      +
                    </button>
                  }
                  </div>
                  ))}
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Experience</label>
                  {experienceFormNumber.map((item, index)=> (
                    <div style={{display: 'flex', width: '100%', marginBottom: 10}}>
                  <input style={{width: '40%', marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Company" onChange={e=> setCompany(e.target.value)}/>

                  <input style={{width: '20%', marginRight: 5}} type="number" className="form-control" id="formGroupExampleInput" placeholder="Year" onChange={e=> setExperienceYear(e.target.value)}/>

                  <input style={{width: '40%' , marginRight: 5}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Designation" onChange={e=> setDesignation(e.target.value)}/>
                  { index === experienceFormNumber.length-1 &&
                    <button  onClick={(e)=>{
                      e.preventDefault(); 
                      setExperienceFormNumber(experienceFormNumber.concat([1]));
                      setExperience(prev=> [...prev, {company: company, experienceYear: experienceYear, designation: designation}]);

                    }}>
                      +
                    </button>
                  }
                  </div>
                  ))}
                </div>
                 
                <div className="form-group" >
                  <label htmlFor="formGroupExampleInput" style={{marginBottom: 10}}>Skill</label>
                  <Tag onSkillAdd={skillAdd} onSkillRemove={skillRemove}/>
                </div>
                
              </form>
              <button 
                onClick={e=> {
                // console.log(name, phone, email, address, education, experience, skills); 
                e.preventDefault();
                console.log(typeof experience, education)
                // if(Object.keys(experience).length === 0 || Object.keys(education).length === 0) {
                //   alert('Please press + button to add experience or education test')
                //  } else {

                 
                  if(name && phone && email && address && education.length !==0 && experience.length !== 0 && skills.length !== 0) {
                   
                     function validateEmail(mail) 
                        {
                            var re = /\S+@\S+\.\S+/;
                            return re.test(mail);
                        }
                        
                    if(validateEmail(email) === false) {
                      alert('Please enter a valid email')
                    } else {
                      history.push('/view', {profile: {
                        name: name,
                        email: email,
                        phone: phone,
                        address: address,
                        education: education,
                        experience: experience,
                        skills: skills
                      }})
                    }
                  } else {
                     
                      alert('Please fill all the details. You must click + button to add experience and education')
                     
                  }
                // }
              }}>
                  Submit for cv generation
              </button>
            </div>
        </div>
    )
}

export default Create
