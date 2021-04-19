
// Standard format of Postman test
pm.test("Some Test Name", function(){

    console.log("Some test response");
});


// standard 200 check for all pages
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

/*  ****************************************************************** */
// Find text on page to verify
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Start of Zendesk Widget");
});

/*  ****************************************************************** */
// Check for specific cookies and log result
pm.test("ASP.NET_SessionId exists", function(){
    pm.expect(pm.cookies.has('ASP.NET_SessionId')).to.be.true;
    console.log("ASP.NET_SessionId exists");
    
});


/*  ****************************************************************** */
// Test returned JSON against expected JSON response
var response = pm.response.json();

//tests["Test 001"] = response.field === value;
tests["Test 001"] = response.ID === null;
tests["Test 002"] = response.NewID === 8144;
tests["Test 003"] = response.Username === "bob001";
tests["Test 004"] = response.Name === "Bob Phantom 001";
tests["Test 005"] = response.Email ===  "something@gmail.com";

/*  ****************************************************************** */
// Build cookie jar and fill
const cookieJar = pm.cookies.jar();
cookieJar.set("https://address.com", "ASP.NET_SessionId"); // create a cookie
cookieJar.set("https://address.com", ".ASPXAUTH");

/*  ****************************************************************** */
// JSON schema validation
// Warning -- This test really only checks for object vs array. 
// Use more specific test for arrays of items.
var schema = {
    "type": "array", // change array to object to check for failure
    "properties":{
        "customerID":{"type": "string"},
        "schoolName":{"type": "string"},
        "schoolName_encoded":{"type": "string"}
    }};

pm.test('Response schema type nodes verification', function() {
  pm.expect(tv4.validate(pm.response.json(), schema)).to.be.true;
});

/*
Expected JSON format :
[
    {
        "customerID": "MO9999",
        "schoolName": "Some Name Test Middle School",
    },
    {
        "customerID": "MO9999",
        "schoolName": "Some Name Test High School",
    }, ...
]
*/

/*  ****************************************************************** */
// Check Headers

pm.test("Cache-Control is present", function () {
    pm.response.to.have.header("Cache-Control");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Server type is present", function () {
    pm.response.to.have.header("Server");
});

pm.test("X-AspNetMvc-Version is present", function () {
    pm.response.to.have.header("X-AspNetMvc-Version");
});

pm.test("X-AspNet-Version is present", function () {
    pm.response.to.have.header("X-AspNet-Version");
});

pm.test("X-NewRelic-App-Data is present", function () {
    pm.response.to.have.header("X-NewRelic-App-Data");
});

pm.test("X-Powered-By is present", function () {
    pm.response.to.have.header("X-Powered-By");
});
pm.test("Access-Control-Allow-Origin is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Origin");
});

pm.test("Access-Control-Allow-Credentials is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Credentials");
});

pm.test("Access-Control-Allow-Headers is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Headers");
});

pm.test("Date is present", function () {
    pm.response.to.have.header("Date");
});

pm.test("Content-Length is present", function () {
    pm.response.to.have.header("Content-Length");
});

/*  ****************************************************************** */
// Standard Postman snippets

pm.environment.get("variable_key");

pm.globals.get("variable_key");

pm.variables.get("variable_key");

pm.environment.set("variable_key", "variable_value");

pm.globals.set("variable_key", "variable_value");

pm.environment.unset("variable_key");

pm.globals.unset("variable_key");

pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});

pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});

pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});

var jsonObject = xml2Json(responseBody);

var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});


/*  ****************************************************************** */
/*  ****************************************************************** */
// Standard 200 check for all pages
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

/*  ****************************************************************** */
// Check for specific cookies and log result
pm.test("ASP.NET_SessionId exists", function(){
    pm.expect(pm.cookies.has('ASP.NET_SessionId')).to.be.true;
    console.log("ASP.NET_SessionId exists");
    
});

pm.test(".ASPXAUTH exists", function(){
    pm.expect(pm.cookies.has('.ASPXAUTH')).to.be.true;
    console.log(".ASPXAUTH exists");
    
});

/*  ****************************************************************** */
// Check Headers

pm.test("Cache-Control is present", function () {
    pm.response.to.have.header("Cache-Control");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Server type is present", function () {
    pm.response.to.have.header("Server");
});

pm.test("X-AspNetMvc-Version is present", function () {
    pm.response.to.have.header("X-AspNetMvc-Version");
});

pm.test("X-AspNet-Version is present", function () {
    pm.response.to.have.header("X-AspNet-Version");
});

pm.test("X-NewRelic-App-Data is present", function () {
    pm.response.to.have.header("X-NewRelic-App-Data");
});

pm.test("X-Powered-By is present", function () {
    pm.response.to.have.header("X-Powered-By");
});
pm.test("Access-Control-Allow-Origin is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Origin");
});

pm.test("Access-Control-Allow-Credentials is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Credentials");
});

pm.test("Access-Control-Allow-Headers is present", function () {
    pm.response.to.have.header("Access-Control-Allow-Headers");
});

pm.test("Date is present", function () {
    pm.response.to.have.header("Date");
});

pm.test("Content-Length is present", function () {
    pm.response.to.have.header("Content-Length");
});



