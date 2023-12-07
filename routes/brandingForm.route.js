const { router } = require("../app")

router.post('/brandingForm', async (req, res) => {
    const url = 'https://script.google.com/macros/s/AKfycbzIvL0uLJEaJCsWZ0NvpVscQXq9-t_SobRsv3ubFEnF7hT8VECePR_zjM3CKgs_o6Ay/exec';
    const { formType, data} = req.body
    console.log(JSON.stringify({
        formType,
        data
    }));
    try {
        const response = await axios.post(url, {
            formType,
            data
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status >= 200 && response.status < 300) {
            res.status(200).json("Form data submitted successfully");
        } else {
            console.log(response)
            res.status(400).json("Error submitting form data");
        }
    } catch (error) {
        res.status(400).json("Error fetching form data");
    }
})


module.exports = router