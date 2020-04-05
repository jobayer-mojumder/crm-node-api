import { addnewContact, getContacts } from '../controllers/crmController';

const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)

        .post(addnewContact);

    app.route("/contact/:contactID")
        .put((req, res, next) => {
            res.send("PUT request Success for contact!")
        })

        .delete((req, res, next) => {
            res.send("Delete request Success for contact!")
        })
}

export default routes;