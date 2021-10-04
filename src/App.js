import React,{useState} from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login'
import Register from './components/Register'
import Personal from './components/Personal'
import Educational from './components/Educational.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Extra from './components/Extra.jsx'
import Templates from './components/Templates'
import { BrowserRouter,Route } from 'react-router-dom'
import {InfoContext} from './components/InfoContext'
import Resume1 from './components/Resume1'
import Resume2 from './components/Resume2'
import Resume3 from './components/Resume3'
import Resume4 from './components/Resume4'
import Resume5 from './components/Resume5'
import Resume6 from './components/Resume6'
import Resume7 from './components/Resume7'
import Resume8 from './components/Resume8'
import Resume9 from './components/Resume9'
import Resume10 from './components/Resume10'
import Resume11 from './components/Resume11'
import Resume12 from './components/Resume12'
import ProtectedRoute from './ProtectedRoute'
// import Pagination from './components/Pagination.jsx'


const App = () => {
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
        educational: [{
            schoolNameValue:'',
            schoolFromDateValue:'',
            schoolToDateValue:'',
            schoolQualificationValue:'',
            schoolDescriptionValue:''
        }],
        projects:[{
            proTitleValue:'',
            proLinkValue:'',
            proDescriptionValue:''
        }],
        experience:[{
            expInstituteValue:'',
            expPositionValue:'',
            expDurationValue:'',
            expDescriptionValue:''
        }],
        skill:
        [{
            skillValue:''
        }],
        interest:
        [{
            interestValue:''
        }]
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
                    <ProtectedRoute path='/templates' Component={Templates} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-1' Component={Resume1} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-2' Component={Resume2} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-3' Component={Resume3} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-4' Component={Resume4} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-5' Component={Resume5} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-6' Component={Resume6} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-7' Component={Resume7} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-8' Component={Resume8} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-9' Component={Resume9} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-10' Component={Resume10} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-11' Component={Resume11} isAuth={formData.isAuth.isAuthValue}/>
                    <ProtectedRoute path='/preview-resume-12' Component={Resume12} isAuth={formData.isAuth.isAuthValue}/>
                </InfoContext.Provider>
                {/* <Pagination/> */}
            </div>
        </BrowserRouter>
    )
}

export default App
