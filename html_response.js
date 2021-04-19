// A listing of possible html status codes
// Packeged for use in Postman javascript

// for negation add "not" i.e. response.to.have.status() > response.to.not.have.status()

pm.test("Status code is 200 ", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is not 2xx ", function () {
    pm.response.to.not.have.status(201);
    pm.response.to.not.have.status(202);
    pm.response.to.not.have.status(203);
    pm.response.to.not.have.status(204);
    pm.response.to.not.have.status(205);
    pm.response.to.not.have.status(206);
    pm.response.to.not.have.status(207);
    pm.response.to.not.have.status(208);
    pm.response.to.not.have.status(226);
});

pm.test("Status code is not 3xx ", function () {
    pm.response.to.not.have.status(300);
    pm.response.to.not.have.status(301);
    pm.response.to.not.have.status(302);
    pm.response.to.not.have.status(303);
    pm.response.to.not.have.status(304);
    pm.response.to.not.have.status(305);
    pm.response.to.not.have.status(306);
    pm.response.to.not.have.status(307);
    pm.response.to.not.have.status(308);
});

pm.test("Status code is not 4xx ", function () {
    pm.response.to.not.have.status(400);
    pm.response.to.not.have.status(401);
    pm.response.to.not.have.status(402);
    pm.response.to.not.have.status(403);
    pm.response.to.not.have.status(404);
    pm.response.to.not.have.status(405);
    pm.response.to.not.have.status(406);
    pm.response.to.not.have.status(407);
    pm.response.to.not.have.status(408);
    pm.response.to.not.have.status(409);
    pm.response.to.not.have.status(410);
    pm.response.to.not.have.status(411);
    pm.response.to.not.have.status(412);
    pm.response.to.not.have.status(413);
    pm.response.to.not.have.status(414);
    pm.response.to.not.have.status(415);
    pm.response.to.not.have.status(416);
    pm.response.to.not.have.status(417);
    pm.response.to.not.have.status(418);
    pm.response.to.not.have.status(421);
    pm.response.to.not.have.status(422);
    pm.response.to.not.have.status(423);
    pm.response.to.not.have.status(424);
    pm.response.to.not.have.status(425);
    pm.response.to.not.have.status(426);
    pm.response.to.not.have.status(428);
    pm.response.to.not.have.status(429);
    pm.response.to.not.have.status(431);
    pm.response.to.not.have.status(451);
});

pm.test("Status code is not 5xx ", function () {
    pm.response.to.not.have.status(500);
    pm.response.to.not.have.status(501);
    pm.response.to.not.have.status(502);
    pm.response.to.not.have.status(503);
    pm.response.to.not.have.status(504);
    pm.response.to.not.have.status(505);
    pm.response.to.not.have.status(506);
    pm.response.to.not.have.status(507);
    pm.response.to.not.have.status(508);
    pm.response.to.not.have.status(510);
    pm.response.to.not.have.status(511);
});
