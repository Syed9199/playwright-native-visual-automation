#!/bin/bash
rm -rf playwright-report
rm -rf test-results
npm i
npm run test
read -p "Press any key to continue..."