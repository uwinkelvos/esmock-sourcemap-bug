import esmock from "esmock";
import { test } from "node:test";
test("sourcemap works with parent", async () => {
    const { start } = await esmock("./index.js", import.meta.url);
    start();
});
test("sourcemap fails without parent", async () => {
    const { start } = await esmock("./index.js");
    start();
});
//# sourceMappingURL=index.test.js.map