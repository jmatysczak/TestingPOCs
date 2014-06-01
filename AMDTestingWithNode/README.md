On windows, the package.json file needs "node_modules/mocha/bin/" in front of "_mocha" in the "test" script:
  "test": "istanbul cover --hook-run-in-context node_modules/mocha/bin/_mocha"
This appears to cause "--hook-run-in-context" to be needed.

"--hook-run-in-context" then appears to cause mocha to find a memory leak:
"Error: global leak detected: __cov_ZPdlK9jA5N4RHYqJmWb_CQ"

So I am removing "--check-leaks" from "test/mocha.opts"
