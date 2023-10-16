const router = require("express").Router();
let Journey = require("../Models/Journey");

// add journey route
router.route("/add").post((req,res)=>{

    const journeyName =req.body.journeyName;
    const NoOfDates = isNaN(req.body.NoOfDates) ? 0 : Number(req.body.NoOfDates);
    const NoOfMembwers = isNaN(req.body.NoOfMembwers) ? 0 : Number(req.body.NoOfMembwers);
    const  StartingDate = Date(req.body. StartingDate);
    const  ContactNO = Number(req.body. ContactNO);
    const Locations = req.body.Locations; 
    const  Events = req.body. Events;
    const  Resorts = req.body. Resorts;
    const Packages = req.body.Packages;

    if (isNaN(NoOfDates) || isNaN(NoOfMembwers)) {
        res.status(400).json("Invalid number values for NoOfDates or NoOfMembwers");
        return; // Exit early to avoid saving invalid data
    }

    const newJourney = new Journey({
        journeyName,
        NoOfDates,
        NoOfMembwers,
        StartingDate,
        ContactNO,
        Locations,
        Events,
        Resorts,
        Packages
    })
    newJourney.save().then(()=>{
        res.json("Journey Added")
    }).catch((err)=>{
        console.log(err);
    })
})

// read journey route

router.route("/").get((req,res)=>{

    Journey.find().then((Journeys)=>{
        res.json(Journeys)
    }).catch((err)=>{
        console.log(err);
    })
})

// update journey route
 router.route("/update/:id").put(async(req,res)=>{
    let journeyId = req.params.id;
    // destructure method
    const {journeyName, NoOfDates,NoOfMembwers,StartingDate,Locations,ContactNO,Events,Resorts,Packages} = req.body;

    const updateJourney ={
        journeyName,
        NoOfDates,
        NoOfMembwers,
        StartingDate,
        ContactNO,
        Locations,
        Events,
        Resorts,
        Packages
    }
    const update = await Journey.findByIdAndUpdate(journeyId).then(()=> {
        res.status(200).send({status: "Journey updated"}).catch((err)=>{
            res.status(500).send({status: "Error with updating journey"})
        })
    })

 })

 // delete journey route

 router.route("/delete/:id").delete(async(req,res) =>{
    let journeyId = req.params.id;

    await Journey.findByIdAndDelete(journeyId).then(()=>{
        res.status(200).send({status:"journey deleted"}).catch((err)=>{
            res.status(500).send({status: "Error with delete Journey"})
        })
    })
 })

router.route("/get/:id").get(async(req,res ) => {
    let journeyId = req.params.id;
 const journey=   await Journey.findById(journeyId).then(()=>{
        res.status(200).send({status: "Journey frtch"}).catch(()=>{
            console.log(err.massage);
            res.status(500).send({status:"Error with get journey", error: err.massage});
        })
    })
})

module.exports = router;