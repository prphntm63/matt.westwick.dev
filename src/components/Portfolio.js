import React from 'react';
import { Card, CardTitle, Icon  } from 'react-materialize';

const portfolio = {
    "Headmaster" : {
        id : "Headmaster",
        thumb : "https://pbs.twimg.com/media/CkgUaFAWEAAjChp.jpg",
        site : "https://headmaster.dev",
        repo : "https://github.com/prphntm63/headmaster2",
        description : "Full-stack application for software dev student management"
    },
    "Mashboard" : {
        id : "Mashboard",
        thumb : "https://raw.githubusercontent.com/prphntm63/mashboard/master/client/public/favicon.ico",
        site : "https://mashboard.app",
        repo : "https://github.com/prphntm63/mashboard",
        description : "Live control and monitoring full stack application for brewing"
    },
    "FriendGen" : {
        id : "FriendGen",
        thumb : "https://raw.githubusercontent.com/prphntm63/friendgen/master/images/logo.png",
        site : "https://friendgen.net",
        repo : "https://github.com/prphntm63/friendgen",
        description : "Cloud-based social media application for meeting locals"
    },
    "Republic Roof" : {
        id : "Republic Roof",
        thumb : "http://republicroofsystems.herokuapp.com/images/logo.png",
        site : "https://republicroofsystems.herokuapp.com",
        repo : "https://github.com/prphntm63/republicroofsystems",
        description : "Custom webpage for roofing contractor client"
    },
    "Brewing Scoresheet" : {
        id : "Brewing Scoresheet",
        thumb : "https://storage.googleapis.com/wzukusers/user-25777081/images/5ca8e5a9c9dd7b8yEZHL/CANE-ISLAND-ALERS-LOGO_d400.png",
        site : "",
        repo : "https://github.com/paperhouse-brewing/aha-scoresheet",
        description : "Homebrew digital scoresheet and submission database"
    },
    "Mondrian Generator" : {
        id : "Mondrian Generator",
        thumb : "https://raw.githubusercontent.com/prphntm63/mondrian/master/favicon.ico",
        site : "https://prphntm63.github.io/mondrian",
        repo : "https://github.com/prphntm63/mondrian",
        description : "Random Mondrian-esque art generator"
    },
}

const Portfolio = (props) => (
    <div 
    style={{
            width : "auto",
            margin : "25px 0px 25px 300px",
            padding : '15px',

            flexGrow : 1,
            height : '100vh',
            overflowY : "hidden"
        }}
    id={props.id}
    >
        {/* <h1>Portfolio Page</h1> */}
        <div
            style = {{display : "flex", flexDirection: "row", alignItems: "flex-start", flexWrap : "wrap", padding : "25px", paddingTop : "0px"}}
        >
            {Object.keys(portfolio).map(key => (
                <Card
                key={key}
                actions={[
                    <a key="1" href={portfolio[key].site}><i class="material-icons">language</i></a>,
                    <a key="2" href={portfolio[key].repo}><i class="material-icons">code</i></a>
                ]}
                closeIcon={<Icon>close</Icon>}
                // header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{portfolio[key].id}</CardTitle>}
                
                revealIcon={<Icon>more_vert</Icon>}
                style={{width : "225px", height : "auto", margin : "25px", marginTop : "10px"}}
                className="hoverable"
                >
                    <div>
                        <img src={portfolio[key].thumb} style={{width : "60px", height : "60px"}} />
                        <span className="card-title">{portfolio[key].id}</span>
                    </div>
                    {portfolio[key].description}
                </Card>
            ))}
            
        </div>
    </div>
)

export default Portfolio