import express, { Express, RequestHandler } from "express";
import {handler, handler2} from "./handlers";

class FooClass {
    app: Express;

    private func() {
        app.get("/matoki", handler);
        this.app.get("/matoki2", handler2);
    }
}