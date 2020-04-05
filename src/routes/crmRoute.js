const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            //middleware

            res.send("Get request Success for contact!");

        })
        .post((req, res, next) => {
            res.send("POST request Success for contact!")
        })

    app.route("/contact/:contactID")
        .put((req, res, next) => {
            res.send("PUT request Success for contact!")
        })

        .delete((req, res, next) => {
            res.send("Delete request Success for contact!")
        })
}

export default routes;