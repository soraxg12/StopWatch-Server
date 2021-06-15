import { app } from "./app";
//liga a api
app.listen(process.env.PORT || 3333, () => console.log("server on"));