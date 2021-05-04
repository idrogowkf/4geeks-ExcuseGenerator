/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "aliens", "comedian", "pincone"];
  let actions = ["sawllow my", "took my", "stole my", "hide my", "kidnap my"];
  let possetion = ["homework", "money", "basseball bat", "heart", "hair"];
  let where = [
    "at the street",
    "at Unknow dimention",
    "in my dreams",
    "in my backyard",
    "by my neigbor"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * actions.length);
  let possIndex = Math.floor(Math.random() * possetion.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    actions[actIndex] +
    " " +
    possetion[possIndex] +
    " " +
    where[whereindex]
  );
};
