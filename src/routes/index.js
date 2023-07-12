import express from "express";
import novo from "./novoRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({message: "Resumo Biblia"});
  });

  app.use(express.json(),
    novo);
};

export default routes;

