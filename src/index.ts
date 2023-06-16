// @ts-ignore
import { default as Viz } from "@viz-js/viz";
import fs from "fs/promises";

const render = async (src: string): Promise<string> => {
  const v = await Viz.instance()
  try {
    return v.renderString(src, { format: "svg" })
  } catch (e: unknown) {
    throw new Error("failed to rendering", { cause: e })
  }
}


const main = () => {
  fs.readFile("/dev/stdin", { encoding: "utf8" })
    .then(stdin => {
      return render(stdin)
    })
    .then((rendered: string) => {
      console.log(rendered)
    })
    .catch((e: unknown) => {
      console.error(e)
      process.exit(2)
    })
}

main()
