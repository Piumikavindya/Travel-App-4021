const router = require("express").Router();
const Journey = require("../Models/Journey");

// add journey route
router.route("/add").post((req,res)=>{

    const journeyName =req.body.journeyName;
    const  NoOfDates = Number(req.body.
    NoOfDates);
    const  NoOfMembwers = Number(req.body. NoOfMembwers);

    const newJourney = new Journey({
        journeyName,
        NoOfDates,
        NoOfMembwers
    })
    newJourney.save().then(()=>{
        res.json("Journey Added")
    }).catch(()=>{
        console.log(err);
    })
})

// read journey route

router.route("/").get((req,res)=>{

    Journey.find().then((Journey)=>{
        res.json(Journeys)
    }).catch((err)=>{
        console.log(err);
    })
})

// update journey route
 router.route("/update/:id").put(async(req,res)=>{
    let journeyId = req.params.id;
    // destructure method
    const {journeyName, NoOfDates,NoOfMembwers} = req.body;

    const updateJourney ={
        journeyName,
        NoOfDates,
        NoOfMembwers
    }
    const update = await Journey.findByIdAndUpdate(journeyId).then(()=> {
        res.status(200).send({status: "User updated"}).catch((err)=>{
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