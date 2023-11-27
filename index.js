const { app } = require("./app");
const { API_PORT } = process.env;
const qrRoutes = require("./routes/qr.route")
const meetupRoutes = require('./routes/meetup.route')
const womenNFT = require('./routes/women.route')
const meetup2Routes = require('./routes/meetup2.route')
const KarakNightsxSweyRoutes = require('./routes/KarakNightsxSwey.route')
const POAPRoutes = require('./routes/POAP.routes')
const TwinCyclopsRoutes = require('./routes/TwinCyclops.route')
const ogNFTRoutes = require('./routes/ogNFT.route')
const Samra = require('./routes/Samra.route')
const Flappy = require('./routes/flappy.route')
const Africa = require('./routes/africa.route')
const She = require('./routes/she.route')
const Form = require("./routes/form.route")

app.use(qrRoutes)
app.use(meetupRoutes)
app.use(meetup2Routes)
app.use(womenNFT)
app.use(KarakNightsxSweyRoutes)
app.use(POAPRoutes)
app.use(TwinCyclopsRoutes)
app.use(ogNFTRoutes)
app.use(Samra)
app.use(Flappy)
app.use(Africa)
app.use(She)
app.use(Form)

app.get('/test', async (req, res) => {
    res.status(200).json("App is running")
})

app.post('/brandingForm', async (req, res) => {
    const url = 'https://script.google.com/macros/s/AKfycbz39VUavoiBFzfvogiPDwTXfS4KJr_a14v6Cagel8VjjM_4Z6xQz6Nr5kVnn1g97zG8/exec';
    const { formType, data} = req.body
    console.log(JSON.stringify({
        formType,
        data
    }));
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain",
            },
            body: JSON.stringify({
                formType,
                data
            }),
        });

        if (response.ok) {
            res.status(200).json("Form data submitted successfully");
        } else {
            res.status(400).json("Error submitting form data",response.statusText);
        }
    } catch (error) {
        res.status(400).json("Error fetching form data");
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${API_PORT}`);
});
