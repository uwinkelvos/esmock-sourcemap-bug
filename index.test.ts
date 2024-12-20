import { test } from "node:test";
import { equal } from "node:assert/strict";
import esmock from "esmock";
import type * as indexType from "./index.js";

test("sourcemap works with parent", async (t) => {
  const createServer = t.mock.fn();
  const { start } = await esmock<typeof indexType>(
    "./index.js",
    import.meta.url,
    {
      "node:http": { createServer },
    }
  );
  start();
  equal(createServer.mock.callCount(), 1);
});

test("sourcemap fails without parent", async (t) => {
  const createServer = t.mock.fn();
  const { start } = await esmock<typeof indexType>("./index.js", {
    "node:http": { createServer },
  });
  start();
  equal(createServer.mock.callCount(), 1);
});
