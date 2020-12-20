import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

// const education = [
//     {institution: 'mea', year: 2015, degree: 'btech'},
//     {institution: 'mes', year: 2016, degree: 'barch'},
// ]

// const experience = [
//     {company: 'nucore', experienceYear: 2017, designation: 'tester'},
//     {company: 'lapzoid', experienceYear: 2019, designation: 'react developer'},
// ]

// const skills = ['Java', 'Python', 'React']

function View(props) {
    const location = useLocation()
    const history = useHistory()
    console.log(location)
    
    if(location.state === undefined) {

        return (
            <div style={{width: '100vw', height: '90vh',   display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <b>Please fill form <button onClick={(e)=>{e.preventDefault(); history.push('/create')}}>here</button> to view your cv</b>
            </div>
        )
    }
    const {education, experience, skills, name, phone, email, address} = location.state.profile
    return (
        <div style={{ display: 'flex', height: '90vh', width: '100vw', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', height: '90%', width: 350,   display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{padding: 5,  marginTop: 20,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%', textAlign: 'center'}}>
                     <h3 style={{color: "darkblue"}}>{name}</h3>
                     <b>{email}</b>
                     <b>{phone}</b>
                     <b>{address}</b>
                </div>
                <div style={{padding: 10,boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',width: '90%', alignItems: 'center', justifyContent: 'center', marginTop: 30, display:'flex', flexDirection: 'column'}}>
                    <h5 style={{color: 'maroon'}}>Education</h5>
                    {education.map(item=> (
                        <b>{item.institution} - {item.year} - {item.degree}</b>
                    ))}
                </div>
                <div style={{padding: 10,boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',width: '90%', alignItems: 'center', justifyContent: 'center', marginTop: 30, display:'flex', flexDirection: 'column'}}>
                    <h5 style={{color: 'maroon'}}>Experience</h5>
                    {experience.map(item=> (
                        <b>{item.company} - {item.experienceYear} - {item.designation}</b>
                    ))}
                </div>
                <div style={{padding: 10,boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '90%', alignItems: 'center', justifyContent: 'center', marginTop: 30, display:'flex', flexDirection: 'column'}}>
                    <h5 style={{color: 'maroon'}}>Skills</h5>
                    {skills.map(item=> (
                        <b>{item}</b>
                    ))}
                </div>
             </div>
        </div>
        
    )
}

export default View
