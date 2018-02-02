// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                      = require("bs-platform/lib/js/list.js");
var Curry                     = require("bs-platform/lib/js/curry.js");
var Prettier                  = require("prettier");
var Prettier$LonaCompilerCore = require("../utils/prettier.bs.js");

function quoted(doc) {
  return Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "\""), doc), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "\""));
}

function render(_ast) {
  while(true) {
    var ast = _ast;
    if (typeof ast === "number") {
      return Prettier$LonaCompilerCore.Doc[/* Builders */0][/* empty */1];
    } else {
      switch (ast.tag | 0) {
        case 0 : 
            var o = ast[0];
            return Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], render(o.prolog), Prettier.doc.builders.hardline), render(o.element));
        case 1 : 
            var match = ast[0].xmlDecl;
            if (match) {
              _ast = match[0];
              continue ;
              
            } else {
              return Prettier$LonaCompilerCore.Doc[/* Builders */0][/* empty */1];
            }
            break;
        case 2 : 
            var o$1 = ast[0];
            var match$1 = o$1.encoding;
            return Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "<?xml "), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "version=")), quoted(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$1.version))), match$1 ? Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], " "), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "encoding=")), quoted(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], match$1[0]))) : Prettier$LonaCompilerCore.Doc[/* Builders */0][/* empty */1]), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "?>"));
        case 3 : 
            var o$2 = ast[0];
            var attributes = o$2.attributes;
            var attributes$1 = attributes ? Prettier.doc.builders.indent(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Prettier.doc.builders.line, Prettier.doc.builders.group(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.line, List.map(render, attributes))))) : Prettier$LonaCompilerCore.Doc[/* Builders */0][/* empty */1];
            var children = o$2.content;
            if (children) {
              return Prettier.doc.builders.group(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "<"), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$2.tag)), attributes$1), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ">")), Prettier.doc.builders.group(Prettier.doc.builders.indent(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Prettier.doc.builders.softline, Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.softline, List.map(render, children)))))), Prettier.doc.builders.softline), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "</")), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$2.tag)), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ">")));
            } else {
              return Prettier.doc.builders.group(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "<"), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$2.tag)), attributes$1), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], " />")));
            }
        case 4 : 
            return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "<!-- " + (ast[0] + " -->"));
        case 5 : 
            var o$3 = ast[0];
            return Prettier.doc.builders.group(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$3.name), Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "=")), Prettier.doc.builders.indent(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* <+> */5], Prettier.doc.builders.softline, quoted(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], o$3.value))))));
        case 6 : 
            return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ast[0]);
        
      }
    }
  };
}

function toString(ast) {
  var doc = render(ast);
  var printerOptions = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: /* false */0
  };
  return Prettier.doc.printer.printDocToString(doc, printerOptions).formatted;
}

exports.quoted   = quoted;
exports.render   = render;
exports.toString = toString;
/* prettier Not a pure module */
