import { Buffer } from "node:buffer";
import convertColor from "@/utilities/color/convert.ts";

// relative to current working directory
const sourcefile = "./source.css";
const path = await Deno.realPath(sourcefile);
const data = Deno.readFileSync(path);
const decoder = new TextDecoder("utf-8");
const file = decoder.decode(data);

// filter value inside parentheses
// const regex = /\((.*?)\)/g;
// const matches = [...file.matchAll(regex)];

const convertedCSSColors = convertColor(file);

// relative to current working directory
const targetresult = "./result.css";
Deno.writeFileSync(targetresult, Buffer.from(convertedCSSColors));
