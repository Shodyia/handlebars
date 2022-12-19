const { application } = require("express");
const {allGroups} = require("../dane/grupy");
const {Flags} = require("../dane/FlagsP");
const express = require("express");
// const grupa = require("../dane/grupy.js")
const {GroupA,GroupB,GroupC,GroupD,GroupE,GroupF,GroupG,GroupH} = require("../dane/grupy")
const {Match1,Match2,Match3,Match4,Match5,Match6,Match7,Match8,Match9,Match10,Match11,Match12,Match13,Match14,Match15,Match16} = require("../dane/matches")
const {Argentina,Australia,Belgium,Brazil,Cameroon,Canada,Costa_ricka,Croatia,Denmark,Ecuador,England,France,Germany,Ghana,Iran,Japan,South_Korea,Mexico,Morocco,Netherlands,Poland,Portugal,Qatar,Saudi_Arabia,Senegal,Serbia,Spain,Switzerland,Tunisia,USA,Uruguay,Wales} = require("../dane/FlagsP")
const homeRouter = express.Router();

homeRouter.get("/home", (req,res)=> { 
    res.render("sites/home",
    {

    }
)
})
homeRouter.get("/groups", (req,res)=>{
    res.render("sites/groups",
    {
        GroupA,GroupB,GroupC,GroupD,GroupE,GroupF,GroupG,GroupH

    }
    )
})
homeRouter.get("/ladder", (req,res)=>{
    res.render("sites/ladder",
    {
        Match1,Match2,Match3,Match4,Match5,Match6,Match7,Match8,Match9,Match10,Match11,Match12,Match13,Match14,Match15,Match16
    }
    )
})
homeRouter.get("/teams", (req,res)=>{
    res.render("sites/teams",
    {
        Argentina,Australia,Belgium,Brazil,Cameroon,Canada,Costa_ricka,Croatia,Denmark,
        Ecuador,England,France,Germany,Ghana,Iran,Japan,South_Korea,Mexico,Morocco,Netherlands,Poland,Portugal,
        Qatar,Saudi_Arabia,Senegal,Serbia,Spain,Switzerland,Tunisia,USA,Uruguay,Wales
    }
    )
})
homeRouter.get("/:team", (req,res)=>{
    const {team} = req.params;
    const [chosenTeam] = allGroups.filter(el=> el.name === team);
    res.render(`sites/team`,
    {
        chosenTeam
    }
)}
)

module.exports = {
    homeRouter,
}