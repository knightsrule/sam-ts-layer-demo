#!/bin/bash

# Clean previous build outputs
rm -rf layer/nodejs/dist
rm -rf lambda/dist

# Build the layer
cd layer/nodejs
npm install
npx tsc
cd ../..

# Build the Lambda function
cd lambda
npm install
npx tsc
cd ..

# Package the SAM application
#sam build

# Deploy the SAM application
#sam deploy --guided