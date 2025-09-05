import express from "express";
const app = express();
let requestCount = 0;
app.use(function middleware(req, res, next) {
    requestCount++;
    next();
});
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/requestCount", (req, res) => {
    res.json({
        requestCount
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map