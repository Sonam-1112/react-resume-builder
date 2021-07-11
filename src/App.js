import React,{useState,useMemo} from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login'
import Register from './components/Register'
import Personal from './components/Personal'
import Educational from './components/Educational.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Extra from './components/Extra.jsx'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import {InfoContext} from './components/InfoContext'
import Resume from './components/Resume'
import ProtectedRoute from './ProtectedRoute'
// import Pagination from './components/Pagination.jsx'

const App = () => {
    const [isAuth,setIsAuth] = useState(false)
    const defaultValue = {
        isAuth:{
            isAuthValue:false
        },
        personal: {
            firstNameValue: '',
            emailValue:'',
            portfolioValue:'',
            linkedinValue:'',
            facebookValue:'',
            lastNameValue:'',
            phoneValue:'',
            githubValue:'',
            twitterValue:'',
            instagramValue:''
        },
        educational: {
            schoolNameValue:'',
            schoolFromDateValue:'',
            schoolToDateValue:'',
            schoolQualificationValue:'',
            schoolDescriptionValue:'',
            clgNameValue:'',
            clgFromDateValue:'',
            clgToDateValue:'',
            clgQualificationValue:'',
            clgDescriptionValue:''
        },
        projects:{
            pro1TitleValue:'',
            pro1LinkValue:'',
            pro1DescriptionValue:'',
            pro2TitleValue:'',
            pro2LinkValue:'',
            pro2DescriptionValue:'',
            pro3TitleValue:'',
            pro3LinkValue:'',
            pro3DescriptionValue:''
        },
        experience:{
            exp1InstituteValue:'',
            exp1PositionValue:'',
            exp1DurationValue:'',
            exp1DescriptionValue:'',
            exp2InstituteValue:'',
            exp2PositionValue:'',
            exp2DurationValue:'',
            exp2DescriptionValue:''
        },
        extra:{
            skill1Value:'',
            skill2Value:'',
            skill3Value:'',
            skill4Value:'',
            skill5Value:'',
            skill6Value:'',
            interest1Value:'',
            interest2Value:'',
            interest3Value:'',
            interest4Value:'',
            interest5Value:'',
            interest6Value:'',
        }
        
    }
    const [formData,setFormData] = useState(defaultValue);
    // settFormData({...formData,personal: {
    //     ...formData.personal,
    //     firstName: e.target.value
    // })
    // const ProviderValue = useMemo(()=>({firstName,setFirstName}),[firstName,setFirstName])
    
    return (
        <BrowserRouter>
            <div>
                <Navbar isAuth={formData.isAuth.isAuthValue}/>
                <InfoContext.Provider value={{formData,setFormData}}>
                    <Route path="/"/>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    {/* <Route exact path="/personal" component={Personal}/> */}
                    {/* <Route exact path="/educational" component={Educational}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/experience" component={Experience}/>
                    <Route exact path="/extra" component={Extra}/>
                    <Route exact path="/preview-resume" component={Resume}/> */}
                    <ProtectedRoute path='/personal' Component={Personal} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/educational' Component={Educational} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/projects' Component={Projects} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/experience' Component={Experience} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/extra' Component={Extra} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume' Component={Resume} isAuth={formData.isAuth.isAuthValue}/>
                </InfoContext.Provider>
                {/* <Pagination/> */}
            </div>
        </BrowserRouter>
    )
}

export default App
