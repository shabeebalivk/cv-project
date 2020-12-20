import { List } from 'immutable'
import React, { Component } from 'react'
import { TagBoxAsync } from 'react-tag-box'
// import './styles.scss'
 
// Mock server data. This would normally be in your database.
const sampleTags = List(
  ['Java', 'Python', 'C', 'C++', 'React', 'Ruby', 'Node', 'PHP', 'Javascript'].map(t => ({
    label: t,
    value: t
  }))
)

 
 
// Mock http request. This would normally make a request to your server to fetch matching tags.
const fetch = input => {
    console.log(input.toLowerCase())
    const filtered = sampleTags.filter(t=> t.label.toLowerCase().includes(input.toLowerCase()))
    console.log(sampleTags.filter(t=> t.label.toLowerCase().includes(input.toLowerCase())).toJS())
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sampleTags.filter(t=> t.value.toString().toLowerCase().includes(input.toString().toLowerCase())).toJS())
    }, 500)
  })
}
 
export default class Async extends Component {
  state = {
    selected: sampleTags.take()
  }
 
  render() {
    const { selected } = this.state
    const onSelect = tag => {
      const newTag = {
        label: tag.label,
        value: tag.value || tag.label
      }
 
      this.setState({
        selected: selected.push(newTag)
      })
      this.props.onSkillAdd(tag.label)
    }
 
    const remove = tag => {
      this.setState({
        selected: selected.filter(t => t.value !== tag.value)
      })
      this.props.onSkillRemove(tag.label)
    }
 
    const placeholder = selected.isEmpty() ? 'Skills - eg: React' :
      "Skills - eg: React"
 
    return (
        <div style={{  width: '100%'}}>
      <TagBoxAsync
        fetch={fetch}
        selected={selected.toJS()}
        onSelect={onSelect}
        removeTag={remove}
        backspaceDelete={true}
        placeholder={placeholder}
         
        renderTag={(tag, remove)=> {
            return (
                <div style={{color: 'white', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 30, backgroundColor: "gray"}}>
                    <b style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>{tag.label}</b>
                    <button style={{width: 30}} onClick={(tag)=>remove(tag)}>X</button>
                </div>
            
            )
        }}
      />
      </div>
    )
  }
}