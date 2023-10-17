const router = require("express").Router();
let Journey = require("../Models/Journey");
const { format } = require("date-fns"); 

// add journey route
router.route("/add").post((req,res)=>{

    const journeyName =req.body.journeyName;
    const NoOfDates = isNaN(req.body.NoOfDates) ? 0 : Number(req.body.NoOfDates);
    const NoOfMembers = isNaN(req.body.NoOfMembers) ? 0 : Number(req.body.NoOfMembers);
    const StartingDate = format(new Date(req.body.StartingDate), "yyyy-MM-dd");
    const  ContactNO = Number(req.body. ContactNO);
    const Locations = req.body.Locations; 
    const  Events = req.body. Events;
    const  Resorts = req.body. Resorts;
    const Packages = req.body.Packages;

    if (isNaN(NoOfDates) || isNaN(NoOfMembers)) {
        res.status(400).json("Invalid number values for NoOfDates or NoOfMembers");
        return; // Exit early to avoid saving invalid data
    }

    const newJourney = new Journey({
        journeyName,
        NoOfDates,
        NoOfMembers,
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
router.route("/update/:id").put(async (req, res) => {
    let journeyId = req.params.id;
    // destructure method
    const { journeyName, NoOfDates, NoOfMembers, StartingDate, Locations, ContactNO, Events, Resorts, Packages } = req.body;

    const updateJourney = {
        journeyName,
        NoOfDates,
        NoOfMembers,
        StartingDate,
        ContactNO,
        Locations,
        Events,
        Resorts,
        Packages
    };

    try {
        const updatedJourney = await Journey.findByIdAndUpdate(journeyId, updateJourney, { new: true });
        res.status(200).json({ status: "Journey updated", journey: updatedJourney });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "Error with updating journey", error: err.message });
    }
});
 // delete journey route

 router.route("/delete/:id").delete(async(req,res) =>{
    let journeyId = req.params.id;

    await Journey.findByIdAndDelete(journeyId).then(()=>{
        res.status(200).send({status:"journey deleted"}).catch((err)=>{
            res.status(500).send({status: "Error with delete Journey"})
        })
    })
 })

 router.route("/get/:id").get(async (req, res) => {
    const journeyId = req.params.id;

    try {
        const journey = await Journey.findById(journeyId);
        if (!journey) {
            // If the journey is not found, send a 404 response
            return res.status(404).json({ status: "Journey not found" });
        }
        // Journey.StartingDate = format(new Date(Journey.StartingDate), "yyyy-MM-dd");

        res.status(200).json(journey); // Send the journey data in the response
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: "Error with getting journey", error: err.message });
    }
});


module.exports = router;