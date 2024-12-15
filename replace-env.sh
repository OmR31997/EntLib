#!/bin/bash
echo "Replacing environment variables..."

# Replace placeholders in environment.prod.template.ts and save to environment.prod.ts
envsubst < src/environments/environment.prod.template.ts > src/environments/environment.prod.ts

echo "Environment variables replaced successfully!"