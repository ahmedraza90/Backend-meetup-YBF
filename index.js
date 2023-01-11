const {app} = require("./app");
const { API_PORT } = process.env;
const qrRoutes = require("./routes/qr.route")
const meetupRoutes = require('./routes/meetup.route')
const womenNFT = require('./routes/women.route')

app.use(qrRoutes)
app.use(meetupRoutes)
app.use(womenNFT)
app.get('/test',async(req,res)=>{
   res.status(200).json("App is running")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${API_PORT}`);
});
