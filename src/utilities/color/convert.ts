import Color from "https://colorjs.io/dist/color.js";

// TODO: Clean this up
/**
 * Currently only support converting lists of colors with format like shadCn's
 * and will remove `--radius:` in the process
 * @example
 * ```css
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.141 0.005 285.823);
    ...
  }
  ```
 * @param csscolors
 * @param target "hsl" or "oklch"
 * @default "hsl"
 */
const convertColor = (csscolors: string) => {
  const results = csscolors.split("\r\n")
    .map((v) => v.trim()).filter((v) => v.startsWith("--")).map((v) => {
      const [variable, value] = v.split(": ");
      const [removedSemiColon] = value.split(";");

      if (variable.startsWith("--radius")) return `${variable}: ${value}`;

      if (removedSemiColon.startsWith("oklch")) {
        const og = new Color(removedSemiColon);
        // @ts-expect-error: this value is valid but unrecognized by typescript
        const converted = og.to("hsl").toString({ precision: 4 });

        const joined = `${variable}: ${converted};`;
        return joined;
      }
      if (removedSemiColon.startsWith("hsl")) {
        const og = new Color(removedSemiColon);
        // @ts-expect-error: this value is valid but unrecognized by typescript
        const converted = og.to("oklch").toString({ precision: 4 });

        const joined = `${variable}: ${converted};`;
        return joined;
      }

      const og = new Color(`hsl(${removedSemiColon})`);
      // @ts-expect-error: this value is valid but unrecognized by typescript
      const converted = og.to("oklch").toString({ precision: 4 }) as string;

      const joined = `${variable}: ${converted.replace("none", "0")};`;
      return joined;
    });

  let cssContent = ":root {\n";
  for (let index = 0; index < results.length; index++) {
    const element = results[index];

    if (element) {
      if (element.startsWith("--chart-5") && index +1 !== results.length) {
        cssContent += `  ${element}\n}\n\n.dark {\n`;
      } else {
        cssContent += `  ${element}\n`;
      }
    } else {
      cssContent += "}\n\n.dark {\n";
    }
  }

  cssContent += "}";
  return cssContent;
};
export default convertColor;
