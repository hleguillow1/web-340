/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 24 February 2018
; Modified By: Hector Leguillow
;===========================================
*/

var url= require ("url");
var parsedURL = url.parse("https://www.example.com/profile?name=barry");

console.log(parsedURL.protocol);  
console.log(parsedURL.host);    
console.log(parsedURL.query);    