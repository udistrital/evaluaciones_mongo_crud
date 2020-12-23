#!/usr/bin/env bash

set -e
set -u
set -o pipefail

if [ -n "${PARAMETER_STORE:-}" ]; then
  export EVALUACIONES_MONGO_CRUD_USER="$(aws ssm get-parameter --name /${PARAMETER_STORE}/evaluaciones_mongo_crud/db/username --output text --query Parameter.Value)"
  export EVALUACIONES_MONGO_CRUD_PASS="$(aws ssm get-parameter --with-decryption --name /${PARAMETER_STORE}/evaluaciones_mongo_crud/db/password --output text --query Parameter.Value)"
fi

exec node dist/main
