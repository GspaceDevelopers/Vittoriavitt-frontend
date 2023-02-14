import Mailchimp from "mailchimp-api-v3";

var mailchimp = new Mailchimp();

mailchimp.request({
  method: "get|post|put|patch|delete",
  path: "path for the call, see mailchimp documentation for possible calls",
  path_params: {
    //path parameters, see mailchimp documentation for each call
  },
  body: {
    //body parameters, see mailchimp documentation for each call
  },
  query: {
    //query string parameters, see mailchimp documentation for each call
  },
});
