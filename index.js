const {app} = require("./app");
const { API_PORT } = process.env;
const qrRoutes = require("./routes/qr.route")
const meetupRoutes = require('./routes/meetup.route')
const womenNFT = require('./routes/women.route')
const meetup2Routes = require('./routes/meetup2.route') 
const KarakNightsxSweyRoutes = require('./routes/KarakNightsxSwey.route')
const POAPRoutes = require('./routes/POAP.routes')
const TwinCyclopsRoutes = require('./routes/TwinCyclops.route') 

app.use(qrRoutes)
app.use(meetupRoutes)
app.use(meetup2Routes)
app.use(womenNFT)
app.use(KarakNightsxSweyRoutes)
app.use(POAPRoutes)
app.use(TwinCyclopsRoutes)

app.get('/test',async(req,res)=>{
   res.status(200).json("App is running")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${API_PORT}`);
});
