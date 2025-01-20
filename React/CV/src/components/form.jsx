import { useState } from "react";

export function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");
    const [school, setSchool] = useState("");
    const [study, setStudy] = useState("");
    const [studyDate, setStudyDate] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [res, setRes] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const [submit, setSubmit] = useState(false);

    function submitForm(e) {
        e.preventDefault();
        if(!submit) {
            setSubmit(true);
        }

        if(submit) {
            setSubmit(false);
        }
    }

        return (
            !submit ? 
            <div className="wrapper">
                <form onSubmit={submitForm} className="form">
                    <h1>CV Form</h1>
                        <h2>General Information</h2>
                            <label className="label" htmlFor="name">Full Name:</label>
                            <input className="input" type="text" name="name" onChange={e => setName(e.target.value)} value={name}/>
                            <br />
                            <label className="label" htmlFor="mail">E-Mail:</label>
                            <input className="input" type="email" name="mail" onChange={e => setMail(e.target.value)} value={mail}/>
                            <br />
                            <label className="label" htmlFor="tel">Tel.:</label>
                            <input className="input" type="tel" name="tel" onChange={e => setTel(e.target.value)} value={tel}/>
    
                        <h2>Educational Experience</h2>
                            <label className="label" htmlFor="school">School Name:</label>
                            <input className="input" type="text" name="school" onChange={e => setSchool(e.target.value)} value={school}/>
                            <br />
                            <label className="label" htmlFor="study">Type of Study:</label>
                            <input className="input" type="text" name="study" onChange={e => setStudy(e.target.value)} value={study}/>
                            <br />
                            <label className="label" htmlFor="dateStudy">Date of Study:</label>
                            <input className="input" type="date" name="dateStudy" onChange={e => setStudyDate(e.target.value)} value={studyDate}/>
    
                        <h2>Practical Experience</h2>
                            <label className="label" htmlFor="company">Company Name:</label>
                            <input className="input" type="text" name="company" onChange={e => setCompany(e.target.value)} value={company}/>
                            <br />
                            <label className="label" htmlFor="position">Position:</label>
                            <input className="input" type="text" name="position" onChange={e => setPosition(e.target.value)} value={position}/>
                            <br />
                            <label className="label" htmlFor="res">Responsibilities:</label>
                            <input className="input" type="text" name="res" onChange={e => setRes(e.target.value)} value={res}/>
                            <br />
                            <h3>Worked at Company</h3>
                            <label className="label" htmlFor="from">from:</label>
                            <input className="input" type="date" name="from" onChange={e => setFrom(e.target.value)} value={from}/>
                            <br />
                            <label className="label" htmlFor="to">to:</label>
                            <input className="input" type="date" name="to" onChange={e => setTo(e.target.value)} value={to}/>
                            <br />
                        <button type="submit" className="button">Submit</button>
                </form>
            </div>
            :
            <div className="wrapper">
                <form onSubmit={submitForm} className="form">
                    <h1>Thank you!</h1>
                        <h2>General Information</h2>
                            <label className="label" htmlFor="name">Full Name:</label>
                            <div className="input" name="name">{name}</div>
                            <br />
                            <label className="label" htmlFor="mail">E-Mail:</label>
                            <div className="input" name="mail">{mail}</div>
                            <br />
                            <label className="label" htmlFor="tel">Tel.:</label>
                            <div className="input" name="tel">{tel}</div>

                        <h2>Educational Experience</h2>
                            <label className="label" htmlFor="school">School Name:</label>
                            <div className="input" name="school">{school}</div>
                            <br />
                            <label className="label" htmlFor="study">Type of Study:</label>
                            <div className="input" name="study">{study}</div>
                            <br />
                            <label className="label" htmlFor="dateStudy">Date of Study:</label>
                            <div className="input" name="dateStudy">{studyDate}</div>

                        <h2>Practical Experience</h2>
                            <label className="label" htmlFor="company">Company Name:</label>
                            <div className="input" name="company">{company}</div>
                            <br />
                            <label className="label" htmlFor="position">Position:</label>
                            <div className="input" name="position">{position}</div>
                            <br />
                            <label className="label" htmlFor="res">Responsibilities:</label>
                            <div className="input" name="res">{res}</div>
                            <br />
                            <h3>Worked at company</h3>
                            <label className="label" htmlFor="from">from:</label>
                            <div className="input" name="from">{from}</div>
                            <br />
                            <label className="label" htmlFor="to">to:</label>
                            <div className="input" name="to">{to}</div>
                            <br />
                        <button type="submit" className="button">Edit</button>
                </form>
            </div>
    );
};